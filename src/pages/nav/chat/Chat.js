import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';
import './Chat.css'
export default class Chat extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ccc',height:"100%"}}>
                <Flex justify="center" align="center" >
                    <div className="person">
                    <div> <img src={require('../../../assets/images/boy.png')} style={{width:'80px',height:'60px'}}></img></div>
                    <p style={{marginTop:'10px'}}>置业顾问<span style={{color:"blue"}}>张晓梅</span></p>
                     <p>专业服务诚信做人做心做事</p>
                    
                     <div style={{marginTop:'10px'}}> <Button type="primary" style={{width:"100px",margin:'auto'}}>我要聊天</Button></div>
                    
                    </div>
                </Flex>
            </div>
        )
    }
}
