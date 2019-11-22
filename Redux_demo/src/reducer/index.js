import { combineReducers } from "redux";

const intialState = {
  counter: 0,
  name: "ram"
};
const countereducer = (state = intialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: action.payload.counter };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  countereducer: countereducer
});
////////// taking valur from the multi textinput
const updatestate=(key,value)=>{
return (dispatch)=>{
  dispatch(updateData({[Key]:value}))
}
}