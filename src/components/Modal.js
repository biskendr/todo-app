import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../context/modalSlice'
import { editTodo } from '../context/todoSlice'

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
                <p>{data.data.title}</p>
                <form onSubmit={submitHandle}>
                    <input value={todo} onChange={e => setTodo(e.target.value)} type="text" />
                    <label>
                        <input type="checkbox" name='doneSet' className='done' checked={done} onChange={e => setDone(e.target.checked)} />
                        Tamamlandı
                    </label>
                    <button className='buttonSave' onClick={submitHandle} type="submit">Kaydet</button>
                </form>
                <button className='buttonClose' onClick={closeHandle}>Kapat</button>
            </div>
        </div>
    )
}

export default Modal