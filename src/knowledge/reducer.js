import { Map } from 'immutable';
import { TOGGLE_COLLAPSED, TOGGLE_ENTRY_COLLAPSED, ADD_ENTRY, EDIT_ENTRY, DELETE_ENTRY, RENAME_CATEGORY } from './actions';

export default function(knowledge = Map({}), action) {
    const categories = knowledge.get('categories');
    const entries = knowledge.get('entries');

    switch (action.type) {

        case TOGGLE_COLLAPSED:
            return knowledge.update('categories', categories => categories.map(category => {
                if (category.get('id') === action.payload) {
                    return category.update('collapsed', collapsed => !collapsed);
                } else {
                    return category;
                }
            }));

        case TOGGLE_ENTRY_COLLAPSED:
            return knowledge.update('entries', entries => entries.map(entry => {
                if (entry.get('id') === action.payload) {
                    return entry.update('collapsed', collapsed => !collapsed);
                } else {
                    return entry;
                }
            }));

        case ADD_ENTRY:
            return addEntry(knowledge, action.payload);

        case EDIT_ENTRY:
            return editEntry(knowledge, action.payload);

        case DELETE_ENTRY:
            return knowledge.update('entries', entries => entries.filter(entry => entry.get('id') !== action.payload));

        case RENAME_CATEGORY:
            return renameCategory(knowledge, action.payload);

        default:
            return knowledge;
    }
}

function addEntry(knowledge, { categoryId, parentId, id, title, text }) {
    const entry = Map({
        id, categoryId, parentId, title, text,
        collapsed: false
    });
    return knowledge.update('entries', entries => entries.push(entry));
}

function editEntry(knowledge, { id, title, text }) {
    return knowledge.update('entries', entries => entries.map(entry => {
        if (entry.get('id') === id) {
            return entry
                .set('title', title)
                .set('text', text);
        } else {
            return entry;
        }
    }));
}

function renameCategory(knowledge, { id, title }) {
    return knowledge.update('categories', categories => categories.map(category => {
        if (category.get('id') === id) {
            return category.set('title', title);
        } else {
            return category;
        }
    }));
}
