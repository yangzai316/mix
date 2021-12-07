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
import JsonCode from './json-code';

const TopNav = ({ updateView }) => {
  // code type
  const [codeType, setCodeType] = useState('html');
  // html 代码预览
  const [htmlCodeViewVisible, setHtmlCodeViewVisible] = useState(false);

  // json 代码预览
  const [importJsonVisible, setImportJsonVisible] = useState(false);

  // json 输入框的 ref
  const ref = React.createRef();

  return (
    <div className="nav-top">
      <Button icon={<EyeOutlined />} onClick={preView}>
        新页面预览效果
      </Button>
      &nbsp; &nbsp;
      <Button
        icon={<UploadOutlined />}
        onClick={() => {
          setImportJsonVisible(true);
        }}
      >
        JSON导入
      </Button>
      &nbsp; &nbsp;
      <Button
        icon={<EyeOutlined />}
        onClick={() => {
          setCodeType('json');
          setHtmlCodeViewVisible(true);
        }}
      >
        JSON预览
      </Button>
      <Button
        icon={<EyeOutlined />}
        onClick={() => {
          setCodeType('html');
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
      {/* HTML / JSON 源码预览抽屉 */}
      <Drawer
        title={`${codeType === 'json' ? 'JSON' : 'HTML'}预览`}
        placement="left"
        width="800px"
        visible={htmlCodeViewVisible}
        onClose={() => {
          setHtmlCodeViewVisible(false);
        }}
        extra={
          codeType === 'json' ? (
            <Button icon={<DownloadOutlined />} onClick={exportJSON}>
              JSON下载
            </Button>
          ) : (
            <Button icon={<DownloadOutlined />} onClick={exportHTML}>
              HTML下载
            </Button>
          )
        }
      >
        {codeType === 'json' ? <JsonCode></JsonCode> : <HtmlCode></HtmlCode>}
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
            <label htmlFor="xxx">
              <span className="file-btn">导入本地json文件</span>
              <input
                id="xxx"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  ref?.current?.fileChange?.(e);
                }}
              />
            </label>
            &nbsp; &nbsp;
            <Button
              type="primary"
              onClick={() => {
                ref?.current?.setJsonToOrigin?.();
              }}
            >
              确定
            </Button>
          </>
        }
      >
        <ImportJson
          ref={ref}
          {...{ updateView, setImportJsonVisible }}
        ></ImportJson>
      </Drawer>
    </div>
  );
};

export default TopNav;
