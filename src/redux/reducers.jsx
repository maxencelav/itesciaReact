import {SET_NAME_P1, SET_NAME_P2, ADD_GAME} from "./actions";

const initialState = {name: "", scores: []};


export default function reducer(state = initialState, action) {
    console.log("reducer", action.type);
    switch (action.type) {
        case SET_NAME_P1:
            console.log("SET_NAME_P1: ", action.P1name);
            return {...state, P1name: action.P1name};

        case SET_NAME_P2:
            console.log("SET_NAME_P2: ", action.P2name);
            return {...state, P2name: action.P2name};

        case ADD_GAME:
            return {...state, scores: [...state.scores, action.scores]};

        default:
            return state;
    }
};