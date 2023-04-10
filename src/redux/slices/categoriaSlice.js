import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategorias } from '../../api/guanacasteDigitalAPI';

const initialState = {
    categoriaList: [],
    status: 'idle',
}

export const obtenerCategoria = createAsyncThunk(
    'categoria/obtenerCategoria',
    async () => {
        const response = await getCategorias();
        return response;
    }
)

export const categoriaSlice = createSlice({
    name: 'categoria',
    initialState,
    extraReducers: {
        [obtenerCategoria.pending]: (state) => {
            state.status = 'loading';
        },
        [obtenerCategoria.fulfilled]: (state, action) => {
            state.categoriaList = action.payload;
            state.status = 'success';
        },
        [obtenerCategoria.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default categoriaSlice.reducer;