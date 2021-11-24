/**
 * 整体得到的最终数据
 * 树形
 * 默认只存在 root 容器
 */
let targetTree = {
  name: 'div',
  id: 'root',
  text: '容器',
  baseStyle: {
    width: {
      title: '宽度',
      type: 'Input',
      value: '100%',
    },
    height: {
      title: '高度',
      type: 'Input',
      value: '100%',
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
  layoutStyle: {
    display: {
      title: '布局方式',
      type: 'Radio',
      value: 'block',
    },
  },
  backgroundStyle: {},
  borderStyle: {},
  children: [],
};

export default targetTree;
