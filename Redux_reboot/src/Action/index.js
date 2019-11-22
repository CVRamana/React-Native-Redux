

export const incrementCounter = () => {
  // console.warn('counter ', this.props.counter)
  //debugger
  return (dispatch, getState) => {
    const { counter } = getState().countereducer;
    dispatch({ type: 'increment', payload: { counter: counter + 1 } })
  }
}
export const decrementCounter = () => {
  return (dispatch, getState) => {
    const { counter } = getState().countereducer;
    dispatch({ type: "decrement", payload: { counter: counter - 1 } })
  }
}


export const updateInputVal = (key, value) => {
  return (dispatch) => {
    dispatch({ type: "updateInput", payload: { [key]: value } })
  }
}
export const addTask =()=>{
  return (dispatch,getState)=>{
    const {name,email,language, lastName }=getState().countereducer;
    let obj = {name : name, email : email, language : language, lastName : lastName};
    if (obj.name==='' && obj.lastName==='' &&obj.email==='' &&obj.language===''){
      alert("please fill all the fields")
      return
    }
    dispatch({type:'addtask',payload:obj});
  }
}

export const radioButton =()=>{
  return (dispatch,getState)=>{
   const {ischecked} = getState().countereducer
    //const {tasks}=getState().countereducer
    dispatch({type:'radiobutton',payload:{ischecked: !ischecked}})
  }
}

export const pickerSelect=(item)=>{
  return (dispatch,getState)=>{
    const {language} =getState().countereducer
    dispatch({type:'pickerselect',payload:{language:item}})

  }

}
