import {
    SET_NAME_P1,
    SET_NAME_P2,
    ADD_GAME,
    ADD_ROUND,
    SET_SCORE_P1,
    SET_SCORE_P2,
    SET_SCORE_CPU,
    SET_WIN_SCORE
} from "./actions";

const initialState = {name: "", scores: []};


export default function reducer(state = initialState, action) {
    //console.log("reducer", action.type);
    switch (action.type) {
        case SET_NAME_P1:
            //console.log("SET_NAME_P1: ", action.P1name);
            return {...state, P1name: action.P1name};

        case SET_NAME_P2:
            //console.log("SET_NAME_P2: ", action.P2name);
            return {...state, P2name: action.P2name};

        case SET_SCORE_P1:
            //console.log("SET_SCORE_P1: ", action.P1score);
            return {...state, P1score: action.P1score};

        case SET_SCORE_P2:
            //console.log("SET_SCORE_P2: ", action.P2score);
            return {...state, P2score: action.P2score};

        case SET_SCORE_CPU:
            //console.log("SET_SCORE_CPU: ", action.CPUscore);
            return {...state, CPUscore: action.CPUscore};

        case SET_WIN_SCORE:
            //console.log("SET_WIN_SCORE: ", action.WINscore);
            return {...state, WINscore: action.WINscore};

        case ADD_ROUND:
            //console.log("ADD_ROUND: ", action.round);
            return {...state, round: action.round};

        case ADD_GAME:
            return {...state, scores: [...state.scores, action.scores]};

        default:
            return state;
    }
};