import React from 'react';
import { connect } from 'react-redux';
import { addGame } from '../actions';
import { Button, Modal,FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import keycode from 'keycode';

class AddGameModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { name: '' };
        this.close = this.props.closeModal;
    }

    handleInput(e) {
        this.setState({ name: e.target.value });
    }

    submit() {
        this.props.addGame(this.state.name);
        this.setState({ name: '' });
        this.close();
    }

    handleKeyDown(e) {
        if (e.keyCode === keycode('Enter')) {
            this.submit();
        } else if (e.keyCode === keycode('Esc')) {
            this.close();
        }
    }

    render() {
        const { name } = this.state;

        return (
            <Modal show={this.props.visible} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>New game</ControlLabel>
                        <FormControl type="text" value={name} autoFocus
                                     onChange={this.handleInput.bind(this)}
                                     onKeyDown={this.handleKeyDown.bind(this)} />
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
            addGame: name => dispatch(addGame(name)),
        };
    }
)(AddGameModal);
