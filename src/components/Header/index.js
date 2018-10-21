import React from 'react';
import { Row, Col } from 'antd';
import './index.less'
import Until from '../../untils/untils'
import axios from '../../axios/index'
export default class Header extends React.Component {

	state = {
		sysTime:'',
		userName:'小红帽'
	}

	componentWillMount(){
		setInterval(() => {
			let sysTime = Until.formateDate(new Date())
			this.setState({
				sysTime
			})
		},1000)
		this.getWeatherAPIData()
	}

	getWeatherAPIData(){
		let city = '北京'
		axios.jsonp({
			url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
		}).then(data => {
			if(data.status == 'success'){
				let dayImg = data.results[0].weather_data[0].dayPictureUrl;
				let weather = data.results[0].weather_data[0].weather;
				let temperature = data.results[0].weather_data[0].temperature;
				this.setState({
					dayImg,weather,temperature
				})
			}
		})
	}

	render() {
		const {dayImg,weather,temperature} = this.state;
		return (
			<div className="home-header">
				<Row className="home-header-top">
					<Col span="24">
						<span><img src="/images/hi.png"/>欢迎，{this.state.userName}</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="home-header-breadcrumb">
					<Col span="4" className="breadcrumb-title">
						<span>首页</span>
					</Col>
					<Col span="20" className="breadcrumb-weather">
						<span style={{marginRight:15}}>{this.state.sysTime}</span>
						<span className="breadcrumb-weather-detail">
							<img src={dayImg} alt='' style={{width:'16px',height:'16px',marginRight:7}}/>
							{weather}{temperature}
						</span>
					</Col>
				</Row>
			</div>
		);
	}
}

