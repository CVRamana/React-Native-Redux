import { combineReducers } from "redux";
//import {  } from "../Images/";
const intialState = {
  //counter: 0,
  recent_Chats:[
      {pic:require("../Images/plus.png"),name:'Add...'},
      {pic:require("../Images/women2.jpg"),name:'Raman2'},
      {pic:require("../Images/women5.jpg"),name:'Raman3'},
      {pic:require("../Images/women6.jpg"),name:'Raman4'},
      {pic:require("../Images/women.jpg"),name:'Raman5'},
      {pic:require("../Images/women1.jpg"),name:'Raman7'},
  ],
  live_Chats:[
    //{pic:require("../Images/plus.png"),name:'Raman1',mssg:'hello!!!'},
    {pic:require("../Images/women.jpg"),name:'Raman2',mssg:'hello!!!'},
    {pic:require("../Images/women1.jpg"),name:'Raman3',mssg:'hello!!!'},
    {pic:require("../Images/women3.jpg"),name:'Raman4',mssg:'hello!!!'},
    {pic:require("../Images/women5.jpg"),name:'Raman5',mssg:'hello!!!'},
    {pic:require("../Images/women2.jpg"),name:'Raman7',mssg:'hello!!!'},
    {pic:require("../Images/women.jpg"),name:'Raman2',mssg:'hello!!!'},
    {pic:require("../Images/women3.jpg"),name:'Raman3',mssg:'hello!!!'},
    {pic:require("../Images/women3.jpg"),name:'Raman4',mssg:'hello!!!'},
    {pic:require("../Images/women5.jpg"),name:'Raman5',mssg:'hello!!!'},
    {pic:require("../Images/women2.jpg"),name:'Raman7',mssg:'hello!!!'},

  ],
  
};
const myreducer = (state = intialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: action.payload.counter };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  myreducer: myreducer
});
