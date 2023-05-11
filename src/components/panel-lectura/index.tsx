import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from '@mui/material/colors';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const verde = "#6fbf73"
const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }}  color="text.secondary" gutterBottom>
        Actualemnte los mecheros estan: <b style={{color: verde}}>Encendidos</b>
      </Typography>
      <br />
      <Typography variant="h5" component="div">
        Temperatura: <b style={{color: verde}}>189ºC</b>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">Subiendo hasta los 220ºC</Typography>
      <Typography variant="body2">
        Tiempo restante 1hs 20min
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Ver mas</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
