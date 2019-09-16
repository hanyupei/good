import {createStore,combineReducers} from 'redux'

//创建状态仓库

function name(state="张三",action){
    switch(action.type){
        case 'change':return action.name
        default: return state
    }
      
}
function age(state=18,action){
    switch(action.type){
        default: return state
    }
      
}
function sex(state=1,action){
    switch(action.type){
        default: return state
    }
      
}
function list(state=[1,2],action){
    switch(action.type){
        default: return state
    }
      
}
var store =createStore(combineReducers({
    name,
    age,
    sex,
    list
}))
//action 通知 改变store的唯一方式

var act={
    type:'change',
    name:'李四'
}
console.log(store.getState())
//发出通知
store.dispatch(act)
console.log(store.getState())
export default store
