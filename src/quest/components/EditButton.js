import React from 'react';
import GlyphedButton from '../../common/components/GlyphedButton';

const EditButton = function({ id, editing }, { toggleEditMode, saveChanges }) {

    const className = editing ? 'quest-save-button' : 'quest-edit-button';
    const tooltip = editing ? 'Save changes' : 'Edit quest';
    const onClick = editing ? saveChanges : toggleEditMode;

    return (
        <GlyphedButton id={"edit_" + id} className={className} glyph={editing ? "floppy-disk" : "pencil"} tooltip={tooltip} onClick={onClick}/>
    );
};

EditButton.contextTypes = {
    toggleEditMode: React.PropTypes.func.isRequired,
    saveChanges: React.PropTypes.func.isRequired,
};

export default EditButton;
