import React, { Component } from 'react'

//引入redux
import store from './Store'

import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './pages/nav/Nav' //导航
import My from './pages/nav/my/My'   //我的
import Login from './pages/login/Login' //登录
import Reg from './pages/reg/Reg'   //注册
import Mymap from './pages/map/Mymap'   //地图
import Selectcity from './pages/selectcity/Selectcity'  //选择城市
import Search from './pages/Search/Search'  //搜索
import { Provider } from 'react-redux'



export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <HashRouter>
            <Switch>
                <Route path='/' exact component={Nav}></Route>
                <Route path='/my'  component={My}></Route>
                <Route path='/login'  component={Login}></Route>
                <Route path='/reg'  component={Reg}></Route>       
                <Route path='/map'  component={Mymap}></Route>       
                <Route path='/search'  component={Search}></Route>       
                <Route path='/selectcity'  component={Selectcity}></Route>       
                <Route  component={Nav}></Route>
                
            </Switch>
        </HashRouter>
        </Provider>
        )
    }

}

