import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createProducto, getProductos } from '../../api/guanacasteDigitalAPI';

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

export const agregarProducto = createAsyncThunk(
    'producto/agregarProducto',
    async (producto) => {
        const response = await createProducto(producto);
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
        },
        [agregarProducto.pending]: (state) => {
            state.status = 'loading';
        },
        [agregarProducto.fulfilled]: (state) => {
            state.status = 'success';
        },
        [agregarProducto.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default productoSlice.reducer;