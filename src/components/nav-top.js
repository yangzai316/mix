import React from 'react';
import { Button } from 'antd';
import {
  DownloadOutlined,
  EyeOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Icon from '../common-components/icon';
import { preView, exportJSON, exportHTML } from '../utils';

const TopNav = () => {
  return (
    <div className="nav-top">
      <Button disabled icon={<DownloadOutlined />}>
        JSON导入
      </Button>
      &nbsp; &nbsp;
      <Button icon={<EyeOutlined />} onClick={preView}>
        新页面预览效果
      </Button>
      &nbsp; &nbsp;
      <Button icon={<UploadOutlined />} onClick={exportJSON}>
        JSON导出
      </Button>
      <Button icon={<UploadOutlined />} onClick={exportHTML}>
        HTML导出
      </Button>
    </div>
  );
};

export default TopNav;
