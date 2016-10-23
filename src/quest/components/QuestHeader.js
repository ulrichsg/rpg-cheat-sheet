import React from 'react';
import { connect } from 'react-redux';
import { toggleCollapsed } from '../actions';

import QuestTitle from './QuestTitle';
import CollapseButton from '../../common/components/CollapseButton';
import DoneButton from './ToggleDoneButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const QuestHeader = function({ quest, title, editing, toggleCollapsed }) {

    const questId = quest.get('id');

    return (
        <div className="quest-header">
            <CollapseButton collapsed={quest.get('collapsed')} toggleCollapsed={toggleCollapsed(questId)}/>

            <QuestTitle title={title} editing={editing}/>

            <DoneButton id={questId} done={quest.get('done')}/>
            <DeleteButton id={questId}/>
            <EditButton id={questId} editing={editing}/>
        </div>
    );
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleCollapsed: id => event => dispatch(toggleCollapsed(id)),
        };
    }
)(QuestHeader);
