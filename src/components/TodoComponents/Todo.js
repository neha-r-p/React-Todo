import React from 'react';

const Todo = props => {
    console.log(props.task)

    return (
        <div className="task">
            <p>{props.task.task}</p>
        </div>
    )
};

export default Todo;