import React from 'react';

export default function({entry}) {

    return (
        <div className="entry">
            <div className="entry-header">
                {entry.get('title')}
            </div>
            <div className="entry-content">
                {entry.get('text')}
            </div>
        </div>
    );
}
