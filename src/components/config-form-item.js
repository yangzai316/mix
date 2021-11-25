import React from 'react';
import { Form, Input, Radio, Tooltip, Select } from 'antd';

import ATTRS from '../const/ATTRS_MAP';

const ConfigFormItem = ({ data = {}, formItemType, change }) => {
  console.log(formItemType, data);
  return (
    <>
      {Object.keys(data).map((key) => {
        return (
          <Form.Item key={key} label={data[key].title}>
            {data[key].type === 'Radio' && (
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
            )}
            {data[key].type === 'Input' && (
              <Input
                value={data[key].value}
                onChange={(e) => {
                  change(e, key, formItemType);
                }}
              />
            )}

            {data[key].type === 'InputColor' && (
              <input
                type="color"
                value={data[key].value}
                onChange={(e) => {
                  change(e, key, formItemType);
                }}
              />
            )}
            {data[key].type === 'Select' && (
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
            )}
          </Form.Item>
        );
      })}
    </>
  );
};

export default ConfigFormItem;
