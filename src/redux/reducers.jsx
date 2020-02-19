import {SET_NAME_P1, SET_NAME_P2, ADD_GAME} from "./actions";

const initialState = {name: "", scores: []};


export default function reducer(state = initialState, action) {
    console.log("reducer", action.type);
    switch (action.type) {
        case SET_NAME_P1:
            return {...state, nameP1: action.nameP1};

        case SET_NAME_P2:
            return {...state, nameP2: action.nameP2};

        case ADD_GAME:
            return {...state, scores: [...state.scores, action.score].sort(compare).slice(0, 5)};

        default:
            return state;
    }
};