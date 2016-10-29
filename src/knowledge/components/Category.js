import React from 'react';
import CategoryHeader from './CategoryHeader';
import Entry from './Entry';

export default function({category, entries}) {

    const children = entries.filter(entry => entry.get('parentId') === null);

    return (
        <div className="category">
            <CategoryHeader category={category} />
            { category.get('collapsed')
                ? ''
                : <div className="category-content">
                { children.size === 0
                    ? 'No entries in this category.'
                    : children.map(entry => <Entry entry={entry} key={entry.get('id')} />)
                }
            </div>
            }
        </div>
    );
}
