import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { TodosContext } from '../Context/TodosContext';

const ToDo = ({ todo }) => {
    const { todos, setTodos } = useContext(TodosContext)

    function handleCheckClick() {
        const checkedTodos = todos.map((t) => {
            if (t.id == todo.id) {
                return { ...t, isCompleted: !t.isCompleted }
            }
            return t
        })
        setTodos(checkedTodos)
    }
    return (
        <>
            <Card className='todoCard' sx={{ minWidth: 275, backgroundColor: "#C1D8C3", marginTop: 2 }}>
                <CardContent>
                    {/* grid layout */}
                    <Grid container spacing={2}>
                        <Grid size={8} sx={{ textAlign: "right" }}>
                            <Typography variant='h5' style={{ fontWeight: 400, fontSize: "20px" }}>
                                {todo.title}
                            </Typography>
                            <Typography variant='h6' style={{ fontWeight: 400, fontSize: "12px" }}>
                                {todo.details}
                            </Typography>
                        </Grid>
                        <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                            <IconButton onClick={handleCheckClick} className='btnhover check' aria-label="check" style={{ border: "1px solid #4caf50", backgroundColor: todo.isCompleted ? "#4caf50" : "white", color: todo.isCompleted ? "white" : "#4caf50" }}>
                                <CheckIcon />
                            </IconButton>
                            <IconButton className='btnhover edit' aria-label="edit" style={{ border: "1px solid #1769aa", backgroundColor: "white", color: "#1769aa" }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton className='btnhover delete' aria-label="delete" style={{ border: "1px solid #b23c17", backgroundColor: "white", color: "#b23c17" }}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ToDo