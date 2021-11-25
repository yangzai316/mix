import React from 'react';
/**
 * 字体 组件
 * <Icon fontSize="12">&#xe7ae;</Icon>
 */
const Icon = ({ children, fontSize }) => {
  return (
    <i className="iconfont" style={{ fontSize: `${fontSize}px` }}>
      {children}
    </i>
  );
};

export default Icon;
