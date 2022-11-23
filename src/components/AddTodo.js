import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../context/todoSlice';

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const { todos } = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const submitHandle = (e) => {
        e.preventDefault()
        if (todo !== '') {
            dispatch(addTodo({
                id: todos.length + 1,
                title: todo,
                done: false,
            }))
        }
        setTodo('');
    }
    return (
        <div className='addTodo'>
            <form onSubmit={submitHandle}>
                <input value={todo} onChange={e => setTodo(e.target.value)} type="text" />
                <button className='buttonAdd' onClick={submitHandle} type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo