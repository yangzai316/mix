import React, { useEffect, useState } from 'react';
import './app.less';
import { Layout } from 'antd';
import ElementSpace from './components/element-space';
import WorkSpace from './components/work-space';
import ConfigSpace from './components/config-space';
import targetMap from './data/target-map';
import targetTree from './data/target-tree';
import { message } from 'antd';

const { Header, Sider, Content } = Layout;
targetMap.root = targetTree;
const App = () => {
  // 工作区 树形数据
  const [tree, setTree] = useState(targetTree);
  // 当前被拖拽元素
  const [target, setTarget] = useState(targetTree);

  // 当前被拖拽元素
  let currentTarget = null;
  const setTargetCb = (target) => {
    targetMap[target.id] = target;
    currentTarget = target;
  };
  // 被拖拽元素释放的元素容器
  const setContainer = (id) => {
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
  };

  // 属性被修改的回调
  const configChange = (id, type, key, value) => {
    const i = targetMap[id][type].findIndex((item) => item.key === key);
    if (i < 0) return;

    targetMap[id][type][i].value = value;

    setTarget(targetMap[id]);
    setTree(JSON.parse(JSON.stringify(targetTree)));
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Header> </Header>
      <Layout>
        <Sider>
          <ElementSpace setTarget={setTargetCb} />
        </Sider>
        <Content>
          <WorkSpace tree={tree} setContainer={setContainer}></WorkSpace>
        </Content>
        <Sider width="300" style={{ padding: '10px' }}>
          <ConfigSpace
            target={target}
            configChange={configChange}
          ></ConfigSpace>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default App;
