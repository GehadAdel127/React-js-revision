import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ToDo = () => {
    return (
        <>
            <Card className='todoCard' sx={{ minWidth: 275, backgroundColor: "#C0C9EE", marginTop: 5 }}>
                <CardContent>
                    {/* grid layout */}
                    <Grid container spacing={2}>
                        <Grid size={8} sx={{ textAlign: "right" }}>
                            <Typography variant='h5'>
                                مهامي
                            </Typography>
                            <Typography variant='h6'>
                                تفاصيل المهمه
                            </Typography>
                        </Grid>
                        <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                            <IconButton className='btnhover check' aria-label="check" style={{ border: "1px solid #4caf50", backgroundColor: "white", color: "#4caf50" }}>
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