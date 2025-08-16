import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import ToDo from './ToDo';


const ToDoList = () => {
    return (
        <>
            <Container maxWidth="sm" style={{ textAlign: "center", direction: "rtl" }}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant='h2'>
                            مهامي
                        </Typography>
                        <Divider />
                        {/* toggle buttons */}
                        <ToggleButtonGroup
                            // value={alignment}
                            exclusive
                            // onChange={handleAlignment}
                            aria-label="text alignment"
                            style={{ marginTop: "20px" }}
                        >
                            <ToggleButton value="right" aria-label="right aligned">
                                الكل
                            </ToggleButton>
                            <ToggleButton value="center" aria-label="centered">
                                المنجز
                            </ToggleButton>
                            <ToggleButton value="left" aria-label="left aligned">
                                الغير منجز
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToDo />
                        <ToDo />
                        <ToDo />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default ToDoList