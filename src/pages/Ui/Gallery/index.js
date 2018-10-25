import React from 'react';
import { Card, Row, Col, Modal } from 'antd'
import '../index.less'
export default class Gallery extends React.Component {

  state = {
    visible: false
  }

  showBigImg = (item) => {
    this.setState({
      visible: true,
      modalImg: '/images/imgL/' + item
    })
  }

  render() {
    const imgs = [
      ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
      ['6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],
      ['11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'],
      ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
      ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg']
    ]
    const imgList = imgs.map((list) => list.map((item, index) =>
      <Card
        cover={<img src={'/images/imgL/' + item} alt="最美" onClick={() => this.showBigImg(item)} />}
        style={{ marginBottom: 10 }}
        key={index}
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
              <Col md={4} key={index} style={{ marginLeft: 30 }}>
                {item}
              </Col>
            ))
          }
        </Row>
        <Modal
          visible={this.state.visible}
          footer={null}
          onCancel={() => {
            this.setState({
              visible: false
            })
          }}
          title="真美膩呀"
        >
          {<img alt="" src={this.state.modalImg} style={{width:'100%',height:'400px'}} />}
        </Modal>
      </div>
    )
  }
}