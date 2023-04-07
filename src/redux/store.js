import { configureStore } from "@reduxjs/toolkit";
import productoSlice from "./slices/productoSlice";
import usuarioSlice from "./slices/usuarioSlice";
import categoriaSlice from "./slices/categoriaSlice";
import proveedorSlice from "./slices/proveedorSlice";

export const store = configureStore({
    reducer: {
        producto: productoSlice,
        usuario: usuarioSlice,
        categoria: categoriaSlice,
        proveedor: proveedorSlice
    }
});