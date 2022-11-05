/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function TodoItem() {
  return (
    <li>
      <input type="checkbox" />
      {this.props.todo.title}
    </li>
  );
}

export default TodoItem;
