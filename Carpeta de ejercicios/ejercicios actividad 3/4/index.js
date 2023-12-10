window.addEventListener("load", function(e){
    var form1 = document.getElementById("form1");

    form1.addEventListener("submit", function(e){
        e.preventDefault();
        var fechaNacimiento = document.getElementById("fechaN").value;

       
        if (!fechaNacimiento) {
            alert("Por favor, ingresa una fecha de nacimiento válida.");
            return;
        }

        var edad = calcularEdadReal(new Date(fechaNacimiento));
        mostrarEdad(edad);
    });

    function mostrarEdad(edad) {
        var resultadoElement = document.getElementById("outputResultado");
        resultadoElement.innerHTML = "La edad es: " + edad + " años.";
    }
});
