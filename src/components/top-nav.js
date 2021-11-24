import React from 'react';
import { Button } from 'antd';
import {
  DownloadOutlined,
  EyeOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const TopNav = () => {
  // 打开新tab页面，预览
  const preView = () => {
    const content = document.getElementById('box').innerHTML;
    const newWindow = window.open('', '', 'status,width=100%,height=100%');
    newWindow.focus();
    newWindow.document.write(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MIX-预览</title>
        </head>
        <body>
            ${content}
        </body>
        </html>`
    );
    newWindow.document.close();
  };
  return (
    <div className="top-nav">
      <Button size="large" icon={<DownloadOutlined />}>
        导入
      </Button>
      <Button size="large" icon={<EyeOutlined />} onClick={preView}>
        预览
      </Button>
      <Button size="large" icon={<UploadOutlined />}>
        导出
      </Button>
    </div>
  );
};

export default TopNav;
