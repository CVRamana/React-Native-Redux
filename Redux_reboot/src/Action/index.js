

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

export const radioButton =(obj11)=>{
  return (dispatch,getState)=>{
   const {gender} = getState().countereducer
   const {id,ischecked} = obj11
   const checkedObj = {id:id}
   if (ischecked){
     Object.assign(checkedObj,{ischecked:false})
   }else{
     Object.assign(checkedObj,{ischecked:true})
   }
   let position=gender.indexOf(obj11)
   console.warn(position)
   gender[position]=checkedObj
   let newArr=gender.splice(0)
   console.log(newArr)
    //const {tasks}=getState().countereducer
    dispatch({type:'radiobutton',payload:{gender: newArr}})
  }
}

export const pickerSelect=(item)=>{
  return (dispatch,getState)=>{
    const {language} =getState().countereducer
    dispatch({type:'pickerselect',payload:{language:item}})
  }
}

export const checkedItems=(obj)=>{
  return (dispatch,getState)=>{
  const {preference} = getState().countereducer;
   const {ismarked, id} = obj;
   const markedObj = {id : id };
   console.warn(ismarked);
   if(ismarked){
     Object.assign(markedObj,{ismarked : false});
   }else{
     Object.assign(markedObj,{ismarked : true});
   }
   let posi = preference.indexOf(obj);
   preference[posi] = markedObj;
   let newArr = preference.splice(0);
  dispatch({type:"checkbox",payload:{preference:newArr}})
  }
}
