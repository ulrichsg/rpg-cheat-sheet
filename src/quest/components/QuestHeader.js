import React from 'react';
import { connect } from 'react-redux';
import { toggleCollapsed } from '../actions';

import CollapseButton from '../../common/components/CollapseButton';
import TogglableInputField from '../../common/components/TogglableInputField';
import DoneButton from './ToggleDoneButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const QuestHeader = function({ quest, title, editing, toggleCollapsed }, { toggleEditMode, editTitle }) {

    const questId = quest.get('id');

    return (
        <div className="quest-header">
            <CollapseButton collapsed={quest.get('collapsed')} toggleCollapsed={toggleCollapsed(questId)}/>

            <TogglableInputField className="quest-title" value={title} editing={editing}
                                 update={editTitle} cancel={toggleEditMode} />

            <DoneButton id={questId} done={quest.get('done')}/>
            <DeleteButton id={questId}/>
            <EditButton id={questId} editing={editing}/>
        </div>
    );
};

QuestHeader.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editTitle: React.PropTypes.func.isRequired,
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
