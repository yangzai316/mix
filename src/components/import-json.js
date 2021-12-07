import React, { useState, forwardRef,useImperativeHandle } from 'react';
import { Input } from 'antd';

const ImportJson = forwardRef(({updateView,setImportJsonVisible}, ref) => {
  const [content, setContent] = useState('');
  // 将内容传给回调
  const setJsonToOrigin = () => {
    updateView(JSON.parse(content));
    setImportJsonVisible(false)
  }; 
  const fileChange = (e) => {
    const file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file, "utf8"); //gbk编码
      reader.onload = function () {
        setContent(this.result); // 文本内容
      };
  }; 
	// 方法上升给父组件
	useImperativeHandle(ref, () => ({
    setJsonToOrigin,
    fileChange
  }));

  return (
    <Input.TextArea 
      rows={30}
      value={content}
			placeholder="可手动输入JSON内容或点击右上角【JSON导入】获取本地json文件内容，完成输入后点击【确定】即可"
      onChange={(e) => {
        setContent(e.target.value);
      }}
    />
  );
});

export default ImportJson;
