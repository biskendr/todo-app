import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../context/todoSlice';
import { nanoid } from 'nanoid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const iconPlus = <FontAwesomeIcon icon={faPlus} />


const AddTodo = () => {
    const [todo, setTodo] = useState("");    
    const dispatch = useDispatch();

    const submitHandle = (e) => {
        e.preventDefault()
        if (todo !== '') {
            dispatch(addTodo({
                id: nanoid(),
                title: todo,
                done: false,
            }))
        }
        setTodo('');
    }
    return (
        <div className='addTodo'>
            <form onSubmit={submitHandle}>
                <input placeholder="Add todo" value={todo} onChange={e => setTodo(e.target.value)} maxLength="150" type="text" />
                <button className='buttonAdd' onClick={submitHandle} type="submit">{iconPlus}</button>
            </form>
        </div>
    )
}

export default AddTodo
