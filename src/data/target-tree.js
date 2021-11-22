/**
 * 整体得到的最终数据
 * 树形
 * 默认只存在 root 容器
 */
let targetTree = {
    name: 'div',
    id: 'root',
    text: '容器',
    styles: [
        {
            title: "宽度",
            type: "input",
            key: "width",
            value: "100%"
        },
        {
            title: "高度",
            type: "input",
            key: "height",
            value: "100%"
        },
        {
            title: "布局方式",
            type: "radio",
            key: 'display',
            value: "block",

        },
        {
            title: "主轴方向",
            type: "radio",
            key: 'flexDirection',
            value: "row",

        },
    ],
    children: []
};

export default targetTree;
