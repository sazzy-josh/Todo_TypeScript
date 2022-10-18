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

  const handleEdit = (id: string , todoTxt: string): void => {
    let editedTodo = [...todos]
    setTodos(editedTodo.map((todo) => todo.id === id ? {...todo ,todoText: todoTxt} : todo ))
  }

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
