const ATTRS = {
  display: [
    {
      title: '块级布局',
      name: '\ue62a',
      key: 'block',
    },
    {
      title: '弹性布局',
      name: '\ued99',
      key: 'flex',
    },
  ],
  flexDirection: [
    {
      title: '由左向右',
      name: '\ue632',
      key: 'row',
    },
    {
      title: '由右向左',
      name: '\ue633',
      key: 'row-reverse',
    },
    {
      title: '由上向下',
      name: '\ue631',
      key: 'column',
    },
    {
      title: '由下向上',
      name: '\ue630',
      key: 'column-revers',
    },
  ],
  flexWrap: [
    {
      title: '不换行',
      name: '\ue608',
      key: 'nowrap',
    },
    {
      title: '换行，第一行在上方',
      name: '\ue61e',
      key: 'wrap',
    },
    {
      title: '换行，第一行在下方',
      name: '\ue60e',
      key: 'wrap-reverse',
    },
  ],
  justifyContent: [
    {
      title: '左对齐',
      name: '\ue604',
      key: 'flex-start',
    },
    {
      title: '右对齐',
      name: '\ue605',
      key: 'flex-end',
    },
    {
      title: '居中',
      name: '\ue63b',
      key: 'center',
    },
    {
      title: '两端对齐，两端不留间隔',
      name: '\ue663',
      key: 'space-between',
    },
    {
      title: '间隔平分，两端间隔为中间间隔的一半',
      name: '\ue64a',
      key: 'space-around',
    },
  ],
  alignItems: [
    {
      title: '起点对齐',
      name: '\ue609',
      key: 'flex-start',
    },
    {
      title: '终点对齐',
      name: '\ue606',
      key: 'flex-end',
    },
    {
      title: '中点对齐',
      name: '\ue7c0',
      key: 'center',
    },
    {
      title: '充满',
      name: '\ue607',
      key: 'stretch',
    },
    {
      title: '基线对齐',
      name: '\ue6c9',
      key: 'baseline',
    },
  ],
  backgroundPosition: [
    {
      title: '上-左边',
      key: 'top left',
    },
    {
      title: '上-中间',
      key: 'top center',
    },
    {
      title: '上-右边',
      key: 'top right',
    },
    {
      title: '中间-左边',
      key: 'center left',
    },
    {
      title: '中间',
      key: 'center center',
    },
    {
      title: '中间-右边',
      key: 'center right',
    },
    {
      title: '下-左边',
      key: 'bottom left',
    },
    {
      title: '下-中间',
      key: 'bottom center',
    },
    {
      title: '下-右边',
      key: 'bottom right',
    },
  ],
  backgroundSize: [
    {
      title: '自适应',
      name: '\ue60a',
      key: 'contain',
    },
    {
      title: '充满',
      name: '\ue64d',
      key: 'cover',
    },
  ],
  backgroundRepeat: [
    {
      title: '仅横向重复',
      key: 'repeat-x',
    },
    {
      title: '仅纵向重复',
      key: 'repeat-y',
    },
    {
      title: '双向重复',
      key: 'repeat',
    },
    {
      title: '尽可能的重复-不裁剪',
      key: 'space',
    },
    {
      title: '尽可能的重复-可能改变形状',
      key: 'round',
    },
    {
      title: '不重复',
      key: 'no-repeat',
    },
  ],
  position: [
    {
      title: '不定位',
      key: 'static',
    },
    {
      title: '相对定位',
      key: 'relative',
    },
    {
      title: '绝对定位->最近父级定位元素',
      key: 'absolute',
    },
    {
      title: '绝对定位->屏幕视口',
      key: 'fixed',
    },
    {
      title: '粘性定位',
      key: 'sticky',
    },
  ],
};

export default ATTRS;
