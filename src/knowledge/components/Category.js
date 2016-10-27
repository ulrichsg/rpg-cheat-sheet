import React from 'react';
import { connect } from 'react-redux';
import CategoryHeader from './CategoryHeader';
import Entry from './Entry';

class Category extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    findChildren(entry) {
        return this.props.entries.filter(someEntry => someEntry.get('parentId') === entry.get('id'));
    }

    render() {
        const {category, entries} = this.props;
        const children = entries.filter(entry => entry.get('parentId') === null);

        return (
            <div className="category">
                <CategoryHeader category={category} />
                { category.get('collapsed')
                    ? ''
                    : <div className="category-content">
                    { children.size === 0
                        ? 'No entries in this category.'
                        : children.map(entry => <Entry entry={entry} children={this.findChildren(entry)} key={entry.get('id')} />)
                    }
                </div>
                }
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

        };
    }
)(Category);
