import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import questReducer from './quest/reducer';
import categoryReducer from './knowledge/reducer';
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
        entries: List([
            Map({
                id: 1337,
                title: 'New Phlan',
                text: 'The city this game is set in.',
                children: List([]),
                collapsed: false
            })
        ]),
        collapsed: false
    }),
    Map({
        id: 2,
        title: 'People',
        entries: List([]),
        collapsed: true
    })
]);

const store = createStore(combineReducers({
    quests: questReducer,
    categories: categoryReducer
}), {
    quests: dummyQuests,
    categories: startingCategories
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