import uuid from 'uuid';

export const TOGGLE_DONE = 'TOGGLE_DONE';
export const TOGGLE_COLLAPSED = 'TOGGLE_QUEST_COLLAPSED';
export const ADD_QUEST= 'ADD_QUEST';
export const DELETE_QUEST = 'DELETE_QUEST';
export const EDIT_QUEST = 'EDIT_QUEST';

export const toggleDone = (id) => {
    return {
        type: TOGGLE_DONE,
        payload: id
    };
};

export const toggleCollapsed = (id) => {
    return {
        type: TOGGLE_COLLAPSED,
        payload: id
    };
};

export const addQuest = (title) => {
    return {
        type: ADD_QUEST,
        payload: {
            id: uuid.v4(),
            title: title
        }
    }
};

export const deleteQuest = (id) => {
    return {
        type: DELETE_QUEST,
        payload: id
    }
};

export const editQuest = (id, title, notes) => {
    return {
        type: EDIT_QUEST,
        payload: {
            id: id,
            title: title,
            notes: notes
        }
    }
};
