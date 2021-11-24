import React, { useMemo } from 'react';
import { Form, Input, Divider, Radio, Tooltip, Tabs, Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ConfigFormItem from './config-form-item';

import ATTRS from '../const/ATTRS_MAP';

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
    attribute,
    content,
  } = target;
  // 修改配置参数的回调
  const change = (e, key, type) => {
    editComponent(target.id, type, key, e.target.value);
  };
  //  移除元素
  const remove = () => {
    removeComponent(target.id);
  };
  // 背景色逻辑处理
  const specificPropertyChange = (e, type) => {
    editComponentSpecificProperty(target.id, type, e.target.value);
  };
  return (
    <>
      <div className="config-top-title">
        <h4>{`当前聚焦元素：${target.text}-${target.name}-${target.id}`}</h4>
        {target.id !== 'root' && <DeleteOutlined onClick={remove} />}
      </div>

      <Tabs type="card">
        {baseStyle && (
          <Tabs.TabPane tab="样式设置" key="0">
            <Collapse accordion>
              {/* 布局样式设置 */}
              <Collapse.Panel header="布局" key="1">
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  autoComplete="off"
                >
                  <ConfigFormItem
                    data={layoutStyle}
                    formItemType="layoutStyle"
                    change={change}
                  />
                </Form>
              </Collapse.Panel>
              {/* 基本样式设置 */}
              <Collapse.Panel header="基础样式" key="2">
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  autoComplete="off"
                >
                  <ConfigFormItem
                    data={baseStyle}
                    formItemType="baseStyle"
                    change={change}
                  />
                </Form>
              </Collapse.Panel>
              {/* 背景设置 */}
              <Collapse.Panel header="背景" key="3">
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  autoComplete="off"
                >
                  <Form.Item label="边框方式">
                    <Radio.Group
                      defaultValue=""
                      onChange={(e) => {
                        specificPropertyChange(e, 'backgroundStyle');
                      }}
                    >
                      <Tooltip placement="top" title="不设置">
                        <Radio.Button value="">
                          <i className="iconfont"> &#xe6ab;</i>
                        </Radio.Button>
                      </Tooltip>
                      <Tooltip placement="top" title="颜色">
                        <Radio.Button value="backgroundColor">
                          <i className="iconfont"> &#xe678;</i>
                        </Radio.Button>
                      </Tooltip>
                      <Tooltip placement="top" title="图片">
                        <Radio.Button value="backgroundImage">
                          <i className="iconfont"> &#xe8ba;</i>
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
              {/* 边框设置 */}
              <Collapse.Panel header="边框" key="4">
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  autoComplete="off"
                >
                  <Form.Item label="背景类型">
                    <Radio.Group
                      defaultValue=""
                      onChange={(e) => {
                        specificPropertyChange(e, 'borderStyle');
                      }}
                    >
                      <Tooltip placement="top" title="不设置">
                        <Radio.Button value="">
                          <i className="iconfont"> &#xe6ab;</i>
                        </Radio.Button>
                      </Tooltip>
                      <Tooltip placement="top" title="每边单独设置">
                        <Radio.Button value="borderSingle">
                          <i className="iconfont"> &#xe698;</i>
                        </Radio.Button>
                      </Tooltip>
                      <Tooltip placement="top" title="四边同时设置">
                        <Radio.Button value="borderRound">
                          <i className="iconfont"> &#xe60b;</i>
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
            </Collapse>
          </Tabs.TabPane>
        )}
        {attribute && (
          <Tabs.TabPane tab="属性设置" key="2">
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
            >
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
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
            >
              <Input
                value={`${content}`}
                onChange={(e) => {
                  change(e, '', 'content');
                }}
              />
            </Form>
          </Tabs.TabPane>
        )}
      </Tabs>
    </>
  );
};

export default ConfigSpace;
