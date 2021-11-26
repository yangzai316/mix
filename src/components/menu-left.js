import React from 'react';
import { Menu } from 'antd';
import { ClusterOutlined, LayoutOutlined } from '@ant-design/icons';

class MenuLeft extends React.Component {
  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
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
          DOM结构展示
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLeft;
