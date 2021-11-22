import React, { useEffect } from "react";
import {
    createElement,
} from './../utils'
/**
 * 
 * 布局中间区域，工作区，拖拽的元素被放置的区域
 */
const WorkSpace = ({ tree, setContainer }) => {
    const dragOver = (e) => {
        e.preventDefault();
    }
    const drop = (e) => {
        e.preventDefault();
        setContainer(e.target.dataset.id);
    };

    useEffect(() => {
        const content = createElement(tree);
        document.getElementById('box').replaceChildren();
        document.getElementById('box').appendChild(content);
    }, [tree])
    return (
        <div id="box" className="work-space" onDragOver={dragOver} onDrop={drop}>

        </div>
    )
};



export default WorkSpace;