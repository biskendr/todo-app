import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const { todos } = useSelector(state => state.todo)    

    return (
        <ul className={todos[0] ? 'todoList' : ''}>
            {todos.map((todo, key) => <TodoItem key={key} todo={todo} />)}
        </ul>
    )
}

export default TodoList