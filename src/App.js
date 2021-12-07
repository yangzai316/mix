import React, { useCallback, useState } from 'react';
// antd
import { Layout, message } from 'antd';
const { Header, Sider, Content } = Layout;
import './../public/css/app.less';
// 自定义组件
import ElementSpace from './components/element-space';
import WorkSpace from './components/work-space';
import ConfigSpace from './components/config-space';
import MenuLeft from './components/menu-left';
import TreeSpace from './components/tree-space';
import TopNav from './components/nav-top';
// 自定义 工具方法
import { dealSpecificProperty, deleteComponentById,setMapFromNewTree } from './utils';
// 核心数据
import { origin } from './data';

const App = () => {
  // 工作区 树形数据
  const [tree, setTree] = useState(origin.tree);
  // 当前被拖拽元素
  const [target, setTarget] = useState(origin.tree);

  // 当前被拖拽元素
  let currentTarget = null;
  const setTargetCb = useCallback((target) => {
    origin.map[target.id] = target;
    currentTarget = target;
  }, []);
  // 被拖拽元素释放的元素容器
  const setContainer = useCallback((id) => {
    if (!id) return message.error('这不是一个合法的容器（Not found id）');
    if (id === 'root') {
      origin.tree.children.push(currentTarget);
    } else {
      origin.map[id].children
        ? origin.map[id].children.push(currentTarget)
        : (origin.map[id].children = [currentTarget]);
    }
    setTarget(currentTarget);
    setTree(JSON.parse(JSON.stringify(origin.tree)));
  }, []);

  // 属性被修改的回调
  const editComponent = useCallback((id, type, key, value) => {
    if (!key) {
      // 设置 content script
      origin.map[id][type] = value;
    } else {
      origin.map[id][type][key].value = value;
      if (key === 'display') {
        // 即是样式属性，又有关联的属性
        origin.map[id][type] = {
          ...origin.map[id][type],
          ...dealSpecificProperty(value),
        };
      }
    }

    setTarget(origin.map[id]);
    setTree(JSON.parse(JSON.stringify(origin.tree)));
  }, []);

  // 特殊样式逻辑处理 （background / border），自身不是样式属性，只有关联属性
  const editComponentSpecificProperty = useCallback((id, type, value) => {
    origin.map[id][type] = dealSpecificProperty(value);

    setTarget(origin.map[id]);
    setTree(JSON.parse(JSON.stringify(origin.tree)));
  }, []);
  // 移除 or  清空元素
  const removeComponent = useCallback((id, type) => {
    if (type === 'clear') {
      // 清空根组件下的所有节点
      for (const key in origin.map) {
        key !== 'root' && delete origin.map[key];
      }
      origin.tree.children = [];
      setTree(JSON.parse(JSON.stringify(origin.tree)));
    } else {
      // 删除当前的元素
      delete origin.map[id];
      deleteComponentById(origin.tree, id);
      setTree(JSON.parse(JSON.stringify(origin.tree)));
    }
  });

  // 聚焦config 配置于当前元素，
  const focusCurrentComponent = useCallback((id) => {
    setTarget(origin.map[id]);
  }, []);

  // 全局更新视图 导入时效果
  const updateView = (tree) => {
    origin.tree = tree;
    origin.map = setMapFromNewTree(tree);
    setTarget(JSON.parse(JSON.stringify(tree)));
    setTree(JSON.parse(JSON.stringify(tree)));
  };

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
        <TopNav updateView={updateView} />
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
