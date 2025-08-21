import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function SnakeBar({ open, message }) {
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
