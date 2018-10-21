import React from 'react';
import { Menu, Icon } from 'antd';
import './index.less';
import MenuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;
export default class NevLeft extends React.Component {

	state = {
		menuTree:''
	}

	componentDidMount(){
		this.setState({
			menuTree:this.renderMenu(MenuConfig)
		})
	}

	//递归
	renderMenu = (data) => {
		return data.map((item) => {
			if(item.children){
				return (
					<SubMenu title={<span><Icon type="appstore" /><span>{item.title}</span></span>} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			}else{
				return (<Menu.Item key={item.key}>{item.title}</Menu.Item>)
			}
		})
	}

	render() {
		const {menuTree} = this.state
		return (
			<div>
				<div className="home-logo">
					<img src="/images/logo.png" style={{ float: "left" }} />
					<h2 style={{ fontSize: 18, color: '#fff', marginLeft: 36 }}>Hello Bicycle</h2>
				</div>
				<Menu theme="dark">
					{menuTree}
				</Menu>
			</div>
		);
	}
}