import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex, InputItem, WingBlank, WhiteSpace, Radio } from 'antd-mobile';
import {reg,getcode} from '../../api/api'
import './Reg.css'
export default class Reg extends Component {
    constructor(){
        super()
        this.state={
            acc:'' , //用户名
            pwd:'' , //密码
            show:'none', //
            code:''  //获取验证码
        }
    }
    render() {
        return (
            <div>
                <WingBlank size='lg'>
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={this.state.acc}
                        onChange={(val)=>{this.setState({acc:val})}}
                    />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={this.state.pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    />
                    <WingBlank size='lg'><div className="code">
                         <div style={{fontSize: "17px",flex: "1 1"}}>
                        <input placeholder="请输入验证码" value={this.state.code}></input>
                        </div>
                        <p className="getcode" onClick={this.getCode.bind(this)}>获取验证码</p>
                    </div></WingBlank>
                    
                    <Flex style={{ padding: '15px' }}>
                        <Flex.Item>
                            <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>我已同意 <span style={{ color: 'blue' }}>《用户注册协议</span>》及<span style={{ color: 'blue' }}>《隐私权政策》</span></Radio>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Button type="primary" onClick={this.onreg.bind(this)}>注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to="/login" style={{ color: 'red',display:this.state.show }}>已有账户</Link>
                   
                </WingBlank>
            </div>
        )
    }
    onreg(){
        let {acc,pwd}=this.state
       reg(acc,pwd).then(obj=>{
           if(obj.data=="ok"&&this.state.code){
            this.props.history.push('/login')
           }else{
               this.setState({
                   show:'block'
               })
           }
       })
    }
    getCode(){
        getcode().then(msg=>{
           this.setState({
               code:msg.data
           })
        })
    }
}
