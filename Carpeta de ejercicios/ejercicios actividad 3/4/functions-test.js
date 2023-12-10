QUnit.module("calcularEdadReal", function() {
    QUnit.test("Calcular edad para fecha de hoy", function(assert) {
        var fechaHoy = new Date();
        assert.equal(calcularEdadReal(fechaHoy), 0, "La edad debería ser 0");
    });

    QUnit.test("Calcular edad para fecha del año 1990", function(assert) {
        var fecha1990 = new Date(1990, 0, 1); 
        assert.equal(calcularEdadReal(fecha1990), new Date().getFullYear() - 1990, "La edad debería ser 33");
    });
});
