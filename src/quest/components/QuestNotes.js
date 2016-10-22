import React from 'react';
import { FormControl } from 'react-bootstrap';
import nl2br from 'react-nl2br';
import keycode from 'keycode';

export default function({ notes, editing, updateValue, cancel }) {

    function handleKeyPress(e)
    {
        if (e.keyCode === keycode('Esc')) {
            cancel();
        }
    }

    function onChange(e) {
        updateValue(e.target.value);
    }

    if (editing) {
        return (
            <FormControl componentClass="textarea" defaultValue={notes} autoFocus
                         onChange={onChange} onKeyDown={handleKeyPress}/>
        );
    } else {
        return (
            <div className="quest-notes">{nl2br(notes)}</div>
        );
    }
}
