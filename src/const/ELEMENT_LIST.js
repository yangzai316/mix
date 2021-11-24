/**
 * 可拖拽的元素的集合
 * 静态的、恒量
 */

const ELEMENTS = {
  div: {
    name: 'div',
    text: '容器',
    baseStyle: {
      width: {
        title: '宽度',
        type: 'Input',
        value: '200px',
      },
      height: {
        title: '高度',
        type: 'Input',
        value: '40px',
      },
      display: {
        title: '布局方式',
        type: 'Radio',
        value: 'block',
      },
      marginTop: {
        title: '外边距-上',
        type: 'Input',
        value: '0px',
      },
      marginBottom: {
        title: '-下',
        type: 'Input',
        value: '0px',
      },
      marginLeft: {
        title: '-左',
        type: 'Input',
        value: '0px',
      },
      marginRight: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
      paddingTop: {
        title: '内边距-上',
        type: 'Input',
        value: '0px',
      },
      paddingBottom: {
        title: '-下',
        type: 'Input',
        value: '0px',
      },
      paddingLeft: {
        title: '-左',
        type: 'Input',
        value: '0px',
      },
      paddingRight: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
    },
  },
  span: {
    name: 'span',
    text: '文本',
    content: '我是一个文本',
  },
  img: {
    name: 'img',
    text: '图片',
    baseStyle: {
      width: {
        title: '宽度',
        type: 'Input',
        value: '100px',
      },
      height: {
        title: '高度',
        type: 'Input',
        value: '100px',
      },
    },
    attribute: {
      src: {
        title: '图片地址',
        type: 'Input',
        value: '',
      },
    },
  },
};

export default ELEMENTS;
