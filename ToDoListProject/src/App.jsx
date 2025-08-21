import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import SnakeBar from './Components/SnakeBar';
import ToDoList from './Components/ToDoList';
import { ToastContext } from './Context/ToastContext';
import { TodosContext } from "./Context/TodosContext";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"]
    },
    palette: {
      primary: {
        main: "#CD5C08"
      }
    }
  });
  const initialTodos = []
  const [todos, setTodos] = useState(initialTodos)
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")

  function showHideToast(message) {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      setMessage(message)
    }, 2000)
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ showHideToast }}>
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <SnakeBar open={open} message={message} />
          <TodosContext.Provider value={{ todos, setTodos }}>
            <ToDoList />
          </TodosContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  )
}

export default App
