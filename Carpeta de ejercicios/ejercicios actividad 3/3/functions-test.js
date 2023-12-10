QUnit.module("validarCorreo", function() {
    QUnit.test("Correo válido", function(assert) {
        assert.ok(validarCorreo("usuario@host.com"), " SI es un correo electrónico válido.");
    });

    QUnit.test("Correo sin @", function(assert) {
        assert.notOk(validarCorreo("usuariohost.com"), " NO es un correo electrónico válido");
    });

    QUnit.test("Correo sin dominio", function(assert) {
        assert.notOk(validarCorreo("usuario@"), " NO es un correo electrónico válido");
    });

    QUnit.test("Correo sin punto después de @", function(assert) {
        assert.notOk(validarCorreo("usuario@hostcom"), " NO es un correo electrónico válido");
    });

    QUnit.test("Correo con punto pero sin @", function(assert) {
        assert.notOk(validarCorreo("usuario.com"), " NO es un correo electrónico válido");
    });
});
