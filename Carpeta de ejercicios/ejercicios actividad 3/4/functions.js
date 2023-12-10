function calcularEdadReal(fechaNacimiento) {
    var fechaActual = new Date();
    
    
    if (
        fechaNacimiento.getFullYear() === fechaActual.getFullYear() &&
        fechaNacimiento.getMonth() === fechaActual.getMonth() &&
        fechaNacimiento.getDate() === fechaActual.getDate()
    ) {
        return 0; 
    }

    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (
        fechaNacimiento.getMonth() > fechaActual.getMonth() ||
        (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())
    ) {
        edad--;
    }

    return edad;
}
