import React from 'react';
import { FormControl } from 'react-bootstrap';
import nl2br from 'react-nl2br';
import keycode from 'keycode';

const QuestNotes = function({ notes, editing }, { toggleEditMode, editNotes }) {

    function handleKeyPress(e)
    {
        if (e.keyCode === keycode('Esc')) {
            toggleEditMode();
        }
    }

    function onChange(e) {
        editNotes(e.target.value);
    }

    return editing
        ? <FormControl componentClass="textarea" defaultValue={notes} autoFocus onChange={onChange} onKeyDown={handleKeyPress}/>
        : <div className="quest-notes">{nl2br(notes)}</div>
    ;
};

QuestNotes.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editNotes: React.PropTypes.func.isRequired,
};

export default QuestNotes;
