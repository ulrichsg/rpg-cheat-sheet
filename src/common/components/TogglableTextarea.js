import React from 'react';
import nl2br from 'react-nl2br';
import keycode from 'keycode';
import { FormControl } from 'react-bootstrap';

export default function({ className, value, editing, update, cancel }) {

    function handleKeyPress(e)
    {
        if (cancel && e.keyCode === keycode('Esc')) {
            cancel();
        }
    }

    function onChange(event) {
        update(event.currentTarget.value);
    }

    return editing
        ? <FormControl className={className} componentClass="textarea" defaultValue={value} autoFocus
                       onChange={onChange} onKeyDown={handleKeyPress}/>
        : <div className={className}>{nl2br(value)}</div>
    ;
}
