import React from 'react';
import { Menu } from 'antd';
import { ClusterOutlined, LayoutOutlined } from '@ant-design/icons';
import Icon from '../common-components/icon';

class MenuLeft extends React.Component {
  render() {
    return (
      <Menu
        selectedKeys={[this.props.selectedKey]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
        style={{ width: '40px' }}
        onSelect={this.props.onMenuSelect}
      >
        <Menu.Item key="1" icon={<LayoutOutlined />}>
          布局操作
        </Menu.Item>
        <Menu.Item key="2" icon={<ClusterOutlined />}>
          DOM结构
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<Icon fontSize="16">&#xe7ae;&nbsp;&nbsp;</Icon>}
        >
          HTML源码
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLeft;
