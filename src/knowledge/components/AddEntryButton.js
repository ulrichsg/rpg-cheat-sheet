import React from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { showEntryModal } from '../actions';

const AddEntryButton = ({ categoryId, parentId, showEntryModal }) => {

    const showModal = () => {
        showEntryModal(categoryId, parentId);
    };

    return (
        <Button bsStyle="success" bsSize="small" className="add-entry-button btn btn-success btn-sm" onClick={showModal}>
            <Glyphicon glyph="plus"/>
        </Button>
    );
};

export default connect(
    function mapStateToProps() {
        return {};
    },
    function mapDispatchToProps(dispatch) {
        return {
            showEntryModal: (categoryId, parentId) => dispatch(showEntryModal(categoryId, parentId)),
        };
    }
)(AddEntryButton);
