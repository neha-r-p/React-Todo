import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const TaskArray = [{
  task: 'slept',
  completed: false,
  id: 123,
},
{
  task: 'ate',
  completed: false,
  id: 456,
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: TaskArray
    }
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
