import React from 'react';
import QuestTitle from './QuestTitle';
import QuestNotes from './QuestNotes';

export default function({ quest }) {

    return (
        <div className="quest">
            <QuestTitle quest={quest}/>
            {!quest.get('collapsed') && <QuestNotes id={quest.get('id')} text={quest.get('notes')} />}
        </div>
    );
};
