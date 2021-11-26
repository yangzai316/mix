import React, { useState } from 'react';
import { Radio, Input, Form, Button, Select } from 'antd';

import EVENTS from '../const/EVENT_LIST';

const EventConfig = ({ setEventConfig }) => {
  // 定义的 初始state
  const [data, setData] = useState({
    type: 2,
    linkContent: '',
    eventName: 'onclick',
    eventContent: '',
  });
  // 表单change
  const change = (value, key) => {
    setData((old) => {
      return {
        ...old,
        [key]: value,
      };
    });
  };
  //  确定 按钮 点击
  const sure = () => {
    let eventName = null;
    let eventContent = null;
    if (data.type === 2) {
      eventName = 'onclick';
      eventContent = data.linkContent;
    } else if (data.type === 3) {
      eventName = data.eventName;
      eventContent = data.eventContent;
    }
    setEventConfig(eventName, eventContent, data.type);
  };

  return (
    <>
      <Radio.Group
        name="radiogroup"
        value={data.type}
        onChange={(e) => {
          change(e.target.value, 'type');
        }}
      >
        <Radio value={1}>不设置</Radio>
        <Radio value={2}>链接跳转</Radio>
        <Radio value={3}>自定义</Radio>
      </Radio.Group>
      <br />
      <br />
      {data.type === 2 && (
        <Input.TextArea
          placeholder="请输入跳转的链接，如：https://www.xxx.com"
          rows={2}
          value={data.linkContent}
          onChange={(e) => {
            change(e.target.value, 'linkContent');
          }}
        />
      )}
      {data.type === 3 && (
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="事件类型">
            <Select
              value={data.eventName}
              onChange={(value) => {
                change(value, 'eventName');
              }}
            >
              {EVENTS.map((item) => {
                return (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item label="事件内容">
            <Input.TextArea
              placeholder="请输入事件内容"
              rows={8}
              value={data.eventContent}
              onChange={(e) => {
                change(e.target.value, 'eventContent');
              }}
            />
          </Form.Item>
        </Form>
      )}
      <br />
      <br />
      <p className="event-config-tip">注意：事件效果无法在工作区预览</p>
      <Button type="primary" block onClick={sure}>
        确定
      </Button>
    </>
  );
};

export default EventConfig;
