import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import AddEntryModal from './AddEntryModal';

class KnowledgeBase extends React.Component {

    entryFilter(category) {
        return entry => entry.get('categoryId') === category.get('id');
    };

    render() {
        const { gameName, categories, entries } = this.props;

        return (
            <div>
                <div className="list-header">{gameName}</div>
                <AddEntryModal/>
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
    function mapStateToProps({games, knowledge}) {
        const gameId = games.get('currentId');
        return {
            gameName: games
                .get('all')
                .filter(game => game.get('id') === gameId)
                .get(0)
                .get('name'),
            categories: knowledge
                .get('categories')
                .filter(category => category.get('gameId') === gameId),
            entries: knowledge.get('entries'),
        };
    },
    function mapDispatchToProps() {
        return { };
    }
)(KnowledgeBase);
