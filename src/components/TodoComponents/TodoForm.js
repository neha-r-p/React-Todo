import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
      console.log('clicked')
      event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.submitHandler} >
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.changeHandler}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
