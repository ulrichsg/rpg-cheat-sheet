import React from 'react';
import GlyphedButton from '../../common/components/GlyphedButton';

export default function({id, editing, onClick}) {

    const className = editing ? 'quest-save-button' : 'quest-edit-button';
    const tooltip = editing ? 'Save changes' : 'Edit quest';

    return (
        <GlyphedButton id={"edit_" + id} className={className} glyph={editing ? "floppy-disk" : "pencil"} tooltip={tooltip} onClick={onClick}/>
    );
};
