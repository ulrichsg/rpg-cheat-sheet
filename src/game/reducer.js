import { Map } from 'immutable';
import { ADD_GAME, SELECT_GAME } from './actions';

export default function(games = Map({}), action) {

    switch (action.type) {
        case ADD_GAME:
            return games.update('all', all => all.push(Map(action.payload)));
        case SELECT_GAME:
            return games.set('currentId', action.payload);
        default:
            return games;
    }
};
