import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ToDoList from './Components/ToDoList';
import { TodosContext } from "./Context/TodosContext";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"]
    }
  });
  const initialTodos = [
    {
      id: uuidv4(),
      title: "",
      details: "",
      isCompleted: false
    },
    // {
    //   id: uuidv4(),
    //   title: "كتابة مجموعة من الأكواد",
    //   details: "كتابة مجموعة من الأكوادكتابة مجموعة من الأكواد",
    //   isCompleted: false
    // },
    // {
    //   id: uuidv4(),
    //   title: "كتابة مجموعة من الأكواد",
    //   details: "كتابة مجموعة من الأكوادكتابة مجموعة من الأكواد",
    //   isCompleted: false
    // },
    // {
    //   id: uuidv4(),
    //   title: "كتابة مجموعة من الأكواد",
    //   details: "كتابة مجموعة من الأكوادكتابة مجموعة من الأكواد",
    //   isCompleted: false
    // }
  ]
  const [todos, setTodos] = useState(initialTodos)
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TodosContext.Provider value={{ todos, setTodos }}>
          <ToDoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  )
}

export default App
