import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            task:''
        }
    }

    render(){
        return(
            <form>
                <input />
                <button>Add Todo</button>
                <button>Clear Completed</button>

            </form>
        )
    }

}

export default TodoForm