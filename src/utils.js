import React from 'react';

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
      style: updateStyle(tree?.styles),
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
        style: updateStyle(item?.styles || []),
        ...item.attribute,
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
 * 样式属性配置，格式化为 {} 形式
 */
export const updateStyle = (data) => {
  const res = {};
  for (const key in data) {
    res[key] = data[key].value;
  }
  return res;
};
