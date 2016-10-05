import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Quest from './Quest';
import AddQuestModal from './AddQuestModal';

class QuestList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { showModal: false };
    }

    openModal() {
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { listTitle, quests, showAddButton } = this.props;
        const { showModal } = this.state;
        const openModal = this.openModal.bind(this);
        const closeModal = this.closeModal.bind(this);

        return (
            <div className="quests">
                <div className="list-header">
                    {listTitle}
                    {showAddButton && <Button bsClass="btn add-quest-button" bsStyle="primary" onClick={openModal}>Add Quest</Button>}
                    {showAddButton && <AddQuestModal visible={showModal} closeModal={closeModal} />}
                </div>
                {quests.size > 0
                    ? quests.map(quest => (<Quest quest={quest} key={quest.get('id')}/>))
                    : <p>No quests here.</p>
                }
            </div>
        );
    }
}

export const OpenQuests = connect(
    function mapStateToProps({quests}) {
        return {
            listTitle: 'Open Quests',
            quests: quests.filter(quest => !quest.get('done')),
            showAddButton: true
        }
    },
    function mapDispatchToProps() {
        return { };
    }
)(QuestList);

export const ClosedQuests = connect(
    function mapStateToProps({quests}) {
        return {
            listTitle: 'Closed Quests',
            quests: quests.filter(quest => quest.get('done')),
            showAddButton: false
        }
    },
    function mapDispatchToProps() {
        return { };
    }
)(QuestList);
