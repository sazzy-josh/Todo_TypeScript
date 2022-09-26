import { text } from 'node:stream/consumers';
import * as React from 'react';
import { Todos } from '../App';
import Cards from './todoCards';


interface ITodoListProps {
  todos: {
   id: string,
   todoText: string
  }[],
  handleDelete:  (id: string) => void
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({todos , handleDelete , setTodos}) => {

  const handleEdit = (id: string , todoTxt: string) => {
    const existingItem = todos.find((todo) => todo.id === id)
    setTodos([...todos, {
      id:existingItem.id, todoText: todoTxt
    }]
  )}
  
  return (
    <>
     {todos && todos.map((todo) => {
      return (
         <Cards key={todo.id} todo={todo} deleteTodo={ handleDelete } handleEdit={ handleEdit }  />
       )
     } 
    )}
    </> 
  );
};

export default TodoList;
