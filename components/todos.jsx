import React from 'react';
import { connect } from 'react-redux';

import NewTodo from './NewTodos';
import { addTodo, deleteTodo} from '../actions';

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={event => {
        if(event.keyCode == 13){
          dispatch(addTodo(event.target.value))
          event.target.value = '';
        }
      }} />

    {todos.map((todo, index) => <p key={index}>{todo}<button onClick={ event => { dispatch(deleteTodo(index)) }}>Delete</button></p>)}
  </div>
)

function mapStateToProps( todos ){
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos);
