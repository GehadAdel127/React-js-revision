import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';


// material ui imports
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["IBM"]
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" dir="rtl">
          <div className="contentContainer" style={{ width: "100%" }} >
            {/* card */}
            <div className="card" style={{ background: "rgb(28 52 91 / 36%)", borderRadius: "15px", boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" }}>
              {/* name & time */}
              <div style={{ display: "flex", justifyContent: "start", alignItems: "end", }}>
                <div style={{ margin: "0px 20px" }}>
                  <Typography variant="h2" component="h2" style={{ fontWeight: 400 }}>
                    القاهرة
                  </Typography>
                </div>
                <div style={{ margin: "0px 20px" }}>
                  <Typography variant="h5" component="h5" style={{ fontWeight: 200 }}>
                    الأحد-23-2025
                  </Typography>
                </div>
              </div>
              {/* name & time */}
              <hr style={{ width: "100%" }} />
              {/* temp & icon */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* temp */}
                <div>
                  {/* temp */}
                  <div>
                    <Typography variant="h2" component="h2" style={{ fontWeight: 200, margin: "15px" }}>
                      38
                    </Typography>
                  </div>
                  {/* state */}
                  <div>
                    <Typography variant="h6" component="h6" style={{ fontWeight: 200, margin: "15px" }}>
                      broken clouds
                    </Typography>
                  </div>
                  {/* min & max */}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <h6 style={{ margin: "0px 10px", fontWeight: "400" }}>الصغرى 34</h6>
                    <h6 style={{ margin: "0px 10px", fontWeight: "400" }}> |</h6>
                    <h6 style={{ margin: "0px 10px", fontWeight: "400" }}>الكبرى 38</h6>

                  </div>
                </div>
                {/* icon*/}
                <div>
                  <CloudIcon style={{ fontSize: "200px" }} />
                </div>
              </div>
            </div>
            {/* card */}
            {/* button */}
            <div style={{ width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }}>
              <Button variant="text" style={{ color: "rgb(28 52 91 / 36%)", marginTop: "20px", padding: "10px" }}>إنجليزي</Button>
            </div>
          </div>
        </Container>
      </ThemeProvider >
    </>
  )
}

export default App
