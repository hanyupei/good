import React, { Component } from 'react'
import {  Flex } from 'antd-mobile';
import {connect} from 'react-redux';
import { IP } from '../../../api/api'
 class History extends Component {
    render() {
        var show=this.props.list.length==0?'block':'none'
        return (<div>
                 <h1>历史纪录</h1>
                 <p style={{lineHeight:'30px',fontSize:'20px',display:show}} >空空如也</p>
                <Flex direction="column" >
                    {this.props.list.map(obj => {
                        return <div style={{ display: 'flex', width: '100%' ,marginBottom:'3px'}} key={obj.id} >
                            <div  style={{width:'30%'}}>
                            <img src={IP+obj.imgs} style={{height:'100%',width:'100%'}}></img>
                            </div>
                            <div style={{ display: "flex" ,width:'100%',alignItems:'center',flex:'1'}}>
                                <div style={{flex:'1'}}>
                                    <h2>{obj.name}</h2>
                                    <p><span>{obj.area}</span> <span style={{ marginLeft: '5px' }}>{obj.range}</span></p>
                                    <p><span>{obj.type}</span> <span style={{ marginLeft: '5px' }}>{obj.point}</span></p>
                                </div>
                                <div style={{width:'20%',color:"red",marginRight:'25px'}}>{obj.price}&yen;/M</div>
                            </div>
                            
                        </div>

                    })}
                </Flex>
            </div>
        )
       
    }
}

export default connect((state=>{
    return {
        list:state.list
    }
}))(History)
