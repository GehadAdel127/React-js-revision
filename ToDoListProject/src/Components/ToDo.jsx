import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
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
        localStorage.setItem("todos", JSON.stringify(checkedTodos))
    }

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [openEditDialog, setOpenEditDialog] = useState(false)
    const [updatedTask, setUpdatedTask] = useState({ title: todo.title, details: todo.details })

    function handleCloseDelete() {
        setOpenDeleteDialog(false)
    }
    function handleDeleteClick() {
        setOpenDeleteDialog(true)
    }
    function handleEditClick() {
        setOpenEditDialog(true)
    }
    function handleCloseEdit() {
        setOpenEditDialog(false)
    }
    function handleDeleteSubmit() {
        const updatedTodos = todos.filter((t) => {
            return t.id != todo.id
        })
        setTodos(updatedTodos)
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }
    function handleUpdateSubmit() {
        const updatedTasks = todos.map((t) => {
            if (todo.id == t.id) {
                return { ...todo, title: updatedTask.title, details: updatedTask.details }
            } else {
                return t
            }
        })
        setTodos(updatedTasks)
        setOpenEditDialog(false)
        localStorage.setItem("todos", JSON.stringify(updatedTasks))
    }
    return (
        <>
            {/* delete Dialog */}
            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ direction: "rtl" }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"هل أنت متأكد أنك تريد حذف المهمه؟"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        لا يمكنك التراجع عن الحذف بعد إتمامه
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete}>إلغاء</Button>
                    <Button onClick={handleDeleteSubmit} autoFocus style={{ color: "#b23c17" }}>
                        نعم ,أريد الحذف
                    </Button>
                </DialogActions>
            </Dialog>
            {/* edit Dialog */}
            <Dialog open={openEditDialog} onClose={handleCloseEdit} style={{ direction: "rtl", width: "100%" }}>
                <DialogTitle>{"تعديل المهمه"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="عنوان المهمه"
                        label="عنوان المهمه"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updatedTask.title}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="التفاصيل"
                        label="التفاصيل"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updatedTask.details}
                        onChange={(e) => setUpdatedTask({ ...updatedTask, details: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>إلغاء</Button>
                    <Button onClick={handleUpdateSubmit} type="submit" form="subscription-form" style={{ color: "#b23c17" }}>
                        تعديل
                    </Button>
                </DialogActions>
            </Dialog>
            <Card className='todoCard' sx={{ minWidth: 275, backgroundColor: "#C1D8C3", marginTop: 2 }}>
                <CardContent>

                    {/* grid layout */}
                    <Grid container spacing={1}>
                        <Grid size={8} sx={{ textAlign: "right" }}>
                            <Typography variant='h5' style={{ fontWeight: 400, fontSize: "20px", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                                {todo.title}
                            </Typography>
                            <Typography variant='h6' style={{ fontWeight: 400, fontSize: "12px", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                                {todo.details}
                            </Typography>
                        </Grid>
                        <Grid size={4} gap="2px" display="flex" justifyContent="space-around" alignItems="center">
                            <IconButton onClick={handleCheckClick} className='btnhover check' aria-label="check" style={{ padding: "3px", border: "1px solid #4caf50", backgroundColor: todo.isCompleted ? "#4caf50" : "white", color: todo.isCompleted ? "white" : "#4caf50" }}>
                                <CheckIcon />
                            </IconButton>
                            <IconButton onClick={handleEditClick} className='btnhover edit' aria-label="edit" style={{ padding: "3px", border: "1px solid #1769aa", backgroundColor: "white", color: "#1769aa" }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={handleDeleteClick} className='btnhover delete' aria-label="delete" style={{ padding: "3px", border: "1px solid #b23c17", backgroundColor: "white", color: "#b23c17" }}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </>
    )
}

export default ToDo