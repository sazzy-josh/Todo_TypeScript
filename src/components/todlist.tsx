import * as React from 'react';

interface ITodoListProps {
  todos: {
   id: string,
   todoText: string
  }[]

}

const TodoList: React.FunctionComponent<ITodoListProps> = ({todos}) => {
  return (
    <>
     {todos.map((todo) => {
      return (
         <span key={todo.id}>
          <p>{todo.todoText}</p>
         </span>
      )
     } )}
    </>
    
  );
};

export default TodoList;
