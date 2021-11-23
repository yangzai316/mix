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
      title: '宽度',
      type: 'input',
      key: 'width',
      value: '100%',
    },
    {
      title: '高度',
      type: 'input',
      key: 'height',
      value: '100%',
    },
    {
      title: '布局方式',
      type: 'radio',
      key: 'display',
      value: 'block',
    },
    {
      title: '主轴方向',
      depend: 'display=flex',
      type: 'radio',
      key: 'flexDirection',
      value: 'row',
    },
    {
      title: '换行',
      depend: 'display=flex',
      type: 'radio',
      key: 'flexWrap',
      value: 'nowrap',
    },
    {
      title: '主轴对齐',
      depend: 'display=flex',
      type: 'radio',
      key: 'justifyContent',
      value: 'flex-start',
    },
    {
      title: '交叉轴对齐',
      depend: 'display=flex',
      type: 'radio',
      key: 'alignItems',
      value: 'stretch',
    },
    {
      title: '外边距-上',
      type: 'input',
      key: 'marginTop',
      value: '0',
    },
    {
      title: '-下',
      type: 'input',
      key: 'marginBottom',
      value: '0',
    },
    {
      title: '-左',
      type: 'input',
      key: 'marginLeft',
      value: '0',
    },
    {
      title: '-右',
      type: 'input',
      key: 'marginRight',
      value: '0',
    },
    {
      title: '内边距-上',
      type: 'input',
      key: 'paddingTop',
      value: '0',
    },
    {
      title: '-下',
      type: 'input',
      key: 'paddingBottom',
      value: '0',
    },
    {
      title: '-左',
      type: 'input',
      key: 'paddingLeft',
      value: '0',
    },
    {
      title: '-右',
      type: 'input',
      key: 'paddingRight',
      value: '0',
    },
  ],
  children: [],
};

export default targetTree;
