import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox} from 'antd';
const ForItem = Form.Item;
class Login extends React.Component {

  handelSubmit= () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err,value)=>{
      if(!err){
        message.success(`${userInfo.userName} 登录成功`)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="行内登录">
          <Form layout="inline">
            <ForItem>
              <Input placeholder="请输入用户名" />
            </ForItem>
            <ForItem>
              <Input placeholder="请输入密码" type="password"/>
            </ForItem>
            <ForItem>
              <Button type="primary">登录</Button>
            </ForItem>
          </Form>
        </Card>
        <Card title="水平登录" style={{ marginTop: 10 }}>
          <Form style={{ width: 400 }}>
            <ForItem>
              {
                getFieldDecorator('userName', {
                  initialValue: 'Jack',
                  rules: [
                    {
                      required:true,
                      message:'用户名不能为空'
                    },
                    {
                      min:5,max:15,
                      message:'长度不在范围内'
                    },
                    {
                      pattern:new RegExp('^\\w+$','g'),
                      message:'用户名字母'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名" />
                )
              }
            </ForItem>
            <ForItem>
              {
                getFieldDecorator('password', {
                  initialValue: '123456',
                  rules: []
                })(
                  <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码" type="password"/>
                )
              }
            </ForItem>
            <ForItem>
              {
                getFieldDecorator('remember', {
                  valuePropName:'checked',
                  initialValue: true
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="#" style={{float:'right'}}>忘记密码</a>
            </ForItem>
            <ForItem>
              <Button type="primary" block onClick={this.handelSubmit}>登录</Button>
            </ForItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default  Form.create()(Login)