import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom'
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
		let city = '武汉'
		axios.jsonp({
			url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
		}).then(data => {
			if(data.status === 'success'){
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
		const {dayImg,weather,temperature,userName,sysTime} = this.state;
		return (
			<div className="home-header">
				<Row className="home-header-top">
					<Col span="24">
						<span><img src="/images/hi.png" alt='' />欢迎，{userName}</span>
						<Link to={'/login'}>退出</Link>
					</Col>
				</Row>
				<Row className="home-header-breadcrumb">
					<Col span="4" className="breadcrumb-title">
						<span>首页</span>
					</Col>
					<Col span="20" className="breadcrumb-weather">
						<span style={{marginRight:15}}>{sysTime}</span>
						<span className="breadcrumb-weather-detail">
							<img src={dayImg} alt='' style={{width:'16px',height:'16px',marginRight:7}}/>
							{weather}{temperature} 武汉
						</span>
					</Col>
				</Row>
			</div>
		);
	}
}

