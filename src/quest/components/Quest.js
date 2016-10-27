import React from 'react';
import { connect } from 'react-redux';
import QuestHeader from './QuestHeader';
import TogglableTextarea from '../../common/components/TogglableTextarea';
import { editQuest } from '../actions';

class Quest extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { editing: false, title: props.quest.get('title'), notes: props.quest.get('notes') };
    }

    toggleEditMode() {
        const quest = this.props.quest;
        this.setState({ editing: !this.state.editing, title: quest.get('title'), notes: quest.get('notes') });
    }

    editTitle(text) {
        this.setState({ title: text });
    }

    editNotes(text) {
        this.setState({ notes: text });
    }

    saveChanges() {
        const { quest, editQuest } = this.props;
        editQuest(quest.get('id'), this.state.title, this.state.notes);
        this.setState({ editing: false });
    }

    render() {
        const { quest } = this.props;
        const { title, notes, editing } = this.state;


        return (
            <div className="quest">
                <QuestHeader quest={quest} title={title} editing={editing}/>

                {!quest.get('collapsed') && <TogglableTextarea className="quest-notes" value={notes} editing={editing}
                                                               update={this.editNotes.bind(this)}
                                                               cancel={this.toggleEditMode.bind(this)} />}
            </div>
        );
    }

    getChildContext() {
        return {
            toggleEditMode: this.toggleEditMode.bind(this),
            saveChanges: this.saveChanges.bind(this),
            editTitle: this.editTitle.bind(this),
        }
    }
}

Quest.childContextTypes = {
    toggleEditMode: React.PropTypes.func,
    saveChanges: React.PropTypes.func,
    editTitle: React.PropTypes.func,
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            editQuest: (id, title, notes) => dispatch(editQuest(id, title, notes))
        }
    }
)(Quest);
