import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();

    // habit의 이름은 inputRef 에 있는 value를 받아오고
    const name = this.inputRef.current.value;

    // 이름이 비어있지 않다면 props에 전달된 onAdd라는 함수에 이름을 전달함. // -> 이게 어떻게 동작하지?
    name && this.props.onAdd(name);

    // this.inputRef.current.value = "";
    this.formRef.current.reset(); // 위와 동일
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
