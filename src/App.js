import React, { useCallback, useState } from 'react';
// antd
import { Layout, message, Drawer, Button } from 'antd';
const { Header, Sider, Content } = Layout;
import './../public/css/app.less';
// 自定义组件
import { UploadOutlined } from '@ant-design/icons';
import ElementSpace from './components/element-space';
import WorkSpace from './components/work-space';
import ConfigSpace from './components/config-space';
import MenuLeft from './components/menu-left';
import TreeSpace from './components/tree-space';
import TopNav from './components/nav-top';
// 自定义 工具方法
import { dealSpecificProperty, deleteComponentById,  } from './utils';
// 核心数据
import targetMap from './data/target-map';
import targetTree from './data/target-tree';

const App = () => {
  // 工作区 树形数据
  const [tree, setTree] = useState(targetTree);
  // 当前被拖拽元素
  const [target, setTarget] = useState(targetTree);

  // 当前被拖拽元素
  let currentTarget = null;
  const setTargetCb = useCallback((target) => {
    targetMap[target.id] = target;
    currentTarget = target;
  }, []);
  // 被拖拽元素释放的元素容器
  const setContainer = useCallback((id) => {
    if (!id) return message.error('这不是一个合法的容器（Not found id）');
    if (id === 'root') {
      targetTree.children.push(currentTarget);
    } else {
      targetMap[id].children
        ? targetMap[id].children.push(currentTarget)
        : (targetMap[id].children = [currentTarget]);
    }
    setTarget(currentTarget);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  }, []);

  // 属性被修改的回调
  const editComponent = useCallback((id, type, key, value) => {
    if (!key) {
      // 设置 content script
      targetMap[id][type] = value;
    } else {
      targetMap[id][type][key].value = value;
      if (key === 'display') {
        // 即是样式属性，又有关联的属性
        targetMap[id][type] = {
          ...targetMap[id][type],
          ...dealSpecificProperty(value),
        };
      }
    }

    setTarget(targetMap[id]);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  }, []);

  // 特殊样式逻辑处理 （background / border），自身不是样式属性，只有关联属性
  const editComponentSpecificProperty = useCallback((id, type, value) => {
    targetMap[id][type] = dealSpecificProperty(value);

    setTarget(targetMap[id]);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  }, []);
  // 移除 or  清空元素
  const removeComponent = useCallback((id, type) => {
    if (type === 'clear') {
      // 清空根组件下的所有节点
      for (const key in targetMap) {
        key !== 'root' && delete targetMap[key];
      }
      targetTree.children = [];
      setTree(JSON.parse(JSON.stringify(targetTree)));
    } else {
      // 删除当前的元素
      delete targetMap[id];
      deleteComponentById(targetTree, id);
      setTree(JSON.parse(JSON.stringify(targetTree)));
    }
  });

  // 聚焦config 配置于当前元素，
  const focusCurrentComponent = useCallback((id) => {
    setTarget(targetMap[id]);
  }, []);



  // menu 改变
  const [menuKey, setMenuKey] = useState('1');
  const onMenuSelect = useCallback((val) => {
    // 切换menu
    setMenuKey(val.key);
  });
  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        {/* 头部nav组件 */}
        <TopNav />
      </Header>
      <Layout>
        {/* 左边Meun组件 */}
        <MenuLeft selectedKey={menuKey} onMenuSelect={onMenuSelect} />
        {/* 左边Sider组件 */}
        <Sider style={{ backgroundColor: '#000' }}>
          {menuKey === '1' && <ElementSpace setTarget={setTargetCb} />}
          {menuKey === '2' && <TreeSpace tree={tree} />}
        </Sider>
        <Content>
          {/* 中间 工作区 */}
          <WorkSpace
            tree={tree}
            setContainer={setContainer}
            focusCurrentComponent={focusCurrentComponent}
          ></WorkSpace>
        </Content>
        <Sider
          width="300"
          style={{ padding: '10px', backgroundColor: '#000', overflow: 'auto' }}
        >
          {/* 右边属性配置区 */}
          <ConfigSpace
            target={target}
            editComponent={editComponent}
            removeComponent={removeComponent}
            editComponentSpecificProperty={editComponentSpecificProperty}
          ></ConfigSpace>
        </Sider>
      </Layout>
      
      
    </Layout>
  );
};

export default App;
