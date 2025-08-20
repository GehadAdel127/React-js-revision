import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from '../Context/TodosContext';
import ToDo from './ToDo';



const ToDoList = () => {
    const { todos, setTodos } = useContext(TodosContext)
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [displayTodosType, setDisplayTodosType] = useState("all")

    const completedTodos = todos.filter((t) => {
        return t.isCompleted
    })

    const unCompletedTodos = todos.filter((t) => {
        return !t.isCompleted
    })
    function changeTodosType(e) {
        return setDisplayTodosType(e.target.value)
    }

    let todosRendered = todos
    if (displayTodosType == "all") {
        todosRendered = todos
    } else if (displayTodosType == "completed") {
        todosRendered = completedTodos
    } else if (displayTodosType == "unCompleted") {
        todosRendered = unCompletedTodos
    } else {
        todosRendered = todos
    }
    const todoJsx = todosRendered.map((t) => {
        return <ToDo key={t.id} todo={t} />
    })
    function handleAddClick() {
        const newTodo = {
            id: uuidv4(),
            title: title,
            details: details,
            isCompleted: false
        }
        const updatedTodos = [...todos, newTodo]
        if (newTodo.title.trim() && newTodo.details.trim()) {
            setTodos(updatedTodos)
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            setTitle("")
            setDetails("")
        }
    }
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todos")) || []
        setTodos(storageTodos)
    }, [])
    return (

        <>
            <Container maxWidth="sm" style={{ textAlign: "center", direction: "rtl", marginTop: "50px" }}>
                <Card sx={{ minWidth: 275, overflow: "scroll", maxHeight: '520px', scrollbarColor: "white white" }}>
                    <CardContent>
                        <Typography variant='h2' style={{ color: "#CD5C08", fontWeight: 500 }}>
                            مهامي
                        </Typography>
                        <Divider />
                        {/* toggle buttons */}
                        <ToggleButtonGroup
                            value={displayTodosType}
                            exclusive
                            onChange={changeTodosType}
                            aria-label="text alignment"
                            style={{ marginTop: "20px", direction: "ltr" }}
                            color='primary'
                        >
                            <ToggleButton value="unCompleted" aria-label="left aligned">
                                الغير منجز
                            </ToggleButton>
                            <ToggleButton value="completed" aria-label="centered">
                                المنجز
                            </ToggleButton>
                            <ToggleButton value="all" aria-label="right aligned">
                                الكل
                            </ToggleButton>


                        </ToggleButtonGroup>

                        {/* todos */}

                        {todoJsx}

                        {/* adding todo button */}
                        <Grid container spacing={2} style={{ marginTop: "20px" }}>
                            <Grid size={12} sx={{ textAlign: "right" }}>
                                <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="مهمة جديدة" variant="outlined" style={{ width: "100%" }} />
                                <TextField value={details} onChange={(e) => setDetails(e.target.value)} id="outlined-basic" label="تفاصيل المهمه" variant="outlined" style={{ width: "100%", marginTop: "10px" }} />

                            </Grid>
                            <Grid size={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                <Button disabled={title.length == 0 || details.length == 0} onClick={() => { handleAddClick() }} variant="contained" style={{ width: "50%", padding: "20px", margin: "0 auto" }}>إضافة</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default ToDoList