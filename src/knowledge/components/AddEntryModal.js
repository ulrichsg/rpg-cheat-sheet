import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions';
import { Button, Modal,FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import keycode from 'keycode';

class AddEntryModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { title: '', text: '' };
        this.close = this.props.closeModal;
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value });
    }

    onChangeText(e) {
        this.setState({ text: e.target.value });
    }

    submit() {
        const { addEntry, categoryId, parentId } = this.props;
        addEntry(categoryId, parentId, this.state.title, this.state.text);
        this.setState({ title: '', text: '' });
        this.close();
    }

    onKeyDown(e) {
        if (e.keyCode === keycode('Enter')) {
            this.submit();
        } else if (e.keyCode === keycode('Esc')) {
            this.reset();

        }
    }

    render() {
        const { title, text } = this.state;

        return (
            <Modal show={this.props.visible} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>New entry title</ControlLabel>
                        <FormControl type="text" value={title} autoFocus onChange={this.onChangeTitle.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>New entry description</ControlLabel>
                        <FormControl componentClass="textarea" value={text} onChange={this.onChangeText.bind(this)} />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Cancel</Button>
                    <Button onClick={this.submit.bind(this)} bsStyle="primary">Create</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addEntry: (categoryId, parentId, title, text) => dispatch(addEntry(categoryId, parentId, title, text))
        };
    }
)(AddEntryModal);
