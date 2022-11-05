import React from 'react';

class TodoItem extends React.component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
