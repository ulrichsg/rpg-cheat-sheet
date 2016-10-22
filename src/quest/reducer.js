import { List, Map } from 'immutable';

import { TOGGLE_DONE, TOGGLE_COLLAPSED, ADD_QUEST, DELETE_QUEST, EDIT_QUEST } from './actions';

export default function(quests = List([]), action) {
    switch (action.type) {
        case TOGGLE_DONE:
            return quests.map(quest => {
                if (quest.get('id') === action.payload) {
                    return quest.update('done', done => !done);
                } else {
                    return quest;
                }
            });
        case TOGGLE_COLLAPSED:
            return quests.map(quest => {
                if (quest.get('id') === action.payload) {
                    return quest.update('collapsed', collapsed => !collapsed);
                } else {
                    return quest;
                }
            });
        case ADD_QUEST:
            return quests.push(Map({
                id: action.payload.id,
                title: action.payload.title,
                notes: '',
                done: false,
                collapsed: false
            }));
        case DELETE_QUEST:
            return quests.filter((quest) => quest.get('id') !== action.payload);
        case EDIT_QUEST:
            return quests.map(quest => {
                if (quest.get('id') === action.payload.id) {
                    return quest
                        .set('title', action.payload.title)
                        .set('notes', action.payload.notes);
                } else {
                    return quest;
                }
            });
        default:
            return quests;
    }
}
