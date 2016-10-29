import React from 'react';
import { connect } from 'react-redux';
import TogglableTextarea from '../../common/components/TogglableTextarea';
import Entry from './Entry';

const EntryContent = function({ text, editing, children}, { toggleEditMode, editText }) {

    return (
        <div>
            <TogglableTextarea className="entry-content" value={text} editing={editing}
                               update={editText} cancel={toggleEditMode} />
            { children.map(entry => <Entry entry={entry} key={entry.get('id')}/>)}
        </div>
    );
};

EntryContent.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editText: React.PropTypes.func.isRequired,
};

export default connect(
    function mapStateToProps({knowledge}, {entryId}) {
        return {
            children: knowledge.get('entries').filter(entry => entry.get('parentId') === entryId),
        };
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(EntryContent);
