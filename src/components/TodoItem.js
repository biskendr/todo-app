import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../context/todoSlice'
import { openModal } from '../context/modalSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const iconRemove = <FontAwesomeIcon icon={faXmark} />
const iconEdit = <FontAwesomeIcon icon={faPenToSquare} />

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const editHandle = () => {
        dispatch(openModal({
            data: todo
        }))
    }

    const editDone = (check) => {
        dispatch(editTodo({
            id: todo.id,
            title: todo.title,
            done: check,
        }))
    }

    const deleteHandle = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <li className="todoListItem" style={todo.done ? { opacity: 0.5 } : {}}>
            <form >
                <input type="checkbox" name='doneShow' className='done' checked={todo.done} onChange={e => { editDone(e.target.checked) }} />
            </form>
            <p style={todo.done ? { textDecoration: 'line-through' } : {}}>{todo.title}</p>
            <button className='buttonEdit' onClick={editHandle}>{iconEdit}</button>
            <button className='buttonRemove' onClick={deleteHandle}>{iconRemove}</button>
        </li >
    )
}

export default TodoItem