import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // Extraer agregrarTarea
    const tareasContext = useContext(tareaContext);
    const {errortarea, agregarTarea, validarTarea, obtenerTareas} = tareasContext;

    const [tarea, setTarea] = useState({
        nombre: ''
    });

    // Extraer el nombre del eproyecto
    const {nombre} = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitTarea = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        // Pasar la validación

        // Añadir una neuva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        // Obtener todas las tareas del proyecto
        obtenerTareas(tarea.proyectoId);

        // Reiniciar el form
        setTarea({
            nombre: ''
        });
      
    }


    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmitTarea}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value="Añadir Tarea"
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">La tarea no puede estar vacía</p> : null}
        </div>
    );
}
 
export default FormTarea;