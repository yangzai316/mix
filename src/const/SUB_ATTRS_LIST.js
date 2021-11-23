/**
 * 属性集合
 */

const SUB_ATTRS = {
  flexContainer: {
    flexDirection: {
      title: '主轴方向',
      type: 'radio',

      value: 'row',
    },
    flexWrap: {
      title: '换行',
      type: 'radio',

      value: 'nowrap',
    },
    justifyContent: {
      title: '主轴对齐',
      type: 'radio',

      value: 'flex-start',
    },
    alignItems: {
      title: '交叉轴对齐',
      type: 'radio',

      value: 'stretch',
    },
  },
};

export default SUB_ATTRS;
