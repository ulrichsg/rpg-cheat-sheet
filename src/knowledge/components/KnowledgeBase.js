import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';

class KnowledgeBase extends React.Component {

    render() {
        const { categories } = this.props;

        return (
            <div>
                <div className="list-header">Knowledge Base</div>
                { categories.size > 0
                    ? categories.map(category => <Category category={category} key={category.get('id')} />)
                    : 'No categories'
                }
            </div>
        );
    }
}

export default connect(
    function mapStateToProps({categories}) {
        return {
            categories: categories
        };
    },
    function mapDispatchToProps() {
        return { };
    }
)(KnowledgeBase);
