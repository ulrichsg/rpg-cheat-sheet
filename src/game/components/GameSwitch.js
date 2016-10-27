import React from 'react';
import { connect } from 'react-redux';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { selectGame } from '../actions';

const GameSwitch = ({ currentGame, otherGames, selectGame }) => {

    const ADD_GAME = 'addGame';

    const handleSelect = (eventKey) => {
        if (eventKey === ADD_GAME) {

        } else {
            selectGame(eventKey);
        }
    };

    return (
        <NavDropdown title={currentGame.get('name')} id="selectGame" onSelect={handleSelect}>
            { otherGames.map(game => <MenuItem key={game.get('id')} eventKey={game.get('id')}>{game.get('name')}</MenuItem>)}
            <MenuItem eventKey={ADD_GAME}>Add game</MenuItem>
        </NavDropdown>
    );
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
