import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) {
  TodosList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleChangeProps: PropTypes.func.isRequired,
    deleteTodoProps: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

export default TodosList;
