import React, { useMemo } from 'react';
import { Form, Input, Divider, Radio, Tooltip, Tabs } from 'antd';
import styleAttrs from '../data/STYLE_ATTRS';

const ConfigSpace = ({ target = {}, configChange }) => {
  // 结构数据
  const { styles = [], attribute = null, content } = target;

  // 修改配置参数的回调
  const change = (e, key, type) => {
    configChange(target.id, type, key, e.target.value);
  };

  // 判断当前属性中 display=？flex
  const isFlex = styles.some(
    (item) => item.key === 'display' && item.value === 'flex'
  );

  return (
    <>
      <Tabs type="card">
        {styles?.length > 0 && (
          <Tabs.TabPane tab="样式设置" key="1">
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
            >
              {styles.map((item) => {
                if (item.type === 'input') {
                  return (
                    <Form.Item key={item.key} label={item.title}>
                      <Input
                        value={item.value}
                        onChange={(e) => {
                          change(e, item.key, 'styles');
                        }}
                      />
                    </Form.Item>
                  );
                } else if (item.type === 'radio') {
                  return (
                    (item.depend !== 'display=flex' ||
                      (item.depend === 'display=flex' && isFlex)) && (
                      <Form.Item key={item.key} label={item.title}>
                        {
                          <Radio.Group
                            value={item.value}
                            onChange={(e) => {
                              change(e, item.key, 'styles');
                            }}
                          >
                            {styleAttrs[item.key].map((o) => {
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
                    )
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
