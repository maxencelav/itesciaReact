import {SET_NAMES, ADD_GAME} from "./actions";

const initialState = {name: "", scores: []};


export default function reducer(state = initialState, action) {
    console.log("reducer", action.type);
    switch (action.type) {
        case SET_NAMES:
            console.log("SET_NAMES: " , action.names);
            return {...state, names: action.names};

        case ADD_GAME:
            return {...state, scores: [...state.scores, action.scores]};

        default:
            return state;
    }
};