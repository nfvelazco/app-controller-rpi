import Header from "./components/Header/Header";
import AppRoutes from "./routes/BaseRoutes";
import './styles/App.scss'
import { Grid } from "@mui/material";
function App() {
  return (
    <Grid style={{margin: '10px'}} container spacing={2}>
      <Grid item xs={12}>
      {/* <Header /> */}
        <AppRoutes />
      </Grid>
    </Grid>
  );
}

export default App;
