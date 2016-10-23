import React from 'react';
import { connect } from 'react-redux';
import AddEntryButton from './AddEntryButton';
import CollapseButton from '../../common/components/CollapseButton';
import { toggleCollapsed } from '../actions';

const CategoryHeader = function({category, toggleCollapsed}) {

    return (
        <div className="category-header">
            <CollapseButton collapsed={category.get('collapsed')} toggleCollapsed={toggleCollapsed(category.get('id'))} />
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
