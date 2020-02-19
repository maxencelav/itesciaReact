export const SET_NAMES = 'SET_NAMES';
export const ADD_GAME = 'ADD_GAME';


export function setNames(P1name, P2name) {
    return {
        type: SET_NAMES,
        names: [P1name, P2name]
    }
}


export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }

}
