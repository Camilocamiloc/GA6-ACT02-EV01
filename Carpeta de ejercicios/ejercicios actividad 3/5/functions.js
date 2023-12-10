function Descuentos(valorCompra, genero, edad) {
    const descuentoIVA = valorCompra * 0.19;
    let descuentoGenero = 0;
    let descuentoEdad = 0;

    if (genero === "mujer") {
        descuentoGenero = valorCompra * 0.03;
        if (edad > 19) {
            descuentoEdad = valorCompra * 0.02;
        }
    } else if (genero === "hombre" && valorCompra > 200000) {
        descuentoGenero = valorCompra * 0.015;
        if (edad > 23) {
            descuentoEdad = valorCompra * 0.03;
        }
    }

    const totalPagado = valorCompra - descuentoIVA - descuentoGenero - descuentoEdad;

    return {
        descuentoIVA,
        descuentoGenero,
        descuentoEdad,
        totalPagado
    };
}

