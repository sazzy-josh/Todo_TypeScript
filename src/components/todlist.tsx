import * as React from 'react';

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
         <span key={todo.id} className="flex justify-between w-full" >
          <p>{todo.todoText}</p>
          <p className='rotate-45 cursor-pointer text-lg hover:text-red-400 hover:font-bold' onClick={() => handleDelete(todo.id)}>+</p>
         </span>
      )
     } )}
    </>
    
  );
};

export default TodoList;
