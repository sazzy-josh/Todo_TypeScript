import * as React from 'react';
import Cards from './todoCards';

interface ITodoListProps {
  todos: {
   id: string,
   todoText: string
  }[],
  handleDelete:  (id: string) => void

}

const TodoList: React.FunctionComponent<ITodoListProps> = ({todos , handleDelete}) => {
  return (
    <>
     {todos.map((todo) => {
      return (
         <Cards key={todo.id} todo={todo}  deleteTodo={handleDelete}/>
       )
     } 
    )}
    </>
    
  );
};

export default TodoList;
