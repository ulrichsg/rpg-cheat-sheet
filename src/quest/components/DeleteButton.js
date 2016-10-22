import React from 'react';
import { connect } from 'react-redux';
import { deleteQuest } from '../actions';
import GlyphedButton from '../../common/components/GlyphedButton';

const DeleteButton = function({id, deleteQuest}) {

    return (
        <GlyphedButton id={"delete_" + id} className="quest-delete-button" glyph="trash" tooltip="Delete quest" onClick={deleteQuest(id)}/>
    );
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            deleteQuest: id => event => dispatch(deleteQuest(id)),
        };
    }
)(DeleteButton);
