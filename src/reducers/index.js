import { combineReducers } from 'redux'
import characters from './characters'
import visibilityFilter from './visibilityFilter'
import api from './api'

export default combineReducers({
    characters,
    visibilityFilter,
    api
})