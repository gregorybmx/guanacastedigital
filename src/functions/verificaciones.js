export function verificarId(id) {
    // Expresión regular para verificar un nombre completo
    const regex = /^[0-9a-zA-Z]{9,12}$/;
    if (id !== '') {
        // Verificar si el nombre cumple con el patrón de la expresión regular
        if (regex.test(id)) {
            return "";
        } else {
            return "La Identificación que se ha ingresado no cumple con los parámetros establecidos, Recuerde que la Cédula de Identificación Costarricense posee 9 dígitos incluyendo los ceros y la Cédula de Residencia Costarricense posee 12 dígitos";
        }
    }
    else
        return "No debe dejar este espacio vacio"
}

export function verificarNombreCompleto(nombreCompleto) {
    // Expresión regular para verificar un nombre completo
    const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]{2,}\s[A-Za-záéíóúÁÉÍÓÚñÑ]{2,}(\s[A-Za-záéíóúÁÉÍÓÚñÑ]{2,})?$/;
    if (nombreCompleto !== '') {
        // Verificar si el nombre cumple con el patrón de la expresión regular
        if (regex.test(nombreCompleto)) {
            return "";
        } else {
            return "El nombre que se ha ingresado no cumple con los parametros establecivos, Recuerde que solo debe ingresar su nombre y uno o dos apellidos";
        }
    }
    else
        return "No debe dejar este espacio vacio"
}

export function verificarCorreo(correo) {
    // Expresión regular para verificar un correo
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo !== '') {
        // Verificar si el nombre cumple con el patrón de la expresión regular
        if (regex.test(correo)) {
            return "";
        } else
            return "El correo electrónico ingresado es inválido";
    }
    else
        return "No debe dejar este espacio vacio"
}

export function verificarTelefono(telefono) {
    // Expresión regular para verificar un telefono
    const regex = /^\d{8}$/;
    if (telefono !== '') {
        // Verificar si el nombre cumple con el patrón de la expresión regular
        if (regex.test(telefono)) {
            return "";
        } else
            return "El número telefonico ingresado es inválido, Recuerde que deben ser 8 valores numéricos";
    }
    else
        return "No debe dejar este espacio vacio"
}

export function verificarContraseñaRobusta(contraseña) {
    // Expresión regular para verificar contraseña
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;
    if (contraseña !== '') {
        // Verificar si el nombre cumple con el patrón de la expresión regular
        if (regex.test(contraseña)) {
            return "";
        } else
            return "La contraseña ingresada no es demasiado fuerte.  " +
                "*)La longitud debe ser de 6 caracteres o más. " +
                "*)Debe contener al menos una letra mayúscula. " +
                "*)Debe contener al menos una letra minúscula. " +
                "*)Debe contener al menos un número................. " +
                "*)Debe contener al menos un carácter especial, como !@#$%^&* () ";
    }
    else
        return "No debe dejar este espacio vacio"
}

export function verificarContraseñas(contraseña, verificacion) {
    if (verificacion !== '') {
        if (contraseña === verificacion)
            return "";
        else
            return "Las contraseñas no coinciden"
    }
    else
        return "No debe dejar este espacio vacio"
}

export function verificarContraseñaLogin(contraseña) {
    // Expresión regular para verificar contraseña
    const regex = /^.{6,}$/;
    if (contraseña !== '') {
        // Verificar si el nombre cumple con el patrón de la expresión regular
        if (regex.test(contraseña)) {
            return "";
        } else
            return "La contraseña no debe tener menos de 6 caracteres";
    }
    else
        return "No debe dejar este espacio vacio"
}

