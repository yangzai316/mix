import React from 'react';
import { Button } from 'antd';
import {
  DownloadOutlined,
  EyeOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Icon from '../common-components/icon';
import { preView, exportJSON, exportHTML } from '../utils';

const TopNav = ({ tree, openViewCode }) => {
  return (
    <div className="nav-top">
      <Button disabled icon={<DownloadOutlined />}>
        JSON导入
      </Button>
      &nbsp; &nbsp;
      <Button icon={<EyeOutlined />} onClick={preView}>
        效果预览
      </Button>
      <Button
        icon={<Icon fontSize="12">&#xe7ae;</Icon>}
        onClick={() => {
          openViewCode(true);
        }}
      >
        &nbsp;源码预览
      </Button>
      &nbsp; &nbsp;
      <Button
        icon={<UploadOutlined />}
        onClick={() => {
          exportJSON([JSON.stringify(tree, null, 2)]);
        }}
      >
        JSON导出
      </Button>
      <Button
        icon={<UploadOutlined />}
        onClick={() => {
          exportHTML();
        }}
      >
        HTML导出
      </Button>
    </div>
  );
};

export default TopNav;
