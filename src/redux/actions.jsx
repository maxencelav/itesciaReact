export const SET_NAME_P1 = 'SET_NAME_P1';
export const SET_NAME_P2 = 'SET_NAME_P2';
export const ADD_GAME = 'ADD_GAME';


export function setNameP1(text) {
    return {
        type: SET_NAME_P1,
        name: text
    }
}

export function setNameP2(text) {
    return {
        type: SET_NAME_P2,
        name: text
    }
}

export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }

}
