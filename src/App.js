import React, { useState } from 'react';
import './app.less'
import { Layout } from 'antd';
import ElementSpace from './components/element-space';
import WorkSpace from './components/work-space';
import targetMap from './data/target-map';
import targetTree from './data/target-tree';
import { message } from 'antd';


const { Header, Sider, Content } = Layout;

const App = () => {
    // 工作区 树形数据
    const [tree, setTree] = useState(targetTree);

    // 当前被拖拽元素
    let currentTarget = null;
    const setTarget = (target) => {
        // targetMap[target.id] = target;
        currentTarget = target;
    };
    // 被拖拽元素释放的元素容器
    const setContainer = (id) => {
        if (!id) return message.error('这不是一个有效的视图容器');
        if (id === 'root') {
            targetTree.children.push(currentTarget);
        };
        setTree(JSON.parse(JSON.stringify(targetTree)))
    };

    return (
        <Layout style={{ height: '100%' }}>
            <Header> </Header>
            <Layout>
                <Sider><ElementSpace setTarget={setTarget} /></Sider>
                <Content><WorkSpace tree={tree} setContainer={setContainer} ></WorkSpace></Content>
                <Sider>Sider2</Sider>
            </Layout>
        </Layout>

    )
};


export default App;