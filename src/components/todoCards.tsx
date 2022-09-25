import * as React from 'react';
import { motion } from "framer-motion"


interface ICardsProps {
    todo: {
        id: string;
        todoText: string;
    },
    deleteTodo: (id: string) => void
    
}

const Cards: React.FunctionComponent<ICardsProps> = ({ deleteTodo , todo}) => {
  return (
    <span 
   
    className="flex justify-between w-full" >
    <p>{todo.todoText}</p>
    <p className='rotate-45 cursor-pointer text-lg hover:text-red-400 hover:font-bold' onClick={() => deleteTodo(todo.id)}>+</p>
   </span>

  )
};

export default Cards;
