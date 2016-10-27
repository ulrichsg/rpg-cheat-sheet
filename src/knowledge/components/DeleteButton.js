import React from 'react';
import { connect } from 'react-redux';
import { deleteEntry } from '../actions';
import GlyphedButton from '../../common/components/GlyphedButton';

const DeleteButton = function({id, deleteEntry}) {

    return (
        <GlyphedButton id={"delete_" + id} className="quest-delete-button" glyph="trash" tooltip="Delete entry" onClick={deleteEntry(id)}/>
    );
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            deleteEntry: id => event => dispatch(deleteEntry(id)),
        };
    }
)(DeleteButton);
