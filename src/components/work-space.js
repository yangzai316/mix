import React, { useEffect, useMemo } from "react";
import {
    createRElement,
    formatStyle
} from './../utils'
/**
 * 布局中间区域，工作区，拖拽的元素被放置的区域
 */
const WorkSpace = ({ tree, setContainer }) => {
    // 拖拽 设置
    const dragOver = (e) => {
        e.preventDefault();
    }
    const drop = (e) => {
        e.preventDefault();
        setContainer(e.target.dataset.id);
    };

    // 生成 reactElement 元素
    const childElements = useMemo(() => {
        return createRElement(tree?.children || [])
    }, [tree]);


    return (
        <div id="box" className="work-space" onDragOver={dragOver} onDrop={drop}>
            {
                React.createElement(tree?.name, { style: formatStyle(tree?.styles), key: tree?.id, ['data-id']: tree?.id }, childElements)
            }
        </div>
    )
};




export default WorkSpace;