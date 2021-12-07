import React, { useState, forwardRef,useImperativeHandle } from 'react';
import { Input } from 'antd';

const ImportJson = forwardRef((props, ref) => {
  const [content, setContent] = useState('');

  const setJsonToOrigin = () => {
    console.log(JSON.parse(content));
  }; 
	// 方法上升给父组件
	useImperativeHandle(ref, () => ({
    setJsonToOrigin
  }));

  return (
    <Input.TextArea 
      rows={30}
      style={{ backgroundColor: '#fff', color: '#666' }}
      value={content}
			placeholder="可手动输入JSON内容或点击右上角【JSON导入】获取本地json文件内容"
      onChange={(e) => {
        setContent(e.target.value);
      }}
    />
  );
});

export default ImportJson;
