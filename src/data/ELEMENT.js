/**
 * 可拖拽的元素的集合
 * 静态的、恒量
 */

const ELEMENTS = {
    div: {
        name: 'div',
        text: '容器',
        styles: [
            {
                title: "宽度",
                type: "input",
                key: "width",
                value: "100px"
            },
            {
                title: "高度",
                type: "input",
                key: "height",
                value: "40px"
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
        ]
    },
    span: {
        name: 'span',
        text: '文本',
        content: '我是一个文本'
    },
    img: {
        name: 'img',
        text: '图片',
        attribute: {
            src: ''
        },
        style: {
            width: '100px',
            height: '100px',
            marginTop: '',
            marginBottom: '',
            marginLeft: '',
            marginRight: '',
        }
    },
};

export default ELEMENTS;