import React from 'react';

/**
 *
 * @param {*} tree
 * @returns 创建reactElement 内容
 */
export const createElement = (tree) => {
  const childs = createChildElement(tree?.children || []);

  return React.createElement(
    tree?.name,
    {
      style: formatStyle(tree?.styles),
      key: tree?.id,
      ['data-id']: tree?.id,
    },
    childs
  );
};

/**
 *
 * @param {*} children
 * @returns 循环递归 处理reactElement 子元素
 */

const createChildElement = (children) => {
  return children.map((item) => {
    let c = null;
    if (item.content) {
      c = item.content;
    } else if (item?.children?.length) {
      c = createChildElement(item?.children);
    }
    return React.createElement(
      item?.name,
      {
        style: formatStyle(item?.styles || []),
        ...item.attribute,
        key: item.id,
        ['data-id']: item.id,
      },
      c
    );
  });
};

/**
 * 格式化 样式属性配置 参数
 */
export const formatStyle = (data) => {
  const res = {};
  data.forEach((item) => {
    res[item.key] = item.value;
  });
  return res;
};
