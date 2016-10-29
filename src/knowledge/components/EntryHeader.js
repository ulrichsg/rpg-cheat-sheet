import React from 'react';
import { connect } from 'react-redux';
import CollapseButton from '../../common/components/CollapseButton';
import TogglableInputField from '../../common/components/TogglableInputField';
import AddChildEntryButton from './AddChildEntryButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { toggleEntryCollapsed } from '../actions';

const EntryHeader = function({ entry, title, editing, toggleCollapsed }, { toggleEditMode, editTitle }) {

    const entryId = entry.get('id');
    const collapsed = entry.get('collapsed');

    return (
        <div className="entry-header">
            <CollapseButton collapsed={collapsed} toggleCollapsed={toggleCollapsed(entryId)}/>
            <TogglableInputField className="entry-title" value={title} editing={editing}
                                 update={editTitle} cancel={toggleEditMode} />
            <AddChildEntryButton categoryId={null} parentId={entryId}/>
            <DeleteButton id={entryId}/>
            <EditButton id={entryId} editing={editing}/>
        </div>
    );
};

EntryHeader.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editTitle: React.PropTypes.func.isRequired,
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleCollapsed: id => event => dispatch(toggleEntryCollapsed(id)),
        };
    }
)(EntryHeader);

