export const SET_NAME_P1 = 'SET_NAME_P1';
export const SET_NAME_P2 = 'SET_NAME_P2';
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

export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }

}
