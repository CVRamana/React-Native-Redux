import { combineReducers } from "redux";

const initialState={
    data:[],
    loading:true,
    err:''
}
const apiReducer=(state=initialState,action)=>{
    switch(action.type){

        case 'fetch_api_data':
            return {...state,data:action.payload.data}

        default :
        return state
    }
}
export const reducer= combineReducers({
    apiReducer:apiReducer
})