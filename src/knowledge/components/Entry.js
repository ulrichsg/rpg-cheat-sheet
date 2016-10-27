import React from 'react';
import { connect } from 'react-redux';
import { editEntry } from '../actions';
import EntryHeader from './EntryHeader';
import EntryContent from './EntryContent';

class Entry extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { editing: false, title: props.entry.get('title'), text: props.entry.get('text') };
    }

    toggleEditMode() {
        const entry = this.props.entry;
        this.setState({ editing: !this.state.editing, title: entry.get('title'), text: entry.get('text') });
    }

    editTitle(text) {
        this.setState({ title: text });
    }

    editText(text) {
        this.setState({ text: text });
    }

    saveChanges() {
        const { entry, editEntry } = this.props;
        editEntry(entry.get('id'), this.state.title, this.state.text);
        this.setState({ editing: false });
    }
    render() {
        const { entry, children } = this.props;
        const { title, text, editing } = this.state;

        return (
            <div className="entry">
                <EntryHeader entry={entry} title={title} editing={editing}/>
                { !entry.get('collapsed') && <EntryContent text={text} children={children} editing={editing}/> }
            </div>
        );
    }

    getChildContext() {
        return {
            toggleEditMode: this.toggleEditMode.bind(this),
            saveChanges: this.saveChanges.bind(this),
            editTitle: this.editTitle.bind(this),
            editText: this.editText.bind(this),
        }
    }
}

Entry.childContextTypes = {
    toggleEditMode: React.PropTypes.func,
    saveChanges: React.PropTypes.func,
    editTitle: React.PropTypes.func,
    editText: React.PropTypes.func,
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            editEntry: (id, title, text) => dispatch(editEntry(id, title, text)),
        };
    }
)(Entry);
