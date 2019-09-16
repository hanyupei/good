import React, { Component } from 'react'
import { Button, Flex, InputItem, WingBlank, WhiteSpace,List,NavBar,Icon} from 'antd-mobile';
import './My.css'
const Item = List.Item;
const Brief = Item.Brief;
export default class My extends Component {
  constructor() {
    super()
    this.state = {
      titlelist: [
        { id: 1, num: 0, img: require('../../../assets/images/钱包.png'), title: '钱包' },
        { id: 2, num: 0, img: require('../../../assets/images/优惠.png'), title: '优惠' },
        { id: 3, num: 0, img: require('../../../assets/images/积分.png'), title: '积分' },
      ],
      docked: false,
      msg:'登陆/注册'
    }
  }
  clicklogin(){
    if(!localStorage.getItem('username')){
      this.props.h.push('/login')
    }
  }
  componentDidMount(){
    var val=localStorage.getItem('username')
    this.setState({
      msg:val?val:'登陆/注册'
    })
  }
  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#5CCAFC' }}>
          <Flex>
            <div style={{ width: '20%' }}><img src={require("../../../assets/images/boy.png")} style={{ height: '100%', width: '100%', marginRight: '5px' }}></img></div>
            <div style={{ height: '100%', flex: '1', display: 'flex', alignItems: 'center' }}>
              <div style={{ height: '100%', flex: '1', textIndent: '10px' }}>
                <h3 onClick={this.clicklogin.bind(this)}>{this.state.msg}</h3>
                <p>可与经纪人发起聊天</p>
              </div>
              <div style={{ width: '20%' }}><img src={require('../../../assets/images/set.png')} style={{ width: '50%', height: '30%' }}></img></div>
            </div>
          </Flex>
          <div style={{ height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {this.state.titlelist.map(obj => {
              return <div key={obj.id} style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', color: '#fff', borderRight: '1px solid #fff' }}>
                <p style={{ textAlign: 'center' }}>{obj.num}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={obj.img} style={{ height: '30%', width: '30%' }}></img>
                  <span style={{ fontSize: '16px', color: '#fff', marginLeft: '5px' }}>{obj.title}</span>
                </div>
              </div>

            })}
          </div>
        </div>
        <WhiteSpace size='lg' />
        <div>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的积分</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的订阅</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >微聊联系人</Item>
        <WhiteSpace size='lg' />
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >房款计算器</Item>
         <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的房子</Item>
        <WhiteSpace size='lg' />
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的看房记录</Item>
         <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的问答</Item>
         <WhiteSpace size='lg' />
         <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >设置</Item>
         <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >意见反馈</Item>
        </div>
      </div>
    )
  }
}
