import * as React from 'react';
import { MdEdit } from 'react-icons/md'



interface TodoInfo {
  id: string;
  todoText: string;
}
interface ICardsProps {
    todo: TodoInfo,
    deleteTodo: (id: string) => void,
    handleEdit: (id: string, todoTxt: string) => void
}

const Cards: React.FunctionComponent<ICardsProps> = ({ deleteTodo , todo , handleEdit}) => {
  const [editText, seteditText] = React.useState<string>(todo.todoText)
  const [edit, setEdit] = React.useState<Boolean>(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleEdit(todo.id , editText)
    setEdit(false)
  }

  return (
    <>
    {
      !edit ? (
        <span className="flex justify-between w-full border rounded-md bg-slate-300 p-2 shadow-sm" >
         <p>{todo.todoText}</p>
        <span className='flex justify-center items-center gap-x-2'>
         <MdEdit className='text-xs cursor-pointer' onClick={() => setEdit(true)} />
         <p className='rotate-45 cursor-pointer text-lg hover:text-red-400 hover:font-bold' onClick={() => deleteTodo(todo.id)}>+</p>
        </span>
      </span>
      ) : (
        <form onSubmit={handleSubmit} className='w-full'>
          <input type="text" className='w-full outline-none p-1' autoFocus onChange={(e: React.ChangeEvent<HTMLInputElement>) => seteditText(e.target.value)} value={editText} />
        </form>
      )
    }   
    </>
  )
};

export default Cards;
