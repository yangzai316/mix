import React, { useEffect, useMemo } from 'react';
import { createElement } from './../utils';
/**
 * 布局中间区域，工作区，拖拽的元素被放置的区域
 */
const WorkSpace = ({ tree, setContainer, focusCurrentComponent }) => {
  // 拖拽 设置
  const dragOver = (e) => {
    e.preventDefault();
  };
  const drop = (e) => {
    e.preventDefault();
    setContainer(e.target.dataset.id);
  };

  // 生成 reactElement 元素
  const E = createElement(tree, focusCurrentComponent);

  return (
    <div id="box" className="work-space" onDragOver={dragOver} onDrop={drop}>
      {E}
    </div>
  );
};

export default WorkSpace;
