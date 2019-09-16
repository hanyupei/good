import {createStore,combineReducers} from 'redux'

//创建状态仓库

function list(state=[],action){
    
    switch(action.type){
        case 'addhouse':return [action.val,...state.filter(obj=>obj.name!=action.val.name)]
        default: return state
    }
}
var store =createStore(combineReducers({
    list
}))

export default store
