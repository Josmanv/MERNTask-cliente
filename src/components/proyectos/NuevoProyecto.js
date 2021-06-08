import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    /*  Obtener el state del formulario
        Añadiendo un use context, podemos consumir el state sin necesidad de pasarlo por props a 
        lo largo de varios componentes*/

    const proyectosContext = useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectosContext;
 
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

    const onClikFormulario = () =>{
        // beneficios de crear esta función para el onclik es que podemos añadir mas funciones a la hora de hacer click
        mostrarFormulario();
    }

    return ( 
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={mostrarFormulario}
        >
        Nuevo Proyecto
        </button>

        { formulario
            ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onClikFormulario}
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
                )
                : null

        }

        </Fragment>
     );
}
 
export default NuevoProyecto;