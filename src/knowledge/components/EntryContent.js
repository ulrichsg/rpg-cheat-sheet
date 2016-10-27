import React from 'react';
import { Map } from 'immutable';
import nl2br from 'react-nl2br';
import keycode from 'keycode';
import { FormControl } from 'react-bootstrap';
import Entry from './Entry';

const EntryContent = function({ text, editing, children }, { toggleEditMode, editText }) {

    function handleKeyPress(e)
    {
        if (e.keyCode === keycode('Esc')) {
            toggleEditMode();
        }
    }

    function onChange(e) {
        editText(e.target.value);
    }

    return (
        <div>
            { editing
                ? <FormControl componentClass="textarea" defaultValue={text} autoFocus onChange={onChange} onKeyDown={handleKeyPress}/>
                : <div className="entry-content">{nl2br(text)}</div> }
            { children.map(entry => <Entry entry={entry} children={Map({})} key={entry.get('id')}/>)}
        </div>
    );
};

EntryContent.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    editText: React.PropTypes.func.isRequired,
};

export default EntryContent;
