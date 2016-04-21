import React from 'react';

const NewTodo = ({onChange}) => (
  <div>
    <h3>New Todo</h3>
    <input type='text' onKeyUp={onChange} />
  </div>
)

export default NewTodo;
