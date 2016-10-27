import React from 'react';
import keycode from 'keycode';

const EntryTitle = function({title, editing}, {toggleEditMode, editTitle}) {

    function handleKeyPress(e) {
        if (e.keyCode === keycode('Esc')) {
            toggleEditMode();
        }
    }

    function onChange(e) {
        editTitle(e.target.value);
    }

    return editing
        ? <input type="text" value={title} onChange={onChange} onKeyDown={handleKeyPress}/>
        : <span className="entry-title">{title}</span>
    ;
};

EntryTitle.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editTitle: React.PropTypes.func.isRequired,
};

export default EntryTitle;
