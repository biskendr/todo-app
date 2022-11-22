import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
    return (
        <div className='app'>
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App