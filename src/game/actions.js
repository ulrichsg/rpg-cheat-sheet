import uuid from 'uuid';

export const ADD_GAME = 'ADD_GAME';
export const SELECT_GAME = 'SELECT_GAME';

export const addGame = (name) => {
    return {
        type: ADD_GAME,
        payload: { name, id: uuid.v4() },
    };
};

export const selectGame = (id) => {
    return {
        type: SELECT_GAME,
        payload: id,
    }
};
