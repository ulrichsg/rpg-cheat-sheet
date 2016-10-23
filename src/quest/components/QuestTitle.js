import React from 'react';
import keycode from 'keycode';

const QuestTitle = function({title, editing}, {toggleEditMode, editTitle}) {

    function handleKeyPress(e) {
        if (e.keyCode === keycode('Esc')) {
            toggleEditMode();
        }
    }

    function onChange(e) {
        editTitle(e.target.value);
    }

    return (
        editing
            ? <input type="text" value={title} onChange={onChange} onKeyDown={handleKeyPress}/>
            : <span className="quest-title">{title}</span>
    );
};

QuestTitle.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editTitle: React.PropTypes.func.isRequired,
};

export default QuestTitle;
