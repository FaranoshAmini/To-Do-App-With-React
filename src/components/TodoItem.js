/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function TodoItem() {
  return (
    <li>
      <input
        type="checkbox"
        checked={this.props.todo.completed}
        onChange={() => console.log('clicked')}
      />
    </li>
  );
}

export default TodoItem;
