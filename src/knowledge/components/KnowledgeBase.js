import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';

class KnowledgeBase extends React.Component {

    entryFilter(category) {
        return entry => entry.get('categoryId') === category.get('id');
    };

    render() {
        const { categories, entries } = this.props;

        return (
            <div>
                <div className="list-header">Knowledge Base</div>
                { categories.size > 0
                    ? categories.map(category => <Category category={category}
                                                           entries={entries.filter(this.entryFilter(category))}
                                                           key={category.get('id')} />)
                    : 'No categories'
                }
            </div>
        );
    }
}

export default connect(
    function mapStateToProps({knowledge}) {
        return {
            categories: knowledge.get('categories'),
            entries: knowledge.get('entries'),
        };
    },
    function mapDispatchToProps() {
        return { };
    }
)(KnowledgeBase);
