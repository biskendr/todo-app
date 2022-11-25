import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../context/modalSlice'
import { editTodo } from '../context/todoSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const iconRemove = <FontAwesomeIcon icon={faXmark} />
const iconSave = <FontAwesomeIcon icon={faPenToSquare} />

const Modal = () => {
    const data = useSelector(state => state.modal)
    const [todo, setTodo] = useState(data.data.title)
    const [done, setDone] = useState(data.data.done)

    const dispatch = useDispatch();

    const closeHandle = () => {
        dispatch(closeModal())
    }

    const submitHandle = (e) => {
        e.preventDefault()
        dispatch(editTodo({
            id: data.data.id,
            title: todo,
            done
        }))
        closeHandle()
    }

    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                <button className='buttonClose' onClick={closeHandle}>{iconRemove}</button>
                <p>{data.data.title}</p>
                <form className='modalForm' onSubmit={submitHandle}>
                    <input className='setTitle' value={todo} onChange={e => setTodo(e.target.value)} type="text"  maxLength="150"/>
                    <label>
                        <input type="checkbox" name='doneSet' className='doneSet' checked={done} onChange={e => setDone(e.target.checked)} />
                        Completed
                    </label>
                    <button className='buttonSave' onClick={submitHandle} type="submit">{iconSave} Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
