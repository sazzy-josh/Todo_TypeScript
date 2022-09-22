import * as React from 'react';
import Addtodo from './components/AddTodo';
import Header from './components/header';
import TodoList from './components/todlist';

interface todos{
  id: string,
  todoText: string
}

const App = () => {
 const [todos, setTodos] = React.useState<todos[]>([])

 const handleAdd = (todovalue: string) => {
    setTodos([...todos, {
      id: new Date().toString(),
      todoText: todovalue
    }])


 }

 const handeDelete = () => {

 }

  return (
    <div className='bg-slate-100 h-screen w-screen p-4'>
     <main className='flex flex-col items-center justify-center'>
      <Header />
      <Addtodo handleAdd={ handleAdd }/>
      <TodoList todos={todos}/>

     </main>
    </div>
  )
};

export default App;


 