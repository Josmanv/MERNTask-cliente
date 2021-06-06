import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre:''
    });

    // Extraemos el nombre del proyecto con Destructuring
    const {nombre} = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto

        // Agregar al state

        // Reiniciar el form
    }

    return ( 
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
        >
        Nuevo Proyecto
        </button>

        <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input 
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                onChange={onChangeProyecto}
                value={nombre}
            />

            <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Añadir Proyecto"
            />
        
        </form>

        </Fragment>
     );
}
 
export default NuevoProyecto;