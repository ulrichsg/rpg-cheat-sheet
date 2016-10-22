import React from 'react';
import { connect } from 'react-redux';
import { toggleDone } from '../actions';
import GlyphedButton from '../../common/components/GlyphedButton';

const ToggleDoneButton = function({id, done, toggleDone}) {

    const className = done ? 'quest-undone-button' : 'quest-done-button';
    const tooltip = "Mark quest as " + (done ? "not " : "") + "done";

    return (
        <GlyphedButton id={"done_" + id} className={className} glyph={done ? "remove" : "ok"} tooltip={tooltip} onClick={toggleDone(id)}/>
    );
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleDone: id => event => dispatch(toggleDone(id)),
        };
    }
)(ToggleDoneButton);
