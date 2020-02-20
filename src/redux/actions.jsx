export const SET_NAME_P1 = 'SET_NAME_P1';
export const SET_NAME_P2 = 'SET_NAME_P2';
export const ADD_ROUND = 'ADD_ROUND';
export const SET_SCORE_P1 = 'SET_SCORE_P1';
export const SET_SCORE_P2 = 'SET_SCORE_P2';
export const SET_SCORE_CPU = 'SET_SCORE_CPU';
export const ADD_GAME = 'ADD_GAME';


export function setP1Name(name) {
    return {
        type: SET_NAME_P1,
        P1name: name
    }
}

export function setP2Name(name) {
    return {
        type: SET_NAME_P2,
        P2name: name
    }
}

export function setP1Score(score) {
    return {
        type: SET_SCORE_P1,
        P1score: score
    }
}

export function setP2Score(score) {
    return {
        type: SET_SCORE_P2,
        P2score: score
    }
}

export function setCPUScore(score) {
    return {
        type: SET_SCORE_CPU,
        CPUscore: score
    }
}

export function addRound(roundNb) {
    return {
        type: ADD_ROUND,
        round: roundNb
    }
}

export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }
}
