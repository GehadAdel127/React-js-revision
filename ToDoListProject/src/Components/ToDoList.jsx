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
import { useContext, useState } from 'react';
import { TodosContext } from '../Context/TodosContext';
import ToDo from './ToDo';


const ToDoList = () => {
    const { todos, setTodos } = useContext(TodosContext)
    const [title, setTitle] = useState("")
    const todoJsx = todos.map((t) => {
        return <ToDo key={t.id} todo={t} />
    })

    function handleAddClick() {
        const newTodo = {
            id: uuidv4(),
            title: title,
            details: "",
            isCompleted: false
        }
        setTodos([...todos, newTodo])
        setTitle("")
    }
    return (

        <>
            <Container maxWidth="sm" style={{ textAlign: "center", direction: "rtl", marginTop: "50px" }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant='h2' style={{ color: "#CD5C08", fontWeight: 500 }}>
                            مهامي
                        </Typography>
                        <Divider />
                        {/* toggle buttons */}
                        <ToggleButtonGroup
                            // value={alignment}
                            exclusive
                            // onChange={handleAlignment}
                            aria-label="text alignment"
                            style={{ marginTop: "20px", direction: "ltr" }}
                        >
                            <ToggleButton value="left" aria-label="left aligned">
                                الغير منجز
                            </ToggleButton>
                            <ToggleButton value="center" aria-label="centered">
                                المنجز
                            </ToggleButton>
                            <ToggleButton value="right" aria-label="right aligned">
                                الكل
                            </ToggleButton>


                        </ToggleButtonGroup>

                        {/* todos */}

                        {todoJsx}

                        {/* adding todo button */}
                        <Grid container spacing={2} style={{ marginTop: "20px" }}>
                            <Grid size={8} sx={{ textAlign: "right" }}>
                                <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="مهمهة جديدة" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                                <Button onClick={() => { handleAddClick() }} variant="contained" style={{ width: "100%", height: "100%", backgroundColor: "#CD5C08" }}>إضافة</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default ToDoList