import * as React from 'react';
import Addtodo from './components/AddTodo';
import Error from './components/Error';
import Header from './components/header';
import TodoList from './components/todlist';

interface Todos{
  id: string,
  todoText: string
}

const App = () => {
 const [todos, setTodos] = React.useState<Todos[]>([])
 const [errorText, setErrorText] = React.useState<string>("")
 const [error, setError] = React.useState<boolean>(false)

 const handleAdd = (todovalue: string): void => {
    setTodos([...todos, {
      id: new Date().toString(),
      todoText: todovalue
    }])


 }

 const handeDelete = (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id ))
 }

  return (
    <div className='bg-slate-100 h-screen w-screen p-2 flex justify-center ' >
     <main className='flex flex-col items-center justify-center w-1/4 gap-y-2'>
      <Header />
      {error && <Error errorMessage={ errorText } />}
      <Addtodo handleAdd={ handleAdd } errorMessage ={setErrorText} handleError={setError}/>
      <TodoList todos={ todos } handleDelete={ handeDelete }/>
     </main>
    </div>
  )
};

export default App;


 