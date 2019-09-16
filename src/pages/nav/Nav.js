import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import { Button, Flex, InputItem, WingBlank, WhiteSpace, Radio, SearchBar, Carousel } from 'antd-mobile';

import Main from './main/Main'
import History from './history/History'
import My from './my/My'
import Chat from './chat/Chat'
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'main',
            iconlist: [
                { id: 1, title: '首页', key: 'main', icon: 'home.png', selectedIcon: 'home1.png' },
                { id: 2, title: '微聊', key: 'chat', icon: 'talk.png', selectedIcon: 'talk1.png' },
                { id: 3, title: '足迹', key: 'history', icon: 'footprint.png', selectedIcon: 'footprint1.png' },
                { id: 4, title: '我的', key: 'my', icon: 'my.png', selectedIcon: 'my1.png' }
            ]
        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
<TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                       
                    >
                {this.state.iconlist.map(obj => {
                   
                    return <TabBar.Item
                            title={obj.title}
                            key={obj.key}
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/images/' + obj.icon)}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/images/' + obj.selectedIcon)}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selected={this.state.selectedTab === obj.key}
                            onPress={() => {
                                this.setState({
                                    selectedTab: obj.key,
                                });
                            }}
                        >
                            {this.renderContent()}
                        </TabBar.Item>
                   
                })}
                 </TabBar>
            </div>
        );
    }
    renderContent() {
       switch(this.state.selectedTab){
           case "main":return <Main h={this.props.history}/>
           case "chat":return <Chat />
           case "history":return <History />
           case "my":return <My h={this.props.history}/>

       }
    }
}
