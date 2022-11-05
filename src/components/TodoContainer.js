import React from 'react';
// eslint-disable-next-line no-unused-vars
import Header from './Header';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
  handleChange = () => {
    console.log('clicked');
  };

  render() {
    return (
      <div>
        <h1>Hello from create React App</h1>
        <p>I am in a React Component!</p>
      </div>
    );
  }
}
export default TodoContainer;
