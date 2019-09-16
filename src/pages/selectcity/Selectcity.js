import React, { Component } from 'react'

import selectcity from '../json/city.json'
import bscroll from 'better-scroll'
export default class Selectcoty extends Component {
   
    render() {
        return (
            <div style={{height:'100%   '}}>
            <div id='selectcity' style={{ height: '100%', overflow: 'scroll', paddingRight: '20px' }}>
                <ul className="content">
                
               {/* 热门城市 */}
                <p style={{ backgroundColor: '#CCC', margin: 0 }}>热门城市</p>
                {
                    selectcity.hotcity.map(obj => <div>
                        <p style={{ lineHeight: '40px', borderBottom: '1px solid #CCC' }}>{obj}</p>
                    </div>)
                }

                {/* 所有城市 */}
                {
                    selectcity.citys.map(obj => <div id={obj.title}>
                        <h1>{obj.title}</h1>
                        {
                            obj.child.map(cn => <p style={{ lineHeight: '40px', borderBottom: '1px solid #CCC' }}>{cn}</p>)
                        }
                    </div>)
                }
                </ul>
            </div>
            <div style={{position: 'fixed',width: '15px', height: '100px',right: 0, top: 100}}>
                    {
                        selectcity.citys.map(obj => <p onClick={this.clickRightTitle.bind(this, obj.title)}>{obj.title}</p>)
                    }
            </div>
            </div> 
        )
    }
    clickRightTitle(val){
        this.myscroll.scrollToElement('#' + val, 300)
    }
    componentDidMount(){
        this.myscroll = new bscroll('#selectcity', {})
    }
   
}
