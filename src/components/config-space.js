import React from 'react';
import { Form, Input, Divider, Radio, Tooltip } from 'antd';
import styleAttrs from '../data/STYLE_ATTRS';

const ConfigSpace = ({ target = {}, configChange }) => {
  const { styles = [], attribute = null, content } = target;

  const change = (e, key, type) => {
    configChange(target.id, type, key, e.target.value);
  };
  return (
    <>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete="off">
        {styles?.length > 0 && (
          <>
            <Divider orientation="left">样式设置</Divider>
            {styles.map((item, index) => {
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
                  <Form.Item key={item.key} label={item.title}>
                    <Radio.Group
                      value={item.value}
                      onChange={(e) => {
                        change(e, item.key, 'styles');
                      }}
                    >
                      {styleAttrs[item.key].map((o) => {
                        return (
                          <Tooltip key={o.key} placement="top" title={o.title}>
                            <Radio.Button value={o.key}>
                              <i className="iconfont">{`${
                                o.name || o.title
                              }`}</i>
                            </Radio.Button>
                          </Tooltip>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>
                );
              }
            })}
          </>
        )}
        {attribute && (
          <>
            <Divider orientation="left">属性设置</Divider>
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
          </>
        )}
        {(content || content === '') && (
          <>
            <Divider orientation="left">内容设置</Divider>
            <Input
              value={`${content}`}
              onChange={(e) => {
                change(e, '', 'content');
              }}
            />
          </>
        )}
      </Form>
    </>
  );
};

export default ConfigSpace;
