import React from 'react';
import keycode from 'keycode';

export default function({ className, value, editing, update, submit, cancel }) {

    const handleInput = (event) => {
        update(event.currentTarget.value);
    };

    const handleKeyPress = (event) => {
        if (submit && event.keyCode === keycode('Enter')) {
            submit();
        } else if (cancel && event.keyCode === keycode('Esc')) {
            cancel();
        }
    };

    return editing
        ? <input type="text" value={value} onChange={handleInput} onKeyDown={handleKeyPress}/>
        : <span className={className}>{value}</span>;
}
