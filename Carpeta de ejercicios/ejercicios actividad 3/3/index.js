window.addEventListener("load", function(e){
    var form1 = document.getElementById("form1");

    form1.addEventListener("submit", function(e){
        e.preventDefault();

        var correo = document.getElementById("txtCorreo").value;
        var resultadoElement = document.getElementById("outputResultado");

     
        if (validarCorreo(correo)) {
            resultadoElement.innerHTML = correo + " SI es un correo electrónico válido.";
        } else {
            resultadoElement.innerHTML = correo + " NO es un correo electrónico válido.";
        }
    });
});
