import React from 'react';
import { Card, Button, Radio } from 'antd'
import '../index.less'
export default class Buttons extends React.Component {

  state = {
    loading: true,
    size:'default'
  }

  handleCloseLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  handleChange=(e)=>{
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div className="home-warp-btn">
        <Card title="基础按钮">
          <Button type="primary">bicycle</Button>
          <Button>bicycle</Button>
          <Button type="dashed">bicycle</Button>
          <Button type="danger">bicycle</Button>
        </Card>

        <Card title="图形按钮">
          <Button type="primary" shape="circle" icon="code" />
          <Button type="primary" icon="bars">bicycle</Button>
          <Button shape="circle" icon="edit" />
          <Button icon="up">bicycle</Button>
          <Button shape="circle" icon="search" />
          <Button icon="left">Search</Button>
          <Button type="dashed" shape="circle" icon="down" />
          <Button type="dashed" icon="search">Search</Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>Loading</Button>
          <Button type="primary" loading={this.state.loading} shape="circle"></Button>
          <Button loading={this.state.loading}>Loading</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>Loading</Button>
        </Card>

        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left" style={{ marginRight: 0 }}>返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>

        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" icon="left" size={this.state.size}>返回</Button>
          <Button type="primary" icon="right" size={this.state.size}>前进</Button>
        </Card>

      </div>
    )
  }
}