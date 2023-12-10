window.addEventListener("load", function(e){
    var formCompra = document.getElementById("formCompra");

    formCompra.addEventListener("submit", function(e){
        e.preventDefault();

        var valorCompra = parseFloat(document.getElementById("valorCompra").value);
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var genero = document.getElementById("genero").value;

        var edad = calcularEdadReal(new Date(fechaNacimiento));
        var descuentos = Descuentos(valorCompra, genero, edad);
        mostrarDescuentos(descuentos, valorCompra);
    });
});

function mostrarDescuentos(descuentos, valorCompra) {
    var outputDescuentos = document.getElementById("outputDescuentos");

    outputDescuentos.innerHTML = "Monto pretendido de compra: $" + valorCompra.toFixed(2) + "<br>";
    outputDescuentos.innerHTML += "Descuento de IVA: $" + descuentos.descuentoIVA.toFixed(2) + "<br>";
    outputDescuentos.innerHTML += "Descuento por género: $" + (descuentos.descuentoGenero * valorCompra).toFixed(2) + "<br>";
    outputDescuentos.innerHTML += "Descuento por edad: $" + (descuentos.descuentoEdad * valorCompra).toFixed(2) + "<br>";

    var totalPagado = valorCompra - descuentos.descuentoIVA - (descuentos.descuentoGenero * valorCompra) - (descuentos.descuentoEdad * valorCompra);
    outputDescuentos.innerHTML += "Total Pagado: $" + totalPagado.toFixed(2);
}
