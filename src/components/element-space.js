import React from 'react';
import ELEMENTS from './../const/ELEMENT_LIST';

/**
 *
 * 布局右边区域，元素区，可拖拽的元素的集合
 */
const ElementSpace = ({ setTarget, count, onIncreaseClick }) => {
  const dragStart = (e) => {
    const _t = JSON.parse(JSON.stringify(ELEMENTS[e?.target?.dataset?.key]));
    _t.id = +new Date();
    setTarget(_t);
  };

  return (
    <div className="element-space">
      <div className="element">
        {Object.keys(ELEMENTS).map((item) => {
          return (
            <p
              draggable="true"
              className="item"
              key={item}
              onDragStart={dragStart}
              data-key={item}
            >
              {ELEMENTS[item].text}
              {count}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ElementSpace;
