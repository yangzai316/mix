import React, { useCallback, useState } from 'react';

import { Layout, message } from 'antd';
const { Header, Sider, Content } = Layout;
import './app.less';

import ElementSpace from './components/element-space';
import WorkSpace from './components/work-space';
import ConfigSpace from './components/config-space';
import MenuLeft from './components/menu-left';
import TreeSpace from './components/tree-space';
import TopNav from './components/top-nav';

import {
  dealFlexRelateAttr,
  dealSpecificProperty,
  deleteComponentById,
} from './utils';

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
    if (!id) return message.error('这不是一个有效的视图容器');
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
    if (type === 'content') {
      targetMap[id][type] = value;
    } else {
      const attr = targetMap[id][type][key];
      attr.value = value;
      if (key === 'display') {
        targetMap[id][type] = dealFlexRelateAttr(
          targetMap[id][type],
          key,
          value
        );
      }
    }

    setTarget(targetMap[id]);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  }, []);

  // 特殊样式逻辑处理 （background / border）
  const editComponentSpecificProperty = useCallback((id, type, value) => {
    targetMap[id][type] = dealSpecificProperty(value);

    setTarget(targetMap[id]);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  }, []);

  // 移除元素
  const removeComponent = useCallback((id) => {
    delete targetMap[id];
    deleteComponentById(targetTree, id);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  });
  // 聚焦config 配置于当前元素，
  const focusCurrentComponent = useCallback((id) => {
    setTarget(targetMap[id]);
  }, []);

  // menu 改变
  const [menuKey, setMenuKey] = useState('1');
  const onMenuSelect = useCallback((val) => {
    setMenuKey(val.key);
  });
  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <TopNav />
      </Header>
      <Layout>
        <MenuLeft onMenuSelect={onMenuSelect} />
        <Sider style={{ backgroundColor: '#000' }}>
          {menuKey === '1' ? (
            <ElementSpace setTarget={setTargetCb} />
          ) : (
            <TreeSpace tree={tree} />
          )}
        </Sider>
        <Content>
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
