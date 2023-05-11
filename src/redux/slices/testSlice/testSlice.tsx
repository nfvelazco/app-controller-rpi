import { createSlice } from "@reduxjs/toolkit"
const initialstate  = {
  number : 0
}

const testSlice = createSlice({
    name: 'test',
    initialState: initialstate,
    reducers: {
      increment:(state : any, action : any) =>{
        state.number = state.number + action.payload
      },
      decrement:(state : any, action : any) =>{
        state.number = state.number - action.payload
      },
    },
  })

export const {increment,decrement} = testSlice.actions 
export default testSlice
