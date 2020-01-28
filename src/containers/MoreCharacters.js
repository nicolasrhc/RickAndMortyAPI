import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacters, getNumberOfCharacters } from '../actions'
import { useEffect } from 'react'

function mapStateToProps(state) {
    return {
        isDisable: state.api.page >= state.api.maxPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCharacters: () => dispatch(fetchCharacters()),
        getNumberOfCharacters: () => dispatch(getNumberOfCharacters())
    }
}

const style = {marginLeft: "4px"}

let MoreCharacters = (props) => {
    const {fetchCharacters, getNumberOfCharacters} = props

    useEffect(() => {
        getNumberOfCharacters()
        fetchCharacters()
    },[])

    return(
        <button
            onClick={ e => {
                e.preventDefault()
                fetchCharacters()
                }}
            style={style}
            disabled={props.isDisable}
        >
            Pedir Mas
        </button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreCharacters)