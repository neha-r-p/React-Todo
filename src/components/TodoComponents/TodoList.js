import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.todoList)

    return (
        <div>
            I exist
        {props.todoList.map(task => (
            <Todo />
        ))
        }
        </div>
    )
}

export default TodoList;