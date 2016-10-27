import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import AddEntryModal from './AddEntryModal';

export default class extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { modalShown: false };
    }

    showModal() {
        this.setState({modalShown: true});
    }

    hideModal() {
        this.setState({modalShown: false});
    }

    render() {
        const { categoryId, parentId } = this.props;
        const modalShown = this.state.modalShown;

        return (
            <Button bsStyle="success" bsSize="small" className="add-entry-button btn btn-success btn-sm" onClick={this.showModal.bind(this)}>
                <Glyphicon glyph="plus"/>
                <AddEntryModal visible={modalShown} categoryId={categoryId} parentId={parentId} closeModal={this.hideModal.bind(this)} />
            </Button>
        );
    }
}
