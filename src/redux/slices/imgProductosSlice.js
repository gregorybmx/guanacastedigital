import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createImgProductos } from '../../api/guanacasteDigitalAPI';

const initialState = {
    imgProductoList:[],
    statis: 'idle'
}

export const agregarImgProducto = createAsyncThunk(
    'imgProducto/agregarImgProducto',
    async (imgProducto) => {
        const response = await createImgProductos(imgProducto);
        return response;
    }
)

export const imgProductoSlice = createSlice({
    name: 'imgProducto',
    initialState,
    extraReducers: {
        [agregarImgProducto.pending]: (state) => {
            state.status = 'loading';
        },
        [agregarImgProducto.fulfilled]: (state, action) => {
            state.usuarioList = action.payload;
            state.status = 'success';
        },
        [agregarImgProducto.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default imgProductoSlice.reducer;