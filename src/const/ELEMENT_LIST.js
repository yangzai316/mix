/**
 * 可拖拽的元素的集合
 * 静态的、恒量
 */

const ELEMENTS = {
  div: {
    name: 'div',
    text: '容器',
    styles: {
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
    styles: {
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
