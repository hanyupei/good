import React, { Component } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Button, Flex, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';

//引入接口
import {login} from '../../api/api'
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:'',//用户名
            msg:'',//密码
            olduser:'',//老用户名
            oldmsg:'',//老密码
            show:'none'  
        }
    }
    render() {
        return (
            <div style={{backgroundColor:'#fff',height:'100%'}}>
                <WingBlank size='lg'>
                    <Flex justify="center">
                        <img src={require('../../assets/images/sold.jpg')} className="image"></img>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={this.state.user}
                        onChange={(val)=>{this.setState({user:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="sm" />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={this.state.msg}
                        onChange={(val)=>{this.setState({msg:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/lock.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <p style={{colol:'red',display:this.state.show}} >用户名或密码错误</p>
                    <Button type="primary" onClick={this.clickload.bind(this)}>登陆</Button>
                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                    <Link to="/reg"><span style={{color:"red"}}>手机快速注册</span></Link>
                    <Link to="/reg"><span style={{color:"red"}}>忘记密码?</span></Link>
                    </Flex>
                    <div className="bottom">登陆注册即代表同意《居美家房产用户协议》</div>
                    
                </WingBlank>
            </div>
        )
    }
    clickload(){
        let {msg,oldmsg,user,olduser}=this.state
        //如果密码和用户名都有之前一样,就返回
        if(oldmsg==msg&&olduser==user) return
        //保存上一轮的用户名和密码
        this.setState({
            oldmsg: msg,
            olduser: user
        })
        login(user,msg).then(msg=>{
            console.log(msg,user)
            if(msg.data=="ok"){
                this.props.history.push('/')
                localStorage.setItem('username',user)
            }else{
               this.setState({
                   show:'block'
               })
            }
        })
    }
}
