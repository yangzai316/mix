import React, { useState, forwardRef,useImperativeHandle } from 'react';
import { Input } from 'antd';

const ImportJson = forwardRef(({updateView,setImportJsonVisible}, ref) => {
  const [content, setContent] = useState('');
  // 将内容传给回调
  const setJsonToOrigin = () => {
    updateView(JSON.parse(content));
    setImportJsonVisible(false)
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
