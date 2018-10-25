import React from 'react';
import { Card, Button, Notification, Alert } from 'antd'
import '../index.less'
export default class Loading extends React.Component {

  openNotificationWithIcon = (type) => {
    Notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }

  render() {
    return (
      <div className="home-warp-btn">
        <Card title="通知提醒框">
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </Card>
      </div>
    )
  }
}