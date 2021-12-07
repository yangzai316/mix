import React from 'react';
import { Form, Input, Radio, Tooltip, Tabs, Collapse, Modal } from 'antd';
import {
  DeleteOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import ConfigFormItem from './config-form-item';
import EventConfig from './event-config';
import Icon from './../common-components/icon';
import { createScriptStr } from './../utils';

const ConfigSpace = ({
  target = {},
  editComponent,
  removeComponent,
  editComponentSpecificProperty,
}) => {
  // 结构数据
  const {
    baseStyle,
    backgroundStyle,
    layoutStyle,
    borderStyle,
    positionStyle,
    attribute,
    content,
  } = target;
  // 修改配置参数的回调
  const change = (e, key, type) => {
    editComponent(target.id, type, key, e.target.value);
  };
  //  移除元素
  const remove = (type) => {
    Modal.confirm({
      title: '提示',
      icon: <ExclamationCircleOutlined />,
      content:
        type === 'remove'
          ? '确定要删除这个元素节点？'
          : '确定要清空所有元素节点？',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        removeComponent(target.id, type);
      },
    });
  };
  // 背景色逻辑处理
  const specificPropertyChange = (e, type) => {
    editComponentSpecificProperty(target.id, type, e.target.value);
  };
  // 事件内容设置
  const setEventConfig = (eventName, eventContent, type) => {
    const scriptContent = createScriptStr(
      target.id,
      eventName,
      eventContent,
      type
    );
    editComponent('root', 'script', '', scriptContent);
  };
  return (
    <>
      <div className="config-top-title">
        <h4>{`当前元素：${target.text}/${target.name}/${target.id}`}</h4>
        {target.id === 'root' ? (
          <DeleteOutlined
            onClick={() => {
              remove('clear');
            }}
          />
        ) : (
          <CloseCircleOutlined
            onClick={() => {
              remove('remove');
            }}
          />
        )}
      </div>

      <Tabs type="card">
        {baseStyle && (
          <Tabs.TabPane tab="样式设置" key="0">
            <Collapse accordion defaultActiveKey={['2']}>
              {/* 布局样式设置 */}
              {layoutStyle && (
                <Collapse.Panel header="布局" key="1">
                  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <ConfigFormItem
                      data={layoutStyle}
                      formItemType="layoutStyle"
                      change={change}
                    />
                  </Form>
                </Collapse.Panel>
              )}
              {/* 基本样式设置 */}
              {baseStyle && (
                <Collapse.Panel header="基础样式" key="2">
                  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <ConfigFormItem
                      data={baseStyle}
                      formItemType="baseStyle"
                      change={change}
                    />
                  </Form>
                </Collapse.Panel>
              )}
              {/* 背景设置 */}
              {backgroundStyle && (
                <Collapse.Panel header="背景" key="3">
                  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="背景方式">
                      <Radio.Group
                        defaultValue=""
                        onChange={(e) => {
                          specificPropertyChange(e, 'backgroundStyle');
                        }}
                      >
                        <Tooltip placement="top" title="不设置">
                          <Radio.Button value="">
                            <Icon>&#xe6ab;</Icon>
                          </Radio.Button>
                        </Tooltip>
                        <Tooltip placement="top" title="颜色">
                          <Radio.Button value="backgroundColor">
                            <Icon>&#xe678;</Icon>
                          </Radio.Button>
                        </Tooltip>
                        <Tooltip placement="top" title="图片">
                          <Radio.Button value="backgroundImage">
                            <Icon>&#xe8ba;</Icon>
                          </Radio.Button>
                        </Tooltip>
                      </Radio.Group>
                    </Form.Item>
                    <ConfigFormItem
                      data={backgroundStyle}
                      formItemType="backgroundStyle"
                      change={change}
                    />
                  </Form>
                </Collapse.Panel>
              )}
              {/* 边框设置 */}
              {borderStyle && (
                <Collapse.Panel header="边框" key="4">
                  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="边框类型">
                      <Radio.Group
                        defaultValue=""
                        onChange={(e) => {
                          specificPropertyChange(e, 'borderStyle');
                        }}
                      >
                        <Tooltip placement="top" title="不设置">
                          <Radio.Button value="">
                            <Icon>&#xe6ab;</Icon>
                          </Radio.Button>
                        </Tooltip>
                        <Tooltip placement="top" title="每边单独设置">
                          <Radio.Button value="borderSingle">
                            <Icon>&#xe698;</Icon>
                          </Radio.Button>
                        </Tooltip>
                        <Tooltip placement="top" title="四边同时设置">
                          <Radio.Button value="borderRound">
                            <Icon>&#xe60b;</Icon>
                          </Radio.Button>
                        </Tooltip>
                      </Radio.Group>
                    </Form.Item>
                    <ConfigFormItem
                      data={borderStyle}
                      formItemType="borderStyle"
                      change={change}
                    />
                  </Form>
                </Collapse.Panel>
              )}
              {/* 定位样式设置 */}
              {positionStyle && (
                <Collapse.Panel header="定位" key="5">
                  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <ConfigFormItem
                      data={positionStyle}
                      formItemType="positionStyle"
                      change={change}
                    />
                  </Form>
                </Collapse.Panel>
              )}
            </Collapse>
          </Tabs.TabPane>
        )}
        {attribute && (
          <Tabs.TabPane tab="属性设置" key="2">
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <ConfigFormItem
                data={attribute}
                formItemType="attribute"
                change={change}
              />
            </Form>
          </Tabs.TabPane>
        )}
        {(content || content === '') && (
          <Tabs.TabPane tab="内容设置" key="3">
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input.TextArea
                rows={4}
                value={content}
                onChange={(e) => {
                  change(e, '', 'content');
                }}
              />
            </Form>
          </Tabs.TabPane>
        )}
        <Tabs.TabPane tab="事件设置" key="4">
          <EventConfig setEventConfig={setEventConfig}></EventConfig>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default ConfigSpace;
