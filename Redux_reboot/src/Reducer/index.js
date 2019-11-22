import { combineReducers } from "redux";

const intialState = {

    counter: 0,
    name: "",
    tasks: [],
    lastName: '',
    email:'',
    ischecked:false,
    language:''
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
            return {...state, ischecked: payload.ischecked}
        
        case "pickerselect":
            return {...state,language :payload.language}

        default:
            return state;
    }
};


export const reducer = combineReducers({
    countereducer: countereducer
});