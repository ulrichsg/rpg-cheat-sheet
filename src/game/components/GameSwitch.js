import React from 'react';
import { connect } from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import AddGameModal from './AddGameModal';
import { selectGame } from '../actions';

class GameSwitch extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { modalShown: false };
        this.ADD_GAME = 'addGame';
    }

    handleSelect(eventKey) {
        if (eventKey === this.ADD_GAME) {
            this.setState({ modalShown: true });
        } else {
            this.props.selectGame(eventKey);
        }
    };

    hideModal() {
        this.setState({modalShown: false});
    }

    render() {
        const { currentGame, otherGames } = this.props;
        return (
            <NavDropdown title={currentGame.get('name')} id="selectGame" onSelect={this.handleSelect.bind(this)}>
                { otherGames.map(game => <MenuItem key={game.get('id')} eventKey={game.get('id')}>{game.get('name')}</MenuItem>)}
                <MenuItem eventKey={this.ADD_GAME}>Add game</MenuItem>
                <AddGameModal visible={this.state.modalShown} closeModal={this.hideModal.bind(this)}/>
            </NavDropdown>
        );
    }
};

export default connect(
    function mapStateToProps({ games }) {
        const allGames = games.get('all');
        return {
            currentGame: allGames.filter(game => game.get('id') === games.get('currentId')).get(0),
            otherGames: allGames.filter(game => game.get('id') !== games.get('currentId')),
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            selectGame: id => dispatch(selectGame(id)),
        };
    }
)(GameSwitch);
