QUnit.test("Descuento de IVA correcto", function(assert) {
    const resultado = Descuentos(1000, "mujer", 25);
    assert.equal(resultado.descuentoIVA, 190, "Descuento de IVA correcto");
});

QUnit.test("Descuento por género correcto", function(assert) {
    const resultado = Descuentos(500, "mujer", 30);
    assert.equal(resultado.descuentoGenero, 15, "Descuento por género correcto");
});

