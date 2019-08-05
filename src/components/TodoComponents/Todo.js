import React from 'react';

const Todo = props => {
    console.log(props.task)

    return (
        <div className={`task${props.task.completed ? ' completed' : ''}`} >
            <p>{props.task.task}</p>
        </div>
    )
};

export default Todo;