import uuid from 'uuid';

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';
export const ADD_ENTRY = 'ADD_ENTRY';

export const toggleCollapsed = (id) => {
    return {
        type: TOGGLE_COLLAPSED,
        payload: id
    };
};

export const addEntry = (categoryId, parentId, title, text) => {
    return {
        type: ADD_ENTRY,
        payload: { categoryId, parentId, title, text, id: uuid.v4() }
    };
};
