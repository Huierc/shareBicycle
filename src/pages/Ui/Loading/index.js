import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd'
import '../index.less'
export default class Loading extends React.Component {

  render() {
    const icon = <Icon type="loading" style={{ fontSize: 25 }} />
    return (
      <div className="home-warp-btn">
        <Card title="Spin的用法">
          <Spin />
          <Spin size="large" />
          <Spin indicator={icon} />
        </Card>
        <Card title="Spin的用法">

          <Alert
            message="React"
            description="react react react"
            type="info"
          />
          <Spin>
            <Alert
              message="React"
              description="react react react"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="react react react"
              type="success"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}