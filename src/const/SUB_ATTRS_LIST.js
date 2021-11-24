/**
 * 属性集合
 */

const SUB_ATTRS = {
  flex: {
    flexDirection: {
      title: '主轴方向',
      type: 'Radio',
      value: 'row',
    },
    flexWrap: {
      title: '换行',
      type: 'Radio',
      value: 'nowrap',
    },
    justifyContent: {
      title: '主轴对齐',
      type: 'Radio',
      value: 'flex-start',
    },
    alignItems: {
      title: '交叉轴对齐',
      type: 'Radio',
      value: 'stretch',
    },
  },
  backgroundColor: {
    backgroundColor: {
      title: '背景色',
      type: 'InputColor',
      value: '#ffffff',
    },
  },
  backgroundImage: {
    backgroundImage: {
      title: '图片地址',
      type: 'Input',
      value: '',
    },
    backgroundPosition: {
      title: '图片位置',
      type: 'Select',
      value: '',
    },
    backgroundSize: {
      title: '图片尺寸',
      type: 'Radio',
      value: '',
    },
    backgroundRepeat: {
      title: '图片重复',
      type: 'Select',
      value: '',
    },
  },
  borderSingle: {
    borderTop: {
      title: '上边框',
      type: 'Input',
      value: '',
    },
    borderBottom: {
      title: '下边框',
      type: 'Input',
      value: '',
    },
    borderLeft: {
      title: '左边框',
      type: 'Input',
      value: '',
    },
    borderRight: {
      title: '右边框',
      type: 'Input',
      value: '',
    },
  },
  borderRound: {
    border: {
      title: '边框',
      type: 'Input',
      value: '',
    },
  },
};

export default SUB_ATTRS;
