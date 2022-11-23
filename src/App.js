import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './components/AddTodo'
import Modal from './components/Modal'
import TodoList from './components/TodoList'
import {} from './context/modalSlice'

const App = () => {
    const {open: isModalOpen } = useSelector(state => state.modal)
    return (
        <div className='app'>
            {isModalOpen && <Modal/>}
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App