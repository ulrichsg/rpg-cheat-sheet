import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './game/reducer';
import questReducer from './quest/reducer';
import knowledgeReducer from './knowledge/reducer';
import Application from './Application';

import { List, Map } from 'immutable';

const dummyGames = List([
    Map({
        id: 1,
        name: 'Pool of Radiance',
    }),
    Map({
        id: 2,
        name: 'Curse of the Azure Bonds',
    })
]);

const dummyQuests = List([
    Map({
        id: 1,
        gameId: 1,
        title: 'Clear out the slums',
        notes: 'Lorem ipsum dolor sit amet',
        done: true,
        collapsed: true
    }),
    Map({
        id: 2,
        gameId: 1,
        title: 'Defeat Yarash',
        notes: 'This is f*king hard',
        done: false,
        collapsed: false
    })
]);

const startingCategories = List([
    Map({
        id: 1,
        gameId: 1,
        title: 'Places',
        collapsed: false
    }),
    Map({
        id: 2,
        gameId: 1,
        title: 'People',
        collapsed: true
    })
]);

const startingEntries = List([
    Map({
        id: 1337,
        categoryId: 1,
        parentId: null,
        title: 'New Phlan',
        text: 'The city this game is set in.',
        collapsed: false
    }),
    Map({
        id: 1338,
        categoryId: null,
        parentId: 1337,
        title: 'Valhingen Graveyard',
        text: 'Crawling with undead.',
        collapsed: true,
    }),
]);

const store = createStore(combineReducers({
    games: gameReducer,
    quests: questReducer,
    knowledge: knowledgeReducer
}), {
    games: Map({
        currentId: 1,
        all: dummyGames,
    }),
    quests: dummyQuests,
    knowledge: Map({
        categories: startingCategories,
        entries: startingEntries,
        addEntryModalState: Map({
            visible: false,
            categoryId: null,
            parentId: null
        }),
    }),
});

render(
    <Provider store={store}>
        <Application/>
    </Provider>,
    document.getElementById('app')
);
