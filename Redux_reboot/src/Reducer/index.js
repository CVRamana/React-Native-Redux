import { combineReducers } from "redux";
//import { kMaxLength } from "buffer";

const intialState = {

    counter: 0,
    name: "",
    tasks: [],
    lastName: '',
    email:'',
    //ischecked:false,
    language:'',
    gender:[
        { id:'Male',   ischecked:false },
        { id:'Female', ischecked:false },
        { id:'Other',  ischecked:false },
    ],
    preference:[
    {id:'hindi',  ismarked:false},
    {id:'english',ismarked:false},
    {id:'urdu',   ismarked:false},
    {id:'Arabic', ismarked:false},
    {id:'French', ismarked:false},
],
   // ismarked:false,
};


const countereducer = (state = intialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "increment":
            return { ...state, counter: payload.counter };

        case "decrement":
            return { ...state, counter: payload.counter };

        case 'updateInput':
            return { ...state, ...payload };

        case "addtask":
            return {...state,tasks: [...state.tasks,payload]}

        case "radiobutton":
            return {...state, gender: payload.gender}
        
        case "pickerselect":
            return {...state,language :payload.language}

        case 'checkbox':
            return {...state,preference:payload.preference}

        default:
            return state;
    }
};


export const reducer = combineReducers({
    countereducer: countereducer
});