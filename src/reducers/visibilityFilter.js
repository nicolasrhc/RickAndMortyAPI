import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions'

const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, {type, filter}) => {
    switch (type) {
        case SET_VISIBILITY_FILTER:
            return filter
        default:
            return state
    }
}

export default VisibilityFilter;