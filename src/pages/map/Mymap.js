import React, { Component } from 'react'

export default class map extends Component {
    constructor(){
        super()
        this.state={
            city:[] //定位
        }
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <div id="container" style={{width:'100%',height:'100%'}}></div>
            </div>
        )
    }
    componentDidMount(){
        let _this=this
        var mymap = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom:20
        });
         //实例化城市查询类
         var citysearch = new window.AMap.CitySearch();
         //自动获取用户IP，返回当前城市
         citysearch.getLocalCity(function(status, result) {
             if (status === 'complete' && result.info === 'OK') {
                 if (result && result.city && result.bounds) {
                     var cityinfo = result.city;
                     var citybounds = result.bounds;
                     //document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                     _this.setState({
                         city:citybounds
                     })
                     //地图显示当前城市
                     mymap.setBounds(citybounds);
                 }
             } else {
                _this.setState({
                    city:cityinfo
                })
             }
         });
    }
}
