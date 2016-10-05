import React from 'react';
import { connect } from 'react-redux';
import { toggleDone, toggleCollapsed, deleteQuest } from '../actions';

import { Tooltip, OverlayTrigger, Glyphicon } from 'react-bootstrap';

class QuestTitle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { text: this.props.text, editing: false };
    }

    render() {
        const { quest, toggleDone, toggleCollapsed, deleteQuest } = this.props;

        const done = quest.get('done');
        const collapsed = quest.get('collapsed');

        const doneButtonClass = done ? 'quest-undone-button' : 'quest-done-button';

        const doneTooltip = (
            <Tooltip id={"done_" + quest.get('id')}>Mark quest as {done ? "not " : ""}done</Tooltip>
        );
        const deleteTooltip = (
            <Tooltip id={"delete_" + quest.get('id')}>Delete quest</Tooltip>
        );

        return (
            <div className="quest-header">
                <a className="quest-collapse-button" href="#" onClick={toggleCollapsed(quest.get('id'))}>
                    <Glyphicon glyph={collapsed ? "triangle-right" : "triangle-bottom"}/>
                </a>
                <span className="quest-title">{quest.get('title')}</span>
                <OverlayTrigger placement="top" overlay={doneTooltip}>
                    <a href="#" className={doneButtonClass} onClick={toggleDone(quest.get('id'))}><Glyphicon glyph={done ? "remove" : "ok"}/></a>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={deleteTooltip}>
                    <a href="#" className="quest-delete-button" onClick={deleteQuest(quest.get('id'))}><Glyphicon glyph="trash"/></a>
                </OverlayTrigger>
            </div>
        );
    }
}

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleDone: id => event => dispatch(toggleDone(id)),
            toggleCollapsed: id => event => dispatch(toggleCollapsed(id)),
            deleteQuest: id => event => dispatch(deleteQuest(id)),
        };
    }
)(QuestTitle);
