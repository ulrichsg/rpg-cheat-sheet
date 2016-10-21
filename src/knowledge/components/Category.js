import React from 'react';
import CategoryHeader from './CategoryHeader';
import CategoryContent from './CategoryContent';

export default function({category}) {

    return (
        <div className="category">
            <CategoryHeader category={category} />
            { category.get('collapsed')
                ? ''
                : <CategoryContent category={category} />
            }
        </div>
    );
};
