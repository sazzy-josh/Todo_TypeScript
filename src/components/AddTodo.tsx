import * as React from 'react';
import { BsPlus } from 'react-icons/bs'

interface AddtodoProps{
   handleAdd: (todotext: string) => void
}

const Addtodo: React.FunctionComponent<AddtodoProps> = ({handleAdd}) => {
    const [todotext, settodoText] = React.useState<string>("")

    const submitTodo = (e) => {
       e.preventDefault()
       handleAdd(todotext)
       settodoText("")
    }
    
  return (
    <form onSubmit={ submitTodo  }>
      <span className='relative flex items-center'>
        <input type="text" name="" id="" placeholder='✍🏾 Add item...' value={todotext} onChange={(e: React.ChangeEvent<HTMLInputElement>) => settodoText(e.target.value) } className='flex items-center outline-none placeholder:opacity-60 text-sm p-2'/>
         <BsPlus className='absolute right-2 cursor-pointer'/> 
       </span> 
    </form>
  );
};

export default Addtodo;
