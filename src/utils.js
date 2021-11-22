
import React from "react";

/**
 * 
 * @param {*} children 
 * @returns 创建reactElement 内容
 */

export const createRElement = (children) => {

    return children.map(item => {
        let c = null;
        if (item.content) {
            c = item.content
        } else if (item?.children?.length) {
            c = createRElement(item?.children);
        };
        return React.createElement(item?.name,
            {
                style: formatStyle(item?.styles || []),
                ...item.attribute,
                key: item.id,
                ['data-id']: item.id
            }, c)
    });
};



/**
 * 格式化 样式属性配置 参数
 */
export const formatStyle = (data) => {
    const res = {};
    data.forEach(item => {
        res[item.key] = item.value
    });
    console.log(res);
    return res;
};