import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const style = {marginLeft: "4px"}

let FilterCharacter = ({ dispatch, children, filter }) => {

    const dispatchFilter = e => {
        e.preventDefault()
        if(!filter.trim()){
            return
        }
        dispatch(setVisibilityFilter(
            filter))
    }

    return(
        <button
            onClick={dispatchFilter}
            style={style}
        >
            {children}
        </button>
    )
}

export default connect()(FilterCharacter)