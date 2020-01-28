import { connect } from 'react-redux'
import { VisibilityFilters } from '../actions'
import Characters from '../components/Characters'

const getCharactersByCurrentFilter = (state) => {
    switch (state.filter) {
        case VisibilityFilters.SHOW_ALL:
            return state.characters;
        case VisibilityFilters.SHOW_DEAD:
            return state.characters.filter(character => character.status === "Dead")
        case Visibistate.lityFilters.SHOW_NO_GENDER:
            return state.characters.filter(character => character.gender === "Genderless")
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    characters: getCharactersByCurrentFilter(state)
})

export default connect(mapStateToProps)(Characters)