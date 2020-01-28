import React, { useCallback, useState } from 'react'
import { addCharacter } from '../actions'
import { connect } from 'react-redux';

const initialState = {nombre: "", especie: "", tipo: "", estado: "Alive", genero: "Female"}
let Form = ({dispatch, status_options, gender_options}) => {
    const [personaje, setPersonaje] = useState(initialState);
    const memoizedSetNombre = useCallback((event) => setPersonaje({...personaje, nombre: event.target.value}));    
    const memoizedSetEspecie = useCallback((event) => setPersonaje({...personaje, especie: event.target.value}));
    const memoizedSetTipo = useCallback((event) => setPersonaje({...personaje, tipo: event.target.value}));
    const memoizedSetEstado = useCallback((event) => setPersonaje({...personaje, estado: event.target.value}));
    const memoizedSetGenero = useCallback((event) => setPersonaje({...personaje, genero: event.target.value}));      

    const formAddCharacter = e => {
        e.preventDefault()
                if(!personaje.nombre.trim() || !personaje.especie.trim() || !personaje.tipo.trim()){
                    return
                }
                dispatch(addCharacter({
                    name: personaje.nombre, 
                    status: personaje.estado, 
                    species: personaje.especie, 
                    type: personaje.tipo, 
                    gender: personaje.genero
                }))
                setPersonaje(initialState)
    }

    return (
        <div>
            <form
            onSubmit={formAddCharacter}>
                <div>
                    <ul>
                       <li>
                           <span>Nombre</span> <input onChange={memoizedSetNombre} value={personaje.nombre}  placeholder="Nombre"/>
                       </li>
                       <li>    
                           <span>Estado</span>
                           <select onChange={memoizedSetEstado} value={personaje.estado}>
                                {status_options.map(option =>
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                    )}
                            </select>
                        </li>
                        <li>
                            <span>Especie</span><input onChange={memoizedSetEspecie} value={personaje.especie} placeholder="Especie"/>
                        </li>
                        <li>
                            <span>Tipo</span><input onChange={memoizedSetTipo} value={personaje.tipo} placeholder="Tipo"/>
                        </li>
                        <li>
                            <span>Genero</span>
                            <select onChange={memoizedSetGenero} value={personaje.genero}>
                                {gender_options.map(option =>
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                    )}
                            </select>
                        </li>
                        <li>
                            <button type="submit">Guardar</button>
                        </li>    
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default connect()(Form)