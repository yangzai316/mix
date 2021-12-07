import React from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const TreeSpace = ({ tree }) => {
  return (
    <Tree
      defaultExpandAll
      showLine
      switcherIcon={<DownOutlined />}
      treeData={[tree]}
      fieldNames={{ title: 'name', key: 'id' }}
    />
  );
};

export default TreeSpace;
