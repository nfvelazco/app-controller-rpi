import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Fase } from '../../models/rpi'
import { ReduxState } from '../../models/ReduxState'
import {createSelector } from "@reduxjs/toolkit"
import Card from '../../components/panel-lectura'
import { Grid, Container, Typography, Box } from '@mui/material';
import { 
    setIp, 
    setPort, 
    setFases, 
    selectUrlApiRpiGetLineas, 
    selectUrlApiCambioDeEstado,
    cambiarEstadoFase,
    selectFases 
} from '../../redux/slices/rpiSilice/rpiSilice'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

type Props = {}

async function fetchData(url: string) {
    const response = await fetch(url);
    const data: Fase[] = await response.json();
    return data;
  }

const ManejoDeFases = (props: Props) => {
    // const [state, setState] = React.useState({ checked:false});
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dispatch = useDispatch();
    
    
    const fases = useSelector(selectFases);
    
    let urlGetFases= useSelector(selectUrlApiRpiGetLineas);
    const urlCambioDeEstado = useSelector(selectUrlApiCambioDeEstado);

    async function fetchDataEfect() {
        if(urlGetFases)
        {
            const result = await fetchData(urlGetFases);
            dispatch(setFases(result));
        }
    }
    async function fetchCambioEstado(id: number) {
        if(urlCambioDeEstado)
        {
            const result = await fetchData(urlCambioDeEstado + id.toString());
            dispatch(cambiarEstadoFase(result));
            fetchDataEfect();
        }
    }
    useEffect(() => {
        dispatch(setIp(queryParams.get('ip') || ''))
        dispatch(setPort(queryParams.get('port') || ''))
        if(urlGetFases)
            fetchDataEfect();
    }, [urlGetFases])

    const handleChange = (fase: Fase) => {
        // setState({ ...state, checked: event.target.checked });
        fetchCambioEstado(fase.id);
        
    };
    return (
            <Grid container spacing={10}>
                <Grid item xs={12} md={6} lg={4} xl={4}>

                    <Typography variant='h3'>Lecturas</Typography>
                    <Card></Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={4}>
                    <Typography variant='h3'>Estados</Typography>
                    <Box>
                    {fases?.map((fase:Fase) => (
                        <FormControlLabel
                        key={`${fase.id}-FormControlLabel`}
                        control={
                            <Switch
                                key={fase.id}
                                checked={fase.estado}
                                onChange={(event)=>{handleChange({
                                    estado: event.target.checked,
                                    id: fase.id,
                                    nombre: fase.nombre,
                                    pin: fase.pin
                                })}}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={fase.nombre}
                    />
                    ))}
                    </Box>
            
                </Grid>
            </Grid>
    )
}

export default ManejoDeFases