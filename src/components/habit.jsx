import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
    this.setState({ count: this.props.habit.count - 1 });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
    console.log(this.props.habit);

    Array.splice(this.props.habit);
    // this.setState({  });
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-incerase"
          onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
