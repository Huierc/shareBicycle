import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox, Radio, InputNumber, Select } from 'antd';
import './index.less';

const ForItem = Form.Item;
const Option = Select.Option;

class Register extends React.Component {

  handelSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        message.success(`${userInfo.userName} 登录成功`)
      }
    })
  }

  render() {

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 20
      }
    }

    return (
      <div className="home-warp-btn">
        <Card title="注册表单" style={{ marginTop: 10 }}>
          <Form layout="horizontal" style={{ width: 400 }}>
            <ForItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: 'Jack',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 5, max: 15,
                      message: '长度不在范围内'
                    },
                    {
                      pattern: new RegExp('^\\w+$', 'g'),
                      message: '用户名字母'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名" />
                )
              }
            </ForItem>
            <ForItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '123456',
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码" type="password" />
                )
              }
            </ForItem>
            <ForItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: true,
                  rules: []
                })(
                  <Radio.Group>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </Radio.Group>
                )
              }
            </ForItem>
            <ForItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18,
                  rules: []
                })(
                  <InputNumber></InputNumber>
                )
              }
            </ForItem>

            <ForItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '1',
                  rules: []
                })(
                  <Select>
                    <Option value="1">鲶鱼一条</Option>
                    <Option value="2">鲶鱼er条</Option>
                    <Option value="3">鲶鱼san条</Option>
                    <Option value="4">鲶鱼si条</Option>
                    <Option value="5">鲶鱼wu条</Option>
                  </Select>
                )
              }
            </ForItem>

            <ForItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: ['1', '5'],
                  rules: []
                })(
                  <Select mode="multiple">
                    <Option value="1">看电视</Option>
                    <Option value="2">游泳</Option>
                    <Option value="3">爬山</Option>
                    <Option value="4">唱歌</Option>
                    <Option value="5">篮球</Option>
                  </Select>
                )
              }
            </ForItem>



            <ForItem>
              <Button type="primary" block onClick={this.handelSubmit}>注册</Button>
            </ForItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Register)