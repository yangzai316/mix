const _ = {
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
      overflow: {
        title: '内容溢出',
        type: 'Radio',
        value: 'visible',
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
    script: '',
  }

export const origin = {
    tree:_,
    map:{
      root:_
    }
}