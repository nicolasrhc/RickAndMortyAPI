import React from 'react'
import FilterCharacter from '../containers/FilterCharacter'
import { VisibilityFilters } from '../actions'
import MoreCharacters from '../containers/MoreCharacters'

const Footer = () => (
    <div>
        <FilterCharacter filter={VisibilityFilters.SHOW_ALL}>Todos</FilterCharacter>
        <FilterCharacter filter={VisibilityFilters.SHOW_DEAD}>Muertos</FilterCharacter>
        <FilterCharacter filter={VisibilityFilters.SHOW_NO_GENDER}>Sin Genero</FilterCharacter>
        <MoreCharacters />
    </div>
)

export default Footer;