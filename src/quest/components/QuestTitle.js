import React from 'react';
import keycode from 'keycode';

export default function({title, editing, update, cancel}) {

    function handleKeyPress(e) {
        if (e.keyCode === keycode('Esc')) {
            cancel();
        }
    }

    function onChange(e) {
        update(e.target.value);
    }

    return (
        editing
            ? <input type="text" value={title} onChange={onChange} onKeyDown={handleKeyPress}/>
            : <span className="quest-title">{title}</span>
    );
}
