import uuid from 'uuid';

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';
export const TOGGLE_ENTRY_COLLAPSED = 'TOGGLE_ENTRY_COLLAPSED';
export const ADD_ENTRY = 'ADD_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const toggleCollapsed = (id) => {
    return {
        type: TOGGLE_COLLAPSED,
        payload: id
    };
};

export const toggleEntryCollapsed = (id) => {
    return {
        type: TOGGLE_ENTRY_COLLAPSED,
        payload: id
    };
};

export const addEntry = (categoryId, parentId, title, text) => {
    return {
        type: ADD_ENTRY,
        payload: { categoryId, parentId, title, text, id: uuid.v4() }
    };
};

export const editEntry = (id, title, text) => {
    return {
        type: EDIT_ENTRY,
        payload: { id, title, text }
    }
};

export const deleteEntry = (id) => {
    return {
        type: DELETE_ENTRY,
        payload: id
    }
};
