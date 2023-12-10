QUnit.module("verificarPrimo", function() {
    QUnit.test("Verificar primo para 2", function(assert) {
        assert.ok(verificarPrimo(2), "2 SI es primo");
    });

    QUnit.test("Verificar primo para 7", function(assert) {
        assert.ok(verificarPrimo(7), "7 SI es primo");
    });

    QUnit.test("Verificar no primo para 4", function(assert) {
        assert.notOk(verificarPrimo(4), "4 NO es primo");
    });

    QUnit.test("Verificar no primo para 10", function(assert) {
        assert.notOk(verificarPrimo(10), "10 NO es primo");
    });

    QUnit.test("Verificar primo para 13", function(assert) {
        assert.ok(verificarPrimo(13), "13 SI es primo");
    });
});
