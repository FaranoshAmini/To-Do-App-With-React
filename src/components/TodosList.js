import React from 'react';
// eslint-disable-next-line no-unused-vars
import TodoItem from './TodoItem';

class TodoList extends React.component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
