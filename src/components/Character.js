import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteCharacter } from '../actions'

function mapDispatchToProps(dispatch) {
    return {
        deleteCharacter: (id) => dispatch(deleteCharacter(id))
    }
}

const Character = ({id, name, status, species, type, gender, manually, image, deleteCharacter}) => (
    <div className="Usuario">
        <ul className="Info">
            <li>Id: {id}</li>
            <li>Nombre: {name}</li>
            <li>Estado: {status}</li>
            <li>Especie: {species}</li>
            <li>Tipo: {type}</li>
            <li>Genero: {gender}</li>
            <button disabled={!manually} 
                onClick={e => {
                    e.preventDefault()
                    deleteCharacter(id)
                }}
            >
                Borrar
            </button>
        </ul>
        {!manually &&
            <img className="Imagen" src={image} alt={name}/>
        }
    </div>
)

Character.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    manually: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(Character)