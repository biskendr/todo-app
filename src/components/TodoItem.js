import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../context/todoSlice'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    
    const deleteHandle = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <li className='todoListItem'>{todo.title}<button className='buttonRemove' onClick={deleteHandle}>Sil</button></li>
    )
}

export default TodoItem