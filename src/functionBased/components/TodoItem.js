/* eslint-disable import/no-duplicates */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { FaCalendar } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

function TodoItem({
  id, completed, title, handleChangeProps, deleteTodoProps, setUpdate,
}) {
  const [editing, setEditing] = useState(false);

  TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    handleChangeProps: PropTypes.func.isRequired,
    deleteTodoProps: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>
          <FaTrash />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
