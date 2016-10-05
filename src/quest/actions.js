import uuid from 'uuid';

export const toggleDone = (id) => {
    return {
        type: 'TOGGLE_DONE',
        payload: id
    };
};

export const toggleCollapsed = (id) => {
    return {
        type: 'TOGGLE_QUEST_COLLAPSED',
        payload: id
    };
};

export const addQuest = (title) => {
    return {
        type: 'ADD_QUEST',
        payload: {
            id: uuid.v4(),
            title: title
        }
    }
};

export const deleteQuest = (id) => {
    return {
        type: 'DELETE_QUEST',
        payload: id
    }
};

export const editNotes = (id, text) => {
    return {
        type: 'EDIT_QUEST_NOTES',
        payload: {
            id: id,
            text: text
        }
    }
};
