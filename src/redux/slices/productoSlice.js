import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getProductos} from '../../api/guanacasteDigitalAPI'

const initialState = {
    productoList: [],
    status: 'idle',
}

export const obtenerProducto = createAsyncThunk(
    'producto/obtenerProducto',
    async () => {
        const response = await getProductos();
        return response;
    }
)

export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    extraReducers: {
        [obtenerProducto.pending]: (state) => {
            state.status = 'loading';
        },
        [obtenerProducto.fulfilled]: (state, action) => {
            state.productoList = action.payload;
            state.status = 'success';
        },
        [obtenerProducto.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default productoSlice.reducer;