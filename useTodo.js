import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
    return JSON.parse( localStorage.getItem('tareas') ) || [];
}

export const useTodo = () => {

    const [tareas, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify( tareas ));
    }, [ tareas ]);


    const agregar = (aTarea) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: aTarea
        }
        dispatch(action)
    }

    const borrar = (id) => {
        
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const hecho = (id) => {
        // console.log( id )
        dispatch({
            type: '[TODO] Cambia Done',
            payload: id
        })
    }

    return {
        tareas,
        agregar,
        borrar,
        hecho,
        tareasCount: tareas.length,
        tareasPend: tareas.filter(todo => !todo.done).length,
    }



}