import React, { useMemo } from 'react';
import { Form, Input, InputNumber, Radio, Tooltip, Tabs, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import ATTRS from '../const/ATTRS_MAP';
import BoxModel from './../components/box-model';

const ConfigSpace = ({ target = {}, editComponent, removeComponent }) => {
  // 结构数据
  const { styles, attribute, content } = target;

  // 修改配置参数的回调
  const change = (e, key, type) => {
    editComponent(target.id, type, key, e.target.value);
  };
  const remove = () => {
    removeComponent(target.id);
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
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
            >
              {Object.keys(styles).map((key) => {
                if (styles[key].type === 'radio') {
                  return (
                    <Form.Item key={key} label={styles[key].title}>
                      {
                        <Radio.Group
                          value={styles[key].value}
                          onChange={(e) => {
                            change(e, key, 'styles');
                          }}
                        >
                          {ATTRS[key].map((o) => {
                            return (
                              <Tooltip
                                key={o.key}
                                placement="top"
                                title={o.title}
                              >
                                <Radio.Button value={o.key}>
                                  <i className="iconfont">{`${
                                    o.name || o.title
                                  }`}</i>
                                </Radio.Button>
                              </Tooltip>
                            );
                          })}
                        </Radio.Group>
                      }
                    </Form.Item>
                  );
                } else if (styles[key].type === 'Input') {
                  return (
                    <Form.Item key={key} label={styles[key].title}>
                      <Input
                        value={styles[key].value}
                        onChange={(e) => {
                          change(e, key, 'styles');
                        }}
                      />
                    </Form.Item>
                  );
                } else if (styles[key].type === 'InputNumber') {
                  return (
                    <Form.Item key={key} label={styles[key].title}>
                      <InputNumber
                        value={styles[key].value}
                        onChange={(e) => {
                          change(e, key, 'styles');
                        }}
                      />
                    </Form.Item>
                  );
                }
              })}
            </Form>
          </Tabs.TabPane>
        )}
        {attribute && (
          <Tabs.TabPane tab="属性设置" key="2">
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
            >
              {Object.keys(attribute).map((key) => {
                return (
                  <Form.Item key={key} label={`${attribute[key].title}`}>
                    <Input
                      value={`${attribute[key].value}`}
                      onChange={(e) => {
                        change(e, key, 'attribute');
                      }}
                    />
                  </Form.Item>
                );
              })}
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
