import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getProveedores} from '../../api/guanacasteDigitalAPI'

const initialState = {
    proveedorList: [],
    status: 'idle',
}

export const obtenerProveedores = createAsyncThunk(
    'proveedor/obtenerProveedores',
    async () => {
        const response = await getProveedores();
        return response;
    }
)

export const proveedorSlice = createSlice({
    name: 'proveedor',
    initialState,
    extraReducers: {
        [obtenerProveedores.pending]: (state) => {
            state.status = 'loading';
        },
        [obtenerProveedores.fulfilled]: (state, action) => {
            state.proveedorList = action.payload;
            state.status = 'success';
        },
        [obtenerProveedores.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default proveedorSlice.reducer;