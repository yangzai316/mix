import React from 'react';
import ELEMENTS from './../const/ELEMENT_LIST';

/**
 *
 * 布局右边区域，元素区，可拖拽的元素的集合
 */
const ElementSpace = ({ setTarget }) => {
  const dragStart = (e) => {
    const _target = JSON.parse(
      JSON.stringify(ELEMENTS[e?.target?.dataset?.key])
    );
    _target.id = `id-${+new Date()}`;
    setTarget(_target);
  };

  return (
    <div className="element-space">
      <div className="element">
        {Object.keys(ELEMENTS).map((item) => {
          return (
            <p
              draggable="true"
              className="item"
              data-key={item}
              key={item}
              onDragStart={dragStart}
            >
              {ELEMENTS[item].text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ElementSpace;
