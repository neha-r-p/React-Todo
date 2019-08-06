import React from "react";
import "./Todo.css";

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
    console.log("clicked");
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <div className="form-div">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.changeHandler}
          />
          <button>Add Todo</button>
        </form>
        <button className="clear-btn" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
}

export default TodoForm;
