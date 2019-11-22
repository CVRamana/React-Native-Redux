export const incrementCounter = ()=>{
  return(dispatch, getState)=>{
    const { counter } = getState().countereducer;
    dispatch({type: 'increment', payload:{counter: counter+1}})
  }
}