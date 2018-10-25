import React from 'react';
import { Card, Button, Radio, Modal } from 'antd'
import '../index.less'
export default class Model extends React.Component {

  state = {
    model1:false,
    model2:false,
    model3:false,
    model4:false
  }

  handleOpen =(type)=>{
    this.setState({
      [type]:true
    })
  }

  handleConfirm=(type)=>{
    Modal[type]({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    return (
      <div className="home-warp-btn">
        <Card title="普通弹框">
          <Button onClick={() => this.handleOpen('model1')}>open</Button>
          <Button onClick={() => this.handleOpen('model2')}>自定义页脚</Button>
          <Button onClick={() => this.handleOpen('model3')}>顶部20px弹框</Button>
          <Button onClick={() => this.handleOpen('model4')}>水平垂直居中</Button>
        </Card>
        <Card title="对话弹框">
          <Button onClick={() => this.handleConfirm('confirm')}>confirm</Button>
          <Button onClick={() => this.handleConfirm('info')}>info</Button>
          <Button onClick={() => this.handleConfirm('success')}>success</Button>
          <Button onClick={() => this.handleConfirm('warning')}>warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.model1}
          onCancel={()=>{
            this.setState({
              model1:false
            })
          }}
        >
          <p>husskfhsfksjdkadh</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.model2}
          okText="下一步"
          cancelText="算了"
          onCancel={()=>{
            this.setState({
              model2:false
            })
          }}
        >
          <p>husskfhsfksjdkadh</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.model3}
          style={{top:20}}
          onCancel={()=>{
            this.setState({
              model3:false
            })
          }}
        >
          <p>husskfhsfksjdkadh</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.model4}
          onCancel={()=>{
            this.setState({
              model4:false
            })
          }}
        >
          <p>husskfhsfksjdkadh</p>
        </Modal>
      </div>
    )
  }
}