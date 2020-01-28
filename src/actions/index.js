const axios = require('axios').default;

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS'
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'

export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' 
export const SET_NUMBER_CHARACTERS = 'SET_NUMBER_CHARACTERS'

let nextCharacterId

export const addCharacter = character => ({
    type: ADD_CHARACTER,
    character,
    id: nextCharacterId++
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DEAD: 'SHOW_DEAD',
    SHOW_NO_GENDER: 'SHOW_NO_GENDER'
}

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})


export const requestCharacters = () => ({
    type: REQUEST_CHARACTERS,
})

export const receiveCharacters = json => ({
    type: RECEIVE_CHARACTERS,
    characters: json.data.results.map(character1 => {
        let character = new Object()
        character.id = character1.id;
        character.name = character1.name;
        character.status = character1.status;
        character.species = character1.species;
        character.type = character1.type;
        character.gender = character1.gender;
        character.manually = false;
        character.image = character1.image
        return character
    }),
})

async function getCharacters(page) {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const removeCharacter = id => ({
    type: REMOVE_CHARACTER,
    id
})

export const setNumberOfCharacters = (nCharacters, maxPage) => ({
    type: SET_NUMBER_CHARACTERS,
    nCharacters,
    maxPage
})

export function fetchCharacters() {
    return (dispatch, getState) => {
        dispatch(requestCharacters())
        const { page } = getState().api;
        return getCharacters(page)
            .then(json => {
                dispatch(receiveCharacters(json))
            })
    }
}

export function getNumberOfCharacters() {
    return (dispatch, getState) => {
        const { page } = getState().api;
        return getCharacters(page)
            .then(json => {
                dispatch(setNumberOfCharacters(json.data.info.count, json.data.info.pages))
                nextCharacterId = getState().api.nCharacters + 1;
            })
    }
}

export function deleteCharacter(id) {
    return (dispatch) => {
        dispatch(removeCharacter(id))
    }
}