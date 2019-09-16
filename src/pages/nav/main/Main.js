import React, { Component } from 'react'

import './Main.css'
import { getlist,IP } from '../../../api/api'
import {  Flex, WhiteSpace,  Carousel } from 'antd-mobile';
import {connect} from 'react-redux'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: ['1', '2', '3'],
            imgHeight: 176,
            img: [
                { id: 1, img: require('../../../assets/images/新房.png'), info: '新房' },
                { id: 2, img: require('../../../assets/images/二手房.png'), info: '二手房' },
                { id: 3, img: require('../../../assets/images/租房 钥匙 房子 面性.png'), info: '租房' },
                { id: 4, img: require('../../../assets/images/商铺写字楼.png'), info: '商铺写字楼' },
                { id: 5, img: require('../../../assets/images/卖房 人民币 房子 线性.png'), info: '卖房' },
                { id: 6, img: require('../../../assets/images/海外房产.png'), info: '海外房产' },
                { id: 7, img: require('../../../assets/images/房价行情.png'), info: '房价行情' },
                { id: 8, img: require('../../../assets/images/问答.png'), info: '房价问答' }]
            , houselist: [
                { id: 1, img: require('../../../assets/images/贷款.png'), info: '我要贷款' },
                { id: 2, img: require('../../../assets/images/计算.png'), info: '放款计算' },
                { id: 3, img: require('../../../assets/images/知识.png'), info: '知识' },
                { id: 4, img: require('../../../assets/images/扫一扫.png'), info: '扫一扫' }
            ],
            list: [],  //猜你喜欢列表
            ip:'http://127.0.0.1:80', //地址
            city:'定位中', //当前定位城市
        }

    }
    changeHash(hash) {
        this.props.h.push(hash)
    }
    componentDidMount() {
        let _this=this
        getlist().then(msg => {
            this.setState({
                list: msg.data
            })

        })
        // simulate img loading
        this.timer = setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
         //实例化城市查询类
         var citysearch = new window.AMap.CitySearch();
         //自动获取用户IP，返回当前城市
         citysearch.getLocalCity(function(status, result) {
             if (status === 'complete' && result.info === 'OK') {
                 if (result && result.city && result.bounds) {
                     var cityinfo = result.city;
                     //var citybounds = result.bounds;
                     //document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                     _this.setState({
                         city:cityinfo,
                     })
                     //地图显示当前城市
                    //  mymap.setBounds(citybounds);
                 }
             } else {
                _this.setState({
                    city:cityinfo
                })
             }
         });
     
    }
    render() {
        return (
            <div>
                <div className="title">
                    <div className='top-search'>
                        <label onClick={this.changeHash.bind(this, '/selectcity')}>{this.state.city}▼</label>
                        <div className='search-div' onClick={this.changeHash.bind(this, '/search')}>
                            <img src={require('../../../assets/images/icon_search.png')} />
                            <label>搜索房源就点我</label>
                        </div>
                        <img onClick={this.changeHash.bind(this, '/map')} src={require('../../../assets/images/map.png')} />
                    </div>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.data.map(val => (
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                </div>
                <Flex justify="between" wrap="wrap">
                    {this.state.img.map(obj => {
                        return <div key={obj.id} style={{ width: "25%", textAlign: "center" }}>
                            <img src={obj.img} style={{ width: "60%", height: "50%" }}></img>
                            <div>{obj.info}</div>
                        </div>
                    })}
                </Flex>
                <WhiteSpace size="lg" />
                <Flex justify="between" wrap="wrap">
                    <h2 style={{ width: "100%", color: '#18C26A', textIndent: "10px" }}>房产全百科<small style={{ marginLeft: '5px', color: '#000' }}>专业买房攻略</small></h2>
                    {this.state.houselist.map(obj => {
                        return <div key={obj.id} style={{ width: "25%", textAlign: "center" }}>
                            <img src={obj.img} style={{ width: "60%", height: "50%" }}></img>
                            <div>{obj.info}</div>
                        </div>
                    })}
                </Flex>
                <WhiteSpace size="lg" />
                 
                <Flex direction="column" >
                    <p style={{ width: '100%' }} onClick={this.click.bind(this)}>猜你喜欢</p>
                    {this.state.list.map(obj => {
                        return <div style={{ display: 'flex', width: '100%' ,marginBottom:'3px'}} key={obj.id} onClick={this.clickhouselist.bind(this,obj)}>
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
    click() {
        console.log(this)
    }
    clickhouselist(val){
        this.props.dispatch({
            type:'addhouse',
            val
        })
    }
}
export default connect()(Main)
