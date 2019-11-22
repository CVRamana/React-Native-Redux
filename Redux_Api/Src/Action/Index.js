
export const apiData = (res) => {
    return (dispatch, getState) => {
        const {data} = getState().apiReducer
        dispatch( { type: "fetch_api_data" , payload: { data: data.concat(res) } } )
    }
}