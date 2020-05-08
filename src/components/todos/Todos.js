import React, { Component } from "react";
import AddTodo from "./AddTodo";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "Read something new" },
      { id: 2, content: "Do 3 situps" },
      { id: 3, content: "Smile :)" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  render() {
    const { todos } = this.state;
    const todoList = todos.length ? (
      todos.map((todo) => {
        return (
          <div className="collection-item todo-item" key={todo.id}>
            <input type="checkbox" />
            <span
              onClick={() => {
                this.deleteTodo(todo.id);
              }}
            >
              <h5>{todo.content}</h5>
            </span>
          </div>
        );
      })
    ) : (
      <div className="center white blue-text">
        A journey of a thousand miles starts with a single step
      </div>
    );
    return (
      <div className="container">
        <div className="card">
          <h1 className="center blue-text text-darken-4">Todos</h1>
        </div>
        <div className="card">{todoList}</div>
      </div>
    );
  }
}

export default Todos;
