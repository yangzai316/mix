import React from 'react';
import { Button, Menu } from 'antd';
import {
  DownloadOutlined,
  EyeOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Icon from './../common-components/icon';
import { preView } from './../utils';

const TopNav = () => {
  const onClick = ({ key }) => {
    if (key === '1') {
      preView();
    } else {
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">效果预览</Menu.Item>
      <Menu.Item key="2">代码预览</Menu.Item>
    </Menu>
  );
  return (
    <div className="top-nav">
      <Button icon={<DownloadOutlined />}>导入</Button>
      <Button icon={<EyeOutlined />}>效果预览</Button>
      <Button icon={<Icon fontSize="12">&#xe7ae;</Icon>}>代码预览</Button>
      <Button icon={<UploadOutlined />}>导出</Button>
    </div>
  );
};

export default TopNav;
