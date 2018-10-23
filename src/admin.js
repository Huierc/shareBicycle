import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NevLeft from './components/NevLeft';
import Home from './pages/Home'
import './style/common.less';

export default class Admin extends React.Component{

	render(){
		
		return(
			<Row className="container">
				<Col span="3" className="nav-left">
					<NevLeft/>
				</Col>
				<Col span="21" className="main">
					<Header/>
					<Row className="content"><Home/></Row>
					<Footer/>
				</Col>
			</Row>
		);
	}
}