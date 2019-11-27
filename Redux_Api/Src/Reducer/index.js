import { combineReducers } from "redux";

const initialState={
    data:[],
    listt:[
        {id:Math.random(),name:"hindi"},
        {id:Math.random(),name:"English"},
        {id:Math.random(),name:"French"},
        {id:Math.random(),name:"Bangla"},
        {id:Math.random(),name:"Urdu"},
       ],
       istoggle:false,
       selectedData:''
}

const apiReducer=(state=initialState,action)=>{
    switch(action.type){

        case 'fetch_api_data':
            return {...state,data:action.payload.data}
        
        case 'toggle_menu':
            return {...state,istoggle:action.payload.istoggle}

        case 'menu_item':
            return {...state, istoggle:action.payload.istoggle,
                selectedData:action.payload.selectedData}

         default :
        return state
    }
}
export const reducer= combineReducers({
    apiReducer:apiReducer
})