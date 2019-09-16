import {createStore} from 'redux'

//创建状态仓库

var store =createStore(function(state="张三",action){
    console.log(action)
    switch(action.type){
        
        case 'change':return action.name
        default: return state
    }
})
//action 通知 改变store的唯一方式

var act={
    type:'change',
    name:'李四'
}
//发出通知
store.dispatch(act)
export default store
