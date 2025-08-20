import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';
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
