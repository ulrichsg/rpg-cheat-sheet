import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import AddEntryModal from './AddEntryModal';

export default class extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { modalShown: false };
    }

    handleClick() {
        const { editing, startEditing, submit } = this.props;
        if (editing) {
            submit();
        } else {
            startEditing();
        }
    }

    render() {
        const { editing } = this.props;

        return (
            <Button bsStyle="success" bsSize="small" className="add-entry-button btn btn-success btn-sm" onClick={this.handleClick.bind(this)}>
                <Glyphicon glyph={ editing ? "floppy-disk" : "pencil"}/>
            </Button>
        );
    }
}
