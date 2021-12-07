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
        value: '80px',
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
      borderRadius: {
        title: '边框圆角',
        type: 'Input',
        value: '0px',
      },
    },
    layoutStyle: {
      display: {
        title: '布局方式',
        type: 'Radio',
        value: 'block',
      },
    },
    backgroundStyle: {},
    borderStyle: {},
    positionStyle: {
      position: {
        title: '定位',
        type: 'Select',
        value: 'static',
      },
      top: {
        title: '位移-上',
        type: 'Input',
        value: '0px',
      },
      bottom: {
        title: '-下',
        type: 'Input',
        value: '0px',
      },
      left: {
        title: '-左',
        type: 'Input',
        value: '0px',
      },
      right: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
      zIndex: {
        title: '层叠顺序',
        type: 'Input',
        value: '0',
      },
    },
    children: [],
  },
  span: {
    name: 'span',
    text: '文本',
    content: '我是一个文本',
    baseStyle: {
      fontSize: {
        title: '字号',
        type: 'Input',
        value: '14px',
      },
      color: {
        title: '颜色',
        type: 'InputColor',
        value: '#666666',
      },
      fontWeight: {
        title: '加粗',
        type: 'Radio',
        value: 'normal',
      },
      marginLeft: {
        title: '外边距-左',
        type: 'Input',
        value: '0px',
      },
      marginRight: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
      paddingLeft: {
        title: '内边距-左',
        type: 'Input',
        value: '0px',
      },
      paddingRight: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
    },
    backgroundStyle: {},
    borderStyle: {},
    positionStyle: {
      position: {
        title: '定位',
        type: 'Select',
        value: 'static',
      },
      top: {
        title: '位移-上',
        type: 'Input',
        value: '0px',
      },
      bottom: {
        title: '-下',
        type: 'Input',
        value: '0px',
      },
      left: {
        title: '-左',
        type: 'Input',
        value: '0px',
      },
      right: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
      zIndex: {
        title: '层叠顺序',
        type: 'Input',
        value: '0',
      },
    },
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
      borderRadius: {
        title: '边框圆角',
        type: 'Input',
        value: '0px',
      },
    },
    backgroundStyle: {},
    borderStyle: {},
    positionStyle: {
      position: {
        title: '定位',
        type: 'Select',
        value: 'static',
      },
      top: {
        title: '位移-上',
        type: 'Input',
        value: '0px',
      },
      bottom: {
        title: '-下',
        type: 'Input',
        value: '0px',
      },
      left: {
        title: '-左',
        type: 'Input',
        value: '0px',
      },
      right: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
      zIndex: {
        title: '层叠顺序',
        type: 'Input',
        value: '0',
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
  input: {
    name: 'input',
    text: '单行输入框',
    baseStyle: {
      width: {
        title: '宽度',
        type: 'Input',
        value: '200px',
      },
      height: {
        title: '高度',
        type: 'Input',
        value: '32px',
      },
      fontSize: {
        title: '字号',
        type: 'Input',
        value: '14px',
      },
      color: {
        title: '颜色',
        type: 'InputColor',
        value: '#666666',
      },
      fontWeight: {
        title: '加粗',
        type: 'Radio',
        value: 'normal',
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
      borderRadius: {
        title: '边框圆角',
        type: 'Input',
        value: '0px',
      },
    },
    backgroundStyle: {},
    borderStyle: {},
    positionStyle: {
      position: {
        title: '定位',
        type: 'Select',
        value: 'static',
      },
      top: {
        title: '位移-上',
        type: 'Input',
        value: '0px',
      },
      bottom: {
        title: '-下',
        type: 'Input',
        value: '0px',
      },
      left: {
        title: '-左',
        type: 'Input',
        value: '0px',
      },
      right: {
        title: '-右',
        type: 'Input',
        value: '0px',
      },
      zIndex: {
        title: '层叠顺序',
        type: 'Input',
        value: '0',
      },
    },
    children: [],
  },
};

export default ELEMENTS;
