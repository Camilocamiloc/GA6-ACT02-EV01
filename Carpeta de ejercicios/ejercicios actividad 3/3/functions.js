function validarCorreo(correo) {
    return correo.includes('@') && correo.includes('.') && correo.indexOf('@') < correo.lastIndexOf('.');
}
