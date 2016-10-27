import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import questReducer from './quest/reducer';
import knowledgeReducer from './knowledge/reducer';
import { Grid, Row, Col } from 'react-bootstrap';


import Header from './Header';
import KnowledgeBase from './knowledge/components/KnowledgeBase';
import { OpenQuests, ClosedQuests } from './quest/components/QuestList';

import { List, Map } from 'immutable';

const dummyQuests = List([
    Map({
        id: 1,
        title: 'Clear out the slums',
        notes: 'Lorem ipsum dolor sit amet',
        done: true,
        collapsed: true
    }),
    Map({
        id: 2,
        title: 'Defeat Yarash',
        notes: 'This is f*king hard',
        done: false,
        collapsed: false
    })
]);

const startingCategories = List([
    Map({
        id: 1,
        title: 'Places',
        collapsed: false
    }),
    Map({
        id: 2,
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
        categoryId: 1,
        parentId: 1337,
        title: 'Valhingen Graveyard',
        text: 'Crawling with undead.',
        collapsed: true,
    }),
]);

const store = createStore(combineReducers({
    quests: questReducer,
    knowledge: knowledgeReducer
}), {
    quests: dummyQuests,
    knowledge: Map({
        categories: startingCategories,
        entries: startingEntries,
    })
});

render(
    <Provider store={store}>
        <div>
            <Header />
            <Grid>
                <Row className="show-grid">
                    <Col md={6}>
                        <KnowledgeBase />
                    </Col>
                    <Col md={6}>
                        <OpenQuests />
                        <ClosedQuests />
                    </Col>
                </Row>
            </Grid>
        </div>
    </Provider>,
    document.getElementById('app')
);
