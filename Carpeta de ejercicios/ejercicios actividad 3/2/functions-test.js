QUnit.module("verificarMultiplo", function() {
    QUnit.test("Verificar múltiplo para 6 y 2", function(assert) {
        assert.ok(Multiplo(6, 2), "6 SI es múltiplo de 2");
    });

    QUnit.test("Verificar múltiplo para 15 y 3", function(assert) {
        assert.ok(Multiplo(15, 3), "15 SI es múltiplo de 3");
    });

    QUnit.test("Verificar no múltiplo para 10 y 4", function(assert) {
        assert.notOk(Multiplo(10, 4), "10 NO es múltiplo de 4");
    });

    QUnit.test("Verificar no múltiplo para 21 y 5", function(assert) {
        assert.notOk(Multiplo(21, 5), "21 NO es múltiplo de 5");
    });

    QUnit.test("Verificar error para 10 y 50", function(assert) {
        assert.notOk(Multiplo(10, 50), "Error: El número 1 tiene que ser mayor al número 2");
    });
});