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
  const { styles, background, attribute, content } = target;

  // 修改配置参数的回调
  const change = (e, key, type) => {
    console.log(type, key, e);
    editComponent(target.id, type, key, e.target.value);
  };
  //  移除元素
  const remove = () => {
    removeComponent(target.id);
  };
  // 背景色逻辑处理
  const backgroundChange = (e) => {
    editComponentSpecificProperty(target.id, 'background', e.target.value);
  };
  return (
    <>
      <div className="config-top-title">
        <h4>{`当前聚焦元素：${target.text}-${target.name}-${target.id}`}</h4>
        {target.id !== 'root' && <DeleteOutlined onClick={remove} />}
      </div>

      <Tabs type="card">
        {styles && (
          <Tabs.TabPane tab="样式设置" key="1">
            <Collapse defaultActiveKey={['1']}>
              {/* 基本样式设置 */}
              <Collapse.Panel header="基本样式设置" key="1">
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  autoComplete="off"
                >
                  <ConfigFormItem
                    data={styles}
                    formItemType="styles"
                    change={change}
                  />
                </Form>
              </Collapse.Panel>

              {/* 背景设置 */}
              {background && (
                <Collapse.Panel header="背景样式设置" key="2">
                  <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                  >
                    <Form.Item label="背景类型">
                      <Radio.Group defaultValue="" onChange={backgroundChange}>
                        <Tooltip placement="top" title="不设置">
                          <Radio.Button value="">
                            <i className="iconfont"> &#xe6ab;</i>
                          </Radio.Button>
                        </Tooltip>
                        <Tooltip placement="top" title="颜色">
                          <Radio.Button value="color">
                            <i className="iconfont"> &#xe678;</i>
                          </Radio.Button>
                        </Tooltip>
                        <Tooltip placement="top" title="图片">
                          <Radio.Button value="image">
                            <i className="iconfont"> &#xe8ba;</i>
                          </Radio.Button>
                        </Tooltip>
                      </Radio.Group>
                    </Form.Item>
                    <ConfigFormItem
                      data={background}
                      formItemType="background"
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
