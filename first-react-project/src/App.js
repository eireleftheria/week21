import "./App.css";
import { Box, TextField, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </Box>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
}

export default App;
