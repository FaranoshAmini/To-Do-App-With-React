import React from 'react';

class TodoList extends React.component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          // eslint-disable-next-line react/jsx-key
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
