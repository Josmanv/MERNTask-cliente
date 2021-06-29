import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;

    // Extraer agregrarTarea
    const tareasContext = useContext(tareaContext);
    const {
        errortarea, 
        tareaseleccionada, 
        agregarTarea, 
        validarTarea, 
        obtenerTareas, 
        editarTarea,
        limpiarTarea
    } = tareasContext;

    // Effect que detecta si hay un atarea seleccionada
    useEffect(()=>{
        if(tareaseleccionada !== null){
            setTarea(tareaseleccionada);
        }else{
            setTarea({
                nombre: ''
            });
        }
    },[tareaseleccionada]);

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

        // Reviar si es edición  nueva tarea
        if(tareaseleccionada === null){
            // Significa que es una tarea nueva
            // Añadir una neuva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }else{
            editarTarea(tarea);
            //Elimina tareaseleccionada del state
            limpiarTarea();
        }

        // Pasar la validación

       

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
                        value={ tareaseleccionada ? "Editar tarea" : "Añadir Tarea" }
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">La tarea no puede estar vacía</p> : null}
        </div>
    );
}
 
export default FormTarea;