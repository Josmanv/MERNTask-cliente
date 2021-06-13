import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition,TransitionGroup} from 'react-transition-group';


 
const ListadoProyectos = () => {

    //Extraer proyectos del estate inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyectos cuando caraga el componente
    useEffect(()=>{
        obtenerProyectos();
    },[]);

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos</p>;


    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                key={proyecto.id}
                timeout={500}
                classNames="proyecto"
                >
                    <Proyecto
                        proyecto={proyecto}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;