import React from 'react';
import { Table, Card, Modal, Button } from 'antd';
import './index.less'
import utils from './../../utils/utils'
import axios from './../../axios/index';

export default class BaseTable extends React.Component {

  state = {
    dataSource: [],
    dataSource2: [],
    pagination:null
  }

  componentDidMount() {
    this.request();
  }

  request = () => {
    axios.ajax({
      url: '/table/list',
      data:{
        pages:1
      }
    }).then((res) => {
      if(res.success){
        this.setState({
          dataSource2: res.data.result.list,
          selectedRowKeys:[],
          selectedRow:null,
          pagination:utils.pagination(res,()=>{
          })
        })
      }
    })
  }

  onRowClick = (record,index) => {
    Modal.info({
      title:record
    })
    let rowIndex = [index]
    this.setState({
      selectedRowKeys:rowIndex,
      selectItem:record
    })
  }

  handleDelete = () => {
    let row = this.state.selectedRow;
    let ids = [];
    let names = [];
    row.map((item) => {
      ids.push(item.key);
      names.push(item.name)
    })
    Modal.confirm({
      title:'删除提示',
      content:`删除 ${names.join(' , ')} 吗？`,
      onOk:() => {
        this.request()
      }
    })
  }

  render() {

    const columns = [{
      title: 'id',
      dataIndex: 'key',
      key: 'id',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '爱好',
      dataIndex: 'love',
      key: 'love',
      render(res){
        let config = {
          "1":"唱歌",
          "2":"跳舞",
          "3":"睡觉",
          "4":"跑步",
          "5":"爬山",
        }
        return config[res]
      }
    }];

    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      love: 1
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      love: 2
    }];

    const rowSelection = {
      type:'radio',
      selectedRowKeys:this.state.selectedRowKeys
    }

    const rowCheckSelection ={
      type:'checkbox',
      selectedRowKeys:this.state.selectedRowKeys,
      onChange:(selectedRowKeys,selectedRow) => {
        this.setState({
          selectedRowKeys,
          selectedRow
        })
      }
    }

    console.log(this.state.dataSource2)

    return (
      <div className="home-warp-btn">
        <Card title="基本表格">
          <Table bordered dataSource={dataSource} columns={columns} />
        </Card>
        <Card title="动态表格-Mock">
          <Table bordered dataSource={this.state.dataSource2} columns={columns} />
        </Card>
        <Card title="MOck-单选">
          <Table 
            bordered
            rowSelection={rowSelection}
            onRow={(record,index) => {
              return {
                onClick:() => {
                  this.onRowClick(record,index)
                }
              }
            }}
            dataSource={this.state.dataSource2} columns={columns} />
        </Card>
        <Card title="MOck-多选">
          <Button type="primary" onClick={this.handleDelete}>删除</Button>
          <Table 
            bordered
            rowSelection={rowCheckSelection}
            dataSource={this.state.dataSource2} columns={columns} />
        </Card>
        <Card title="MOck-多选">
        <Button type="primary" onClick={this.handleDelete}>删除</Button>
          <Table 
            bordered
            rowSelection={rowCheckSelection}
            dataSource={this.state.dataSource2} columns={columns} pagination={this.state.pagination}/>
        </Card>
      </div>
    )
  }
}