import React from 'react';
import { Card, Row, Col } from 'antd'
import '../index.less'
export default class Gallery extends React.Component {

  render() {
    const imgs = [
      ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
      ['6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],
      ['11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'],
      ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
      ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg']
    ]
    const imgList = imgs.map((list) => list.map((item) =>
      <Card
        cover={<img src={'/images/imgL/' + item} alt="最美" />}
        style={{marginBottom:10}}
      >
        <Card.Meta
          title="react admin"
          description="I Love React"
        />
      </Card>
    ))


    return (
      <div className="home-warp-btn">
        <Row gutter={10}>
          {
            imgList.map((item, index) => (
              <Col md={4} key={index} style={{marginLeft:30}}>
                {item}
              </Col>
            ))
          }
        </Row>
      </div>
    )
  }
}