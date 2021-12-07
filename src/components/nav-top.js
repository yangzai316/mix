import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {
  DownloadOutlined,
  EyeOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { preView, exportJSON, exportHTML } from '../utils';
import HtmlCode from './html-code';
import ImportJson from './import-json';

const TopNav = () => {
  // html 代码预览
  const [htmlCodeViewVisible, setHtmlCodeViewVisible] = useState(false);

  // json 代码预览
  const [importJsonVisible, setImportJsonVisible] = useState(false);

  // json 输入框的 ref
  const ref = React.createRef();

  return (
    <div className="nav-top">
      <Button
        icon={<UploadOutlined />}
        onClick={() => {
          setImportJsonVisible(true);
        }}
      >
        JSON导入
      </Button>
      &nbsp; &nbsp;
      <Button icon={<EyeOutlined />} onClick={preView}>
        新页面预览效果
      </Button>
      <Button
        icon={<EyeOutlined />}
        onClick={() => {
          setHtmlCodeViewVisible(true);
        }}
      >
        HTML预览
      </Button>
      &nbsp; &nbsp;
      <Button icon={<DownloadOutlined />} onClick={exportJSON}>
        JSON下载
      </Button>
      <Button icon={<DownloadOutlined />} onClick={exportHTML}>
        HTML下载
      </Button>
      
      {/* HTML源码预览抽屉 */}
      <Drawer
        title="HTML源码"
        placement="left"
        width="800px"
        visible={htmlCodeViewVisible}
        onClose={() => {
          setHtmlCodeViewVisible(false);
        }}
        extra={
          <Button icon={<UploadOutlined />} onClick={exportHTML}>
            HTML下载
          </Button>
        }
      >
        <HtmlCode></HtmlCode>
      </Drawer>
      {/* JSON源码预览抽屉 */}
      <Drawer
        title="JSON导入"
        placement="right"
        width="800px"
        visible={importJsonVisible}
        onClose={() => {
          setImportJsonVisible(false);
        }}
        extra={
          <>
            <Button icon={<DownloadOutlined />} onClick={exportJSON}>
              JSON导入
            </Button>&nbsp; &nbsp;
            <Button type="primary" onClick={()=>{
              ref?.current?.setJsonToOrigin?.()
            }}>
              确定
            </Button>
          </>
        }
      >
        <ImportJson ref={ref}></ImportJson>
      </Drawer>
    </div>
  );
};

export default TopNav;
