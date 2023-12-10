window.addEventListener("load", function(e){
    var form1 = document.getElementById("form1");

    form1.addEventListener("submit", function(e){
        e.preventDefault();
        
        var numero = document.getElementById("txtNumero").value;
        var resultadoElement = document.getElementById("outputResultado");

        if (verificarPrimo(Number(numero))) {
            resultadoElement.innerHTML = numero + " SI es primo.";
        } else {
            resultadoElement.innerHTML = numero + " NO es primo.";
        }
    }); 
});