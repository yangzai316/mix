import React, { useEffect, useMemo, useState } from 'react';
import { Switch } from 'antd';
import { createElement, getParentId } from './../utils';
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
    let id = e.target.dataset.id;
    // img span 不作为容器使用，寻找并返回其上级的id
    if (e.target.nodeName !== 'DIV') {
      id = getParentId(e.target);
    }
    setContainer(id, e.target.nodeName);
  };
  // 是否开启虚线辅助
  const [isNeedHelp, setIsNeedHelp] = useState(true);
  const switchChange = (val) => {
    setIsNeedHelp(val);
  };

  // 生成 reactElement 元素
  const E = createElement(tree, focusCurrentComponent);

  return (
    <div className="work-space">
      <div className="switch">
        虚线辅助&nbsp;
        <Switch size="small" checked={isNeedHelp} onChange={switchChange} />
      </div>

      <div
        id="box"
        className={isNeedHelp ? 'dashed-helper' : ''}
        onDragOver={dragOver}
        onDrop={drop}
      >
        {E}
      </div>
    </div>
  );
};

export default WorkSpace;
