import React from 'react';
import Entry from './Entry';

export default function({category}) {

    const entries = category.get('entries');

    return (
        <div className="category-content">
            { entries.size === 0
                ? 'No entries in this category.'
                : entries.map(entry => <Entry entry={entry} key={entry.get('id')} />)
            }
        </div>
    );
};
