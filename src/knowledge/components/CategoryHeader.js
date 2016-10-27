import React from 'react';
import { connect } from 'react-redux';
import TogglableInputField from '../../common/components/TogglableInputField';
import AddEntryButton from './AddEntryButton';
import CollapseButton from '../../common/components/CollapseButton';
import RenameCategoryButton from './RenameCategoryButton';
import { toggleCollapsed, renameCategory } from '../actions';

class CategoryHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: props.category.get('title'),
            editing: false,
        };
    }

    toggleEditMode() {
        this.setState({editing: !this.state.editing });
    }

    update(text) {
        this.setState({ title: text });
    }

    submit() {
        const { category, renameCategory } = this.props;
        renameCategory(category.get('id'), this.state.title);
        this.setState({ editing: false });
    }

    cancel() {
        this.setState({
            title: this.props.category.get('title'),
            editing: false
        });
    }

    render() {
        const {category, toggleCollapsed} = this.props;
        const { title, editing } = this.state;

        return (
            <div className="category-header">
                <CollapseButton collapsed={category.get('collapsed')} toggleCollapsed={toggleCollapsed(category.get('id'))} />
                <TogglableInputField className="category-title" value={title} editing={editing}
                               update={this.update.bind(this)}
                               submit={this.submit.bind(this)}
                               cancel={this.cancel.bind(this)} />
                <AddEntryButton categoryId={category.get('id')} parentId={null} />
                <RenameCategoryButton editing={editing}
                                      startEditing={this.toggleEditMode.bind(this)}
                                      submit={this.submit.bind(this)} />
            </div>
        );
    }
}

export default connect(
    function mapStateToProps() {
        return { };
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleCollapsed: id => event => dispatch(toggleCollapsed(id)),
            renameCategory: (id, title) => dispatch(renameCategory(id, title)),
        };
    }
)(CategoryHeader);
