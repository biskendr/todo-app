import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../context/todoSlice'
import { openModal } from '../context/modalSlice'

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const editHandle = () => {
        dispatch(openModal({
            data: todo
        }))
    }

    const deleteHandle = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <li className='todoListItem'>
            <form >
                <input type="checkbox" name='doneShow' className='done' checked={todo.done} onChange={e => { }} />
            </form>
            <p style={todo.done ? { textDecoration: 'line-through' } : {}}>{todo.title}</p>
            <button className='buttonEdit' onClick={editHandle}>Düzenle</button>
            <button className='buttonRemove' onClick={deleteHandle}>Sil</button>
        </li >
    )
}

export default TodoItem