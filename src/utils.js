import React from 'react';
import SUB_ATTRS from './const/SUB_ATTRS_LIST';
import targetTree from './data/target-tree';

/**
 *
 * @param {*} tree
 * @returns 创建reactElement 内容
 */
export const createElement = (tree, focusCurrentComponent) => {
  // 添加点击事件
  const click = (id) => {
    focusCurrentComponent(id);
  };

  // 循环递归 创建子元素
  const childs = createChildElement(tree?.children || [], click);

  return React.createElement(
    tree?.name,
    {
      style: updateStyle(
        tree?.baseStyle,
        tree?.backgroundStyle,
        tree?.borderStyle,
        tree?.positionStyle,
        tree?.layoutStyle
      ),
      key: tree?.id,
      ['data-id']: tree?.id,
      onClick: (e) => {
        e.stopPropagation();
        click(tree?.id);
      },
    },
    childs
  );
};

/**
 *
 * @param {*} children
 * @returns 循环递归 处理reactElement 子元素
 */
const createChildElement = (children, method) => {
  return children.map((item) => {
    let c = null;
    if (item.content) {
      c = item.content;
    } else if (item?.children?.length) {
      c = createChildElement(item?.children, method);
    }

    return React.createElement(
      item?.name,
      {
        style: updateStyle(
          item?.baseStyle,
          item?.backgroundStyle,
          item?.borderStyle,
          item?.positionStyle,
          item?.layoutStyle
        ),
        ...updateAttribute(item.attribute),
        key: item.id,
        ['data-id']: item.id,
        onClick: (e) => {
          e.stopPropagation();
          method(item.id);
        },
      },
      c
    );
  });
};

/**
 * 样式配置，格式化为 {} 形式
 */
export const updateStyle = (
  baseStyle = {},
  backgroundStyle = {},
  borderStyle = {},
  positionStyle = {},
  layoutStyle = {}
) => {
  const res = {};
  const data = {
    ...baseStyle,
    ...backgroundStyle,
    ...borderStyle,
    ...positionStyle,
    ...layoutStyle,
  };
  for (const key in data) {
    if (key === 'backgroundImage') {
      res[key] = `url(${data[key].value})`;
    } else {
      res[key] = data[key].value;
    }
  }
  return res;
};

/**
 * 属性配置，格式化为 {} 形式
 */
export const updateAttribute = (data) => {
  const res = {};
  for (const key in data) {
    res[key] = data[key].value;
  }
  return res;
};

/**
 *
 * 特殊属性，单独处理
 */
export const dealSpecificProperty = (value) => {
  if (value) {
    return JSON.parse(JSON.stringify(SUB_ATTRS[value]));
  }
  return {};
};
/**
 * 通过 id 寻找对应的元素
 */
export const deleteComponentById = (tree, id) => {
  findNodeAndDelete(tree, id);
};
const findNodeAndDelete = (data, id, index, parentList) => {
  if (data.id === id) {
    return parentList.splice(index, 1);
  } else if (data?.children?.length) {
    return data.children.forEach((item, index) => {
      findNodeAndDelete(item, id, index, data.children);
    });
  }
};

/**
 * 打开新tab页面，对效果进行预览
 */
export const preView = () => {
  const newWindow = window.open('', '', 'status,width=100%,height=100%');
  newWindow.focus();
  newWindow.document.write(htmlCode());
  newWindow.document.close();
};
/**
 * html 格式源码
 */
export const htmlCode = () => {
  const content = document.getElementById('box').innerHTML;
  const script = targetTree.script || '';
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>MIX-预览</title></head>
    <body>${content}</body>
    <script>${script}</script>
  </html>`;
};

/**
 * 导出json / html 文件
 */

export const exportJSON = (filename) => {
  exportFile(
    [JSON.stringify(targetTree, null, 2)],
    filename,
    'application/json;charset=utf-8'
  );
};
export const exportHTML = (filename) => {
  const data = htmlCode();
  exportFile(data, filename, 'text/html;charset=utf-8');
};

/**
 * Blob 下载文件
 */
const exportFile = (data, filename = 'MIX', contentType) => {
  let blob = new Blob([data], { type: contentType });
  const a = document.createElement('a');
  a.download = filename;

  a.href = window.URL.createObjectURL(blob);

  a.dataset.downloadurl = [contentType, a.download, a.href].join(':');

  let event = new MouseEvent('click', {});

  a.dispatchEvent(event);
};

/**
 * 事件组装，完成事件字符串的拼接
 */
export const createScriptStr = (id, eventName, eventContent, type) => {
  let _ = '';
  if (type === 2) {
    _ = `document.querySelector('[data-id=${id}]').${eventName}=function(){
       window.open('${eventContent}');
     }`;
  } else if (type === 3) {
    _ = `document.querySelector('[data-id=${id}]').${eventName}=function(){
      ${eventContent}
     }`;
  }
  return _;
};

/**
 * 返回父节点的 id
 */

export const getParentId = (node) => {
  return node?.parentNode?.dataset?.id;
};
