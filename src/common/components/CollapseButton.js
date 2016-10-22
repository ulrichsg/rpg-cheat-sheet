import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default function({collapsed, toggleCollapsed}) {

    return (
        <a className="collapse-button" href="#" onClick={toggleCollapsed}>
            <Glyphicon glyph={collapsed ? "triangle-right" : "triangle-bottom"}/>
        </a>
    );
};
