import React from 'react';
import { Form, Input, Radio, Tooltip, Select } from 'antd';

import ATTRS from '../const/ATTRS_MAP';

const ConfigFormItem = ({ data, formItemType, change }) => {
  return (
    <>
      {Object.keys(data).map((key) => {
        if (data[key].type === 'Radio') {
          return (
            <Form.Item key={key} label={data[key].title}>
              {
                <Radio.Group
                  value={data[key].value}
                  onChange={(e) => {
                    change(e, key, formItemType);
                  }}
                >
                  {ATTRS[key].map((o) => {
                    return (
                      <Tooltip key={o.key} placement="top" title={o.title}>
                        <Radio.Button value={o.key}>
                          <i className="iconfont">{`${o.name || o.title}`}</i>
                        </Radio.Button>
                      </Tooltip>
                    );
                  })}
                </Radio.Group>
              }
            </Form.Item>
          );
        } else if (data[key].type === 'Input') {
          return (
            <Form.Item key={key} label={data[key].title}>
              <Input
                value={data[key].value}
                onChange={(e) => {
                  change(e, key, formItemType);
                }}
              />
            </Form.Item>
          );
        } else if (data[key].type === 'InputColor') {
          return (
            <Form.Item key={key} label={data[key].title}>
              <input
                type="color"
                value={data[key].value}
                onChange={(e) => {
                  change(e, key, formItemType);
                }}
              />
            </Form.Item>
          );
        } else if (data[key].type === 'Select') {
          return (
            <Form.Item key={key} label={data[key].title}>
              <Select
                value={data[key].value}
                onChange={(val) => {
                  // select 的 onChange略有不同，此处伪造 e.target.value结构
                  const e = {};
                  e.target = { value: val };
                  change(e, key, formItemType);
                }}
              >
                {ATTRS[key].map((o) => {
                  return (
                    <Select.Option key={o.key} value={o.key}>
                      {o.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          );
        }
      })}
    </>
  );
};

export default ConfigFormItem;
