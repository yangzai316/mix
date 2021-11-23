import React, { useMemo } from 'react';
import { Form, Input, Alert, Radio, Tooltip, Tabs } from 'antd';
import ATTRS from '../const/ATTRS_MAP';

const ConfigSpace = ({ target = {}, configChange }) => {
  // 结构数据
  const { styles, attribute, content } = target;

  // 修改配置参数的回调
  const change = (e, key, type) => {
    configChange(target.id, type, key, e.target.value);
  };

  return (
    <>
      <h4>{`当前聚焦元素：${target.text}-${target.name}-${target.id}`}</h4>
      <Tabs type="card">
        {styles && (
          <Tabs.TabPane tab="样式设置" key="1">
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
            >
              {Object.keys(styles).map((key) => {
                if (styles[key].type === 'input') {
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
                } else if (styles[key].type === 'radio') {
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
              {Object.keys(attribute).map((key, i) => {
                return (
                  <Form.Item key={i} label={`${key}`}>
                    <Input
                      value={`${attribute[key]}`}
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
