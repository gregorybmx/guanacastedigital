import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUsuario, getUsuarios, updateUsuario } from '../../api/guanacasteDigitalAPI';

const initialState = {
    usuarioList: [],
    status: 'idle',
}

export const obtenerUsuario = createAsyncThunk(
    'usuario/obtenerUsuario',
    async () => {
        const response = await getUsuarios();
        return response;
    }
)

export const agregarUsuario = createAsyncThunk(
    'usuario/agregarUsuario',
    async (usuario) => {
        const response = await createUsuario(usuario);
        return response;
    }
)

export const actualizarUsuario = createAsyncThunk(
    'usuario/actualizarUsuario',
    async (usuario) => {
        const response = await updateUsuario(usuario);
        return response;
    }
)

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    extraReducers: {
        [obtenerUsuario.pending]: (state) => {
            state.status = 'loading';
        },
        [obtenerUsuario.fulfilled]: (state, action) => {
            state.usuarioList = action.payload;
            state.status = 'success';
        },
        [obtenerUsuario.rejected]: (state) => {
            state.status = 'failed';
        },
        [agregarUsuario.pending]: (state) => {
            state.status = 'loading';
        },
        [agregarUsuario.fulfilled]: (state) => {
            state.status = 'success';
        },
        [agregarUsuario.rejected]: (state) => {
            state.status = 'failed';
        },
        [actualizarUsuario.pending]: (state) => {
            state.status = 'loading';
        },
        [actualizarUsuario.fulfilled]: (state) => {
            state.status = 'success';
        },
        [actualizarUsuario.rejected]: (state) => {
            state.status = 'failed';
        }
    }
})

export default usuarioSlice.reducer;