import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props.todoList);

  return (
    <div>
      {props.todoList.map(task => (
        <Todo key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
