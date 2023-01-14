import * as React from "react";
import Addtodo from "./components/AddTodo";
import Error from "./components/Error";
import Header from "./components/header";
import TodoList from "./components/todlist";

export interface Todos {
  id: string;
  todoText: string;
}

const App = () => {
  const mytodos = localStorage.getItem("Todos")
    ? JSON.parse(localStorage.getItem("Todos"))
    : []; //logic to store todos to local storage.

  const [todos, setTodos] = React.useState<Todos[]>(mytodos);
  const [errorText, setErrorText] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  React.useEffect(() => {
    const setMessage = setTimeout(() => {
      setError(false);
      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
    }, 3000);

    return () => {
      clearTimeout(setMessage);
      // useEffect will run only when the value of todos changes
      // if you pass a empty array,
      // like this - []
      // than clearTimeout will run once after component mounts.
      // this value changes (useEffect re-run)
    };
  }, [todos, setTodos]);

  const handleAdd = (todovalue: string): void => {
    setTodos([
      ...todos,
      {
        id: new Date().toString(),
        todoText: todovalue,
      },
    ]);
  };

  const handeDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-slate-100 h-screen w-screen p-2 flex justify-center">
      <main className="flex flex-col items-center justify-center md:w-1/4 gap-y-2">
        <Header />
        {error && <Error errorMessage={errorText} />}
        <Addtodo
          handleAdd={handleAdd}
          errorMessage={setErrorText}
          handleError={setError}
        />
        <TodoList
          todos={todos}
          handleDelete={handeDelete}
          setTodos={setTodos}
        />
      </main>
    </div>
  );
};

export default App;
