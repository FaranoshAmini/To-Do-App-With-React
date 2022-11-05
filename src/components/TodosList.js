import React from 'react';
// eslint-disable-next-line no-unused-vars
import TodoItem from './TodoItem';

class TodoList extends React.component {
  render() {
    return (
      <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
    );
  }
}

export default TodoList;
