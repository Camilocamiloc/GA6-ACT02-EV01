window.addEventListener("load", function(e){
    var form1 = document.getElementById("form1");

    form1.addEventListener("submit", function(e){
        e.preventDefault();

        var Numero1 = document.getElementById("txtNumero1").value;
        var Numero2 = document.getElementById("txtNumero2").value;
        var resultadoElement = document.getElementById("outputResultado");

        
        if (Number(Numero1) <= Number(Numero2)) {
            resultadoElement.innerHTML = "Error: El número 1 tiene que ser mayor al número 2.";
            return;
        }

        if (Multiplo(Number(Numero1), Number(Numero2))) {
            resultadoElement.innerHTML = Numero1 + " SI es múltiplo de " + Numero2 + ".";
        } else {
            resultadoElement.innerHTML = Numero1 + " NO es múltiplo de " + Numero2 + ".";
        }
    });
});
