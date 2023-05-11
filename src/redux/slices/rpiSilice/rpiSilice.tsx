import { createAsyncThunk,createSlice, createSelector } from "@reduxjs/toolkit"
const initialstate  = {
    ip: null,
    port: null,
    fases : []
}


// export const getOrganigramaAsync = createAsyncThunk(
// 	'empleado/getOrganigrama',
// 	async ({ data, userData }) => {
// 		const response = await getOrganigrama({ data, userData });
// 		return response.data;
// 	}
// );

const rpiSilice = createSlice({
    name: 'rpi',
    initialState: initialstate,
    reducers: {
        setIp:(state : any, action : any) =>{
            state.ip = action.payload
        },
        setPort:(state : any, action : any) =>{
            state.port = action.payload
        },
        setFases:(state : any, action : any) =>{
            state.fases = action.payload
        },
        cambiarEstadoFase:(state : any, action : any) =>{
            state.fases.forEach((fase : any) => {
                if(fase.id === action.payload.id)
                    fase.estado = action.payload.estado
            })
        }
    },
  })

export const {
    setIp,
    setPort,
    setFases,
    cambiarEstadoFase
} = rpiSilice.actions 
export const selectFases = (state : any) => state.rpiSilice.fases
export const selectUrlApiRpi = (state : any) => {
    return (state.rpiSilice.ip !== null && state.rpiSilice.port !== null)?`${state.rpiSilice.ip}:${state.rpiSilice.port}`:undefined
}
export const selectUrlApiRpiGetLineas = (state : any) => {
    return (state.rpiSilice.ip !== null && state.rpiSilice.port !== null)?`http://${state.rpiSilice.ip}:${state.rpiSilice.port}/api/lineas`:undefined;
}
export const selectUrlApiCambioDeEstado = (state : any) => {
    return (state.rpiSilice.ip !== null && state.rpiSilice.port !== null)?`http://${state.rpiSilice.ip}:${state.rpiSilice.port}/api/cambio-estado-linea/`:undefined;
}


export default rpiSilice
