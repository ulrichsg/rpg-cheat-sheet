import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import AddEntryButton from './AddEntryButton';
import { toggleCollapsed } from '../actions';

const CategoryHeader = function({category, toggleCollapsed}) {

    const collapsed = category.get('collapsed');

    return (
        <div className="category-header">
            <a className="collapse-button" href="#" onClick={toggleCollapsed(category.get('id'))}>
                <Glyphicon glyph={collapsed ? "triangle-right" : "triangle-bottom"}/>
            </a>
            <span className="category-title">{category.get('title')}</span>
            <AddEntryButton categoryId={category.get('id')} parentId={null} />
        </div>
    );
};

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleCollapsed: id => event => dispatch(toggleCollapsed(id))
        };
    }
)(CategoryHeader);
