import axios from "axios";

//PRODUCTOS

export async function getProductos() {
    try {
        const response = await axios.get("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/model_products");
        return response.data.products;
    } catch (error) {
        return error;
    }
}

export async function createProducto(producto) {

    try {
        const response = await axios.post("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/proc_insert_products", producto, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}



//IMG PRODUCTOS
export async function createImgProductos(img) {
    try {
        const response = await axios.post("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/proc_insert_img_product", img, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}

//USUARIOS

export async function getUsuarios() {
    try {
        const response = await axios.get("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/model_user");
        return response.data.users;
    } catch (error) {
        return error;
    }
}

export async function createUsuario(user) {

    try {
        const response = await axios.post("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/proc_insert_users", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data.resultado;
    } catch (error) {
        return error;
    }
}


export async function updateUsuario(user) {
    try {
        const response = await axios.put("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/prod_update_users", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data.resultado;
    } catch (error) {
        return error;
    }
}

//CATEGORIAS

export async function getCategorias() {
    try {
        const response = await axios.get("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/model_categories");
        return response.data.categories;
    } catch (error) {
        return error;
    }
}

//Proveedores

export async function getProveedores() {
    try {
        const response = await axios.get("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/model_vendors");
        return response.data.vendors;
    } catch (error) {
        return error;
    }
}

//LOGIN

export async function login(user) {
    try {
        const response = await axios.put("https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/gd/prod/proc_login", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        return error;
    }
}
