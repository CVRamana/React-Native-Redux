import { dispatch } from "rxjs/internal/observable/pairs"
import { isTemplateElement } from "@babel/types"

export const apiData = (res) => {
    return (dispatch, getState) => {
        const {data} = getState().apiReducer
        dispatch( { type: "fetch_api_data" , payload: { data: data.concat(res) } } )
    }
}
export const toggleMenu=()=>{
    return (dispatch,getState)=>{
        const {istoggle}=getState().apiReducer
        console.warn(istoggle)
dispatch({type:'toggle_menu',payload:{istoggle: !istoggle}})
    }
}
export const selectItem=(item)=>{
    return (dispatch,getState)=>{
        const {istoggle,selectedData}=getState().apiReducer
        console.warn(istoggle,selectedData)
        dispatch({type:'menu_item',
        payload:{istoggle:!istoggle,selectedData:item.name}})

    }
}