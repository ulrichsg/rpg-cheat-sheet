import React from 'react';
import { connect } from 'react-redux';
import EntryTitle from './EntryTitle';
import CollapseButton from '../../common/components/CollapseButton';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import AddEntryButton from './AddEntryButton';
import { toggleEntryCollapsed } from '../actions';

const EntryHeader = function({ entry, title, editing, toggleCollapsed }) {

    const entryId = entry.get('id');
    const collapsed = entry.get('collapsed');

    return (
        <div className="entry-header">
            <CollapseButton collapsed={collapsed} toggleCollapsed={toggleCollapsed(entryId)}/>
            <EntryTitle title={title} editing={editing} />
            {/*<AddEntryButton categoryId={category.get('id')} parentId={entryId}/>*/}
            <DeleteButton id={entryId}/>
            <EditButton id={entryId} editing={editing}/>
        </div>
    );
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

