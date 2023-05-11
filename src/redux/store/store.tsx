import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { basicApi } from '../../services/BasicApi'
import testSlice from "../slices/testSlice/testSlice"
import rpiSilice from "../slices/rpiSilice/rpiSilice"

const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    rpiSilice: rpiSilice.reducer,
    [basicApi.reducerPath] : basicApi.reducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(basicApi.middleware),
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export default store