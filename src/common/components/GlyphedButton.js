import React from 'react';
import { Tooltip, OverlayTrigger, Glyphicon } from 'react-bootstrap';

export default function({id, className, glyph, tooltip, onClick}) {

    const tooltipElement = (
        <Tooltip id={id}>{tooltip}</Tooltip>
    );

    return (
        <OverlayTrigger placement="top" overlay={tooltipElement}>
            <a href="#" className={className} onClick={onClick}><Glyphicon glyph={glyph}/></a>
        </OverlayTrigger>
    );
};
