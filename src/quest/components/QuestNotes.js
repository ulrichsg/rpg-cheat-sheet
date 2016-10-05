import React from 'react';
import { connect } from 'react-redux';
import { editNotes } from '../actions';
import { FormControl } from 'react-bootstrap';
import nl2br from 'react-nl2br';
import keycode from 'keycode';

class QuestNotes extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { text: this.props.text, editing: false };
    }

    enterEditMode() {
        this.setState({editing: true});
    }

    updateInputValue(e) {
        this.setState({text: e.target.value});
    }

    submit() {
        const { id, editNotes } = this.props;
        editNotes(id, this.state.text);
        this.setState({editing: false});
    }

    handleKeyPress(e) {
        if (e.keyCode === keycode('Esc')) {
            this.setState({ text: this.props.text, editing: false });
        }
    }

    render() {
        const { text, editing } = this.state;

        if (editing) {
            return (
                <FormControl componentClass="textarea" defaultValue={text} autoFocus
                             onChange={this.updateInputValue.bind(this)}
                             onBlur={this.submit.bind(this)}
                             onKeyDown={this.handleKeyPress.bind(this)}
                />
            );
        } else {
            return (
                <div className="quest-notes" onClick={this.enterEditMode.bind(this)}>{nl2br(text)}</div>
            );
        }
    }
}

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            editNotes: (id, text) => dispatch(editNotes(id, text)),
        };
    }
)(QuestNotes);
