import React from 'react';
import SUB_ATTRS from './const/SUB_ATTRS_LIST';

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
      style: updateStyle(tree?.baseStyle, tree?.backgroundStyle),
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
        style: updateStyle(item?.baseStyle, item?.backgroundStyle),
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
export const updateStyle = (baseStyle = {}, backgroundStyle = {}) => {
  const res = {};
  const data = { ...baseStyle, ...backgroundStyle };
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
 * flex 的连带属性，单独处理
 */
export const dealFlexRelateAttr = (target, key, value) => {
  if (value === 'flex') {
    // flex
    target = {
      ...target,
      ...SUB_ATTRS.flex,
    };
  } else {
    // block
    for (const key in SUB_ATTRS.flex) {
      delete target[key];
    }
  }

  return target;
};

/**
 *
 * background 的连带属性，单独处理
 */
export const dealBackgroundAttr = (target, value) => {
  if (value === 'color') {
    // backgroundcolor
    target = SUB_ATTRS.backgroundColor;
  } else if (value === 'image') {
    // backgroundimage
    target = SUB_ATTRS.backgroundImage;
  } else {
    target = {};
  }
  return target;
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
