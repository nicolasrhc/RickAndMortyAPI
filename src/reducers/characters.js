import { ADD_CHARACTER, RECEIVE_CHARACTERS, REMOVE_CHARACTER } from "../actions";

const characters = (state = [], {type, character, id, characters}) => {
    switch(type) {
        case ADD_CHARACTER:
            return [
                ...state,
                {
                    id: id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    type: character.type,
                    gender: character.gender,
                    manually: true,
                    image: ''
                }
            ]
        case RECEIVE_CHARACTERS:
                return state.concat(characters)
        case REMOVE_CHARACTER:
            return state.filter(character => character.id !== id)
        default:
            return state
    }
}

export default characters;