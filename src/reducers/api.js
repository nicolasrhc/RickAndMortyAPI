import { REQUEST_CHARACTERS, SET_NUMBER_CHARACTERS } from "../actions";

const api = (state = {
    isFetching: false,
    page: 0
    }, {type, nCharacters, maxPage}) => {
    switch(type) {
        case REQUEST_CHARACTERS:
            return {...state, isFetching: true, page: state.page + 1}
        case SET_NUMBER_CHARACTERS:
            return {...state, nCharacters, maxPage: maxPage}
            
        default:
            return state
    }
}

export default api;