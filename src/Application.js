import React from 'react';
import { connect }  from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import KnowledgeBase from './knowledge/components/KnowledgeBase';
import QuestList from './quest/components/QuestList';

const Application = ({ openQuests, closedQuests }) => {

    return (
        <div>
            <Header/>
            <Grid>
                <Row className="show-grid">
                    <Col md={6}>
                        <KnowledgeBase/>
                    </Col>
                    <Col md={6}>
                        <QuestList listTitle="Open Quests" quests={openQuests} showAddButton={true} />
                        <QuestList listTitle="Closed Quests" quests={closedQuests} showAddButton={false} />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default connect(
    function mapStateToProps({ games, quests }) {
        const gameId = games.get('currentId');
        return {
            openQuests: quests.filter(quest => quest.get('gameId') === gameId && !quest.get('done')),
            closedQuests: quests.filter(quest => quest.get('gameId') === gameId && quest.get('done')),
        };
    },
    function mapDispatchToProps(dispatch) { return {}; }
)(Application);
