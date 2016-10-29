import React from 'react';
import { connect } from 'react-redux';
import GlyphedButton from '../../common/components/GlyphedButton';
import { showEntryModal } from '../actions';

const AddChildEntryButton = ({ categoryId, parentId, showEntryModal }) => {

    const showModal = () => {
        showEntryModal(categoryId, parentId);
    };

    return (
        <GlyphedButton id={"add_subentry_" + parentId} className="add-entry-button" glyph="plus" tooltip="Add subentry" onClick={showModal}/>
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
)(AddChildEntryButton);
