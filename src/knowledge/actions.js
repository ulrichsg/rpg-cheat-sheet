import uuid from 'uuid';

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';
export const TOGGLE_ENTRY_COLLAPSED = 'TOGGLE_ENTRY_COLLAPSED';
export const RENAME_CATEGORY = 'RENAME_CATEGORY';
export const ADD_ENTRY = 'ADD_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';

export const SHOW_ENTRY_MODAL = 'SHOW_ENTRY_MODAL';
export const HIDE_ENTRY_MODAL = 'HIDE_ENTRY_MODAL';

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

export const renameCategory = (id, title) => {
    return {
        type: RENAME_CATEGORY,
        payload: { id, title }
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

export const showEntryModal = (categoryId, parentId) => {
    return {
        type: SHOW_ENTRY_MODAL,
        payload: { categoryId, parentId },
    };
};

export const hideEntryModal = () => {
    return {
        type: HIDE_ENTRY_MODAL,
        payload: null,
    };
};
