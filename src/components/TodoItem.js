/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

export default TodoItem;
