import { List, Map } from 'immutable';
import { TOGGLE_COLLAPSED, ADD_ENTRY } from './actions';

export default function(categories = List([]), action) {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return categories.map(category => {
                if (category.get('id') === action.payload) {
                    return category.update('collapsed', collapsed => !collapsed);
                } else {
                    return category;
                }
            });
        case ADD_ENTRY:
            const { categoryId, parentId, id, title, text } = action.payload;
            const entry = Map({
                id, parentId, title, text,
                collapsed: false
            });
            return categories.map(category => {
                if (category.get('id') === categoryId) {
                    return category.push(entry);
                } else {
                    return category;
                }
            });

        default:
            return categories;
    }
}
