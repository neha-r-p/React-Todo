import React from 'react';

const Todo = props => {
    console.log(props.task)

    return (
        <div>
            <p>{props.task.task}</p>
        </div>
    )
};

export default Todo;