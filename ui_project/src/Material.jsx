import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



export default function Material() {
    const [isOpened, setIsOpened] = useState(false)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    function handleMessageStyle() {
        { isOpened ? setIsOpened(false) : setIsOpened(true) }
    }
    return (
        <Container spacing={2}>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Accordion 1</Typography>
                    </AccordionSummary>
                    <Container style={{ display: "flex", justifyContent: "center" }}>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Container>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">Accordion 2</Typography>
                    </AccordionSummary>
                    <Container style={{ display: "flex", justifyContent: "center" }}>
                        <AccordionDetails >
                            <Switch color='success' {...label} defaultChecked onClick={handleMessageStyle} />
                        </AccordionDetails>
                    </Container>
                </Accordion>
                <Container style={isOpened ? { backgroundColor: "orange", width: "100%", height: "300px", textAlign: "center" } : { backgroundColor: "orange", textAlign: "center" }}>
                    <h2>Hello world :) </h2>
                </Container>
            </div>
        </Container>
    );
}
