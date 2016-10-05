import React from 'react';
import { connect } from 'react-redux';
import { addQuest } from '../actions';
import { Button, Modal, FormControl } from 'react-bootstrap';
import keycode from 'keycode';

class AddQuestModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { inputText: '' };
    }

    onChange(e) {
        this.setState({ inputText: e.target.value });
    }

    submit() {
        const { closeModal, addQuest } = this.props;
        closeModal();
        addQuest(this.state.inputText);
    }

    onKeyDown(e) {
        if (e.keyCode === keycode('Enter')) {
            this.submit();
        }
    }

    render() {
        const { visible, closeModal } = this.props;
        const { inputText } = this.state;

        return (
            <Modal show={visible} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Quest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" value={inputText} autoFocus onChange={this.onChange.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal}>Cancel</Button>
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
            addQuest: title => dispatch(addQuest(title))
        };
    }
)(AddQuestModal);
