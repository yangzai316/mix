/**
 * 整体得到的最终数据
 * 树形
 * 默认只存在 root 容器
 */
let targetTree = {
  name: 'div',
  id: 'root',
  text: '容器',
  styles: {
    width: {
      title: '宽度',
      type: 'input',
      value: '100%',
    },
    height: {
      title: '高度',
      type: 'input',
      value: '100%',
    },
    display: {
      title: '布局方式',
      type: 'radio',
      value: 'block',
    },
  },
  children: [],
};

export default targetTree;
