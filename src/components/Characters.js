import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'
import { VisibilityFilters } from '../actions';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const getCharacters = (state) => state.characters
const getVisibilityFIlter = (state) => state.visibilityFilter

const memoizedGetCharactersByCurrentFilter = createSelector(
    [getCharacters, getVisibilityFIlter],
    (characters, visibilityFilter) => {
        switch (visibilityFilter) {
            case VisibilityFilters.SHOW_ALL:
                return characters;
            case VisibilityFilters.SHOW_DEAD:
                return characters.filter(character => character.status === "Dead")
            case VisibilityFilters.SHOW_NO_GENDER:
                return characters.filter(character => character.gender === "Genderless")
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)

const mapStateToProps = state => {
    return { 
        characters: memoizedGetCharactersByCurrentFilter(state)
    }
}

const Characters = ({characters}) => {
    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id}>
                    <Character id={character.id} 
                        name={character.name} 
                        status={character.status} 
                        species={character.species} 
                        type={character.type} 
                        gender={character.gender}
                        manually={character.manually}
                        image={character.image}
                    />
                </li>
            ))}
        </ul>
    )
}


Characters.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired,
            manually: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

export default connect(mapStateToProps)(Characters);