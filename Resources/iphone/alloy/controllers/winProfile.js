function Controller() {
    function refreshScreen() {
        void 0 != Ti.App.Properties.getString("Nombre") && ($.txtNombre.value = Ti.App.Properties.getString("Nombre"));
        void 0 != Ti.App.Properties.getString("Apellido1") && ($.txtApellido1.value = Ti.App.Properties.getString("Apellido1"));
        void 0 != Ti.App.Properties.getString("Apellido2") && ($.txtApellido2.value = Ti.App.Properties.getString("Apellido2"));
        void 0 != Ti.App.Properties.getString("Direccion") && ($.txtDireccion.value = Ti.App.Properties.getString("Direccion"));
        void 0 != Ti.App.Properties.getString("CP") && ($.txtCodPostal.value = Ti.App.Properties.getString("CP"));
        void 0 != Ti.App.Properties.getString("Telefono") && ($.txtTelefono.value = Ti.App.Properties.getString("Telefono"));
        void 0 != Ti.App.Properties.getString("Email") && ($.txtEmail.value = Ti.App.Properties.getString("Email"));
        void 0 != Ti.App.Properties.getString("Ayuda") && ($.chkAyuda.value = Ti.App.Properties.getString("Ayuda"));
        void 0 != Ti.App.Properties.getString("UsuarioCloud") && ($.btnAlta.visible = false);
    }
    function Alta() {
        void 0 == Ti.App.Properties.getString("UsuarioCloud") && Cloud.Users.create({
            email: Ti.App.Properties.getString("Email"),
            first_name: Ti.App.Properties.getString("Nombre"),
            last_name: Ti.App.Properties.getString("Apellido1"),
            password: "AulaVirtual",
            password_confirmation: "AulaVirtual",
            role: "Profesor",
            custom_fields: {
                Direccion: Ti.App.Properties.getString("Direccion"),
                CodPostal: Ti.App.Properties.getString("CP"),
                Telefono1: Ti.App.Properties.getString("Telefono"),
                Apellido2: Ti.App.Properties.getString("Apellido2")
            }
        }, function(e) {
            if (e.success) {
                e.users[0];
                alert("Se ha creado el alumno en la nube.");
                Ti.App.Properties.setString("UsuarioCloud", 1);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function Guardar() {
        if (void 0 != Ti.App.Properties.getString("UsuarioCloud")) {
            var data = {
                first_name: $.txtNombre.value,
                last_name: $.txtApellido1.value,
                password: "AulaVirtual",
                email: $.txtEmail.value,
                password_confirmation: "AulaVirtual",
                role: "Profesor",
                custom_fields: {
                    Direccion: $.txtDireccion.value,
                    CodPostal: $.txtCodPostal.value,
                    Telefono1: $.txtTelefono.value,
                    Apellido2: $.txtApellido2.value
                }
            };
            Cloud.Users.update(data, function(e) {
                if (e.success) {
                    alert("Se han modificado los datos de usuario");
                    Ti.App.Properties.setString("Nombre", $.txtNombre.value);
                    Ti.App.Properties.setString("Apellido1", $.txtApellido1.value);
                    Ti.App.Properties.setString("Apellido2", $.txtApellido2.value);
                    Ti.App.Properties.setString("Direccion", $.txtDireccion.value);
                    Ti.App.Properties.setString("CP", $.txtCodPostal.value);
                    Ti.App.Properties.setString("Telefono", $.txtTelefono.value);
                    Ti.App.Properties.setString("Ayuda", $.chkAyuda.value);
                    Ti.App.Properties.setString("Email", $.txtEmail.value);
                    alert("Se han modificado los datos de registro");
                } else Cloud.Users.create(data, function(e) {
                    if (e.success) {
                        Ti.App.Properties.setString("Nombre", $.txtNombre.value);
                        Ti.App.Properties.setString("Apellido1", $.txtApellido1.value);
                        Ti.App.Properties.setString("Apellido2", $.txtApellido2.value);
                        Ti.App.Properties.setString("Direccion", $.txtDireccion.value);
                        Ti.App.Properties.setString("CP", $.txtCodPostal.value);
                        Ti.App.Properties.setString("Telefono", $.txtTelefono.value);
                        Ti.App.Properties.setString("Ayuda", $.chkAyuda.value);
                        Ti.App.Properties.setString("Email", $.txtEmail.value);
                        alert("Se han modificado los datos de registro");
                        e.users[0];
                        alert("Se ha creado el usuario en la nube");
                        Ti.App.Properties.setString("UsuarioCloud", 1);
                    } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
                });
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "winProfile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winUsuario = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "winUsuario",
        title: "Perfil usuario"
    });
    $.__views.winUsuario && $.addTopLevelView($.__views.winUsuario);
    var __alloyId224 = [];
    $.__views.__alloyId225 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId225"
    });
    __alloyId224.push($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.txtNombre = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtNombre"
    });
    $.__views.__alloyId225.add($.__views.txtNombre);
    $.__views.__alloyId227 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId227"
    });
    __alloyId224.push($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "1er Apellido",
        id: "__alloyId228"
    });
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtApellido1"
    });
    $.__views.__alloyId227.add($.__views.txtApellido1);
    $.__views.__alloyId229 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId229"
    });
    __alloyId224.push($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "2o Apellido",
        id: "__alloyId230"
    });
    $.__views.__alloyId229.add($.__views.__alloyId230);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtApellido2"
    });
    $.__views.__alloyId229.add($.__views.txtApellido2);
    $.__views.__alloyId231 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId231"
    });
    __alloyId224.push($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Direccion",
        id: "__alloyId232"
    });
    $.__views.__alloyId231.add($.__views.__alloyId232);
    $.__views.txtDireccion = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtDireccion"
    });
    $.__views.__alloyId231.add($.__views.txtDireccion);
    $.__views.__alloyId233 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId233"
    });
    __alloyId224.push($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Cod.Postal",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtCodPostal"
    });
    $.__views.__alloyId233.add($.__views.txtCodPostal);
    $.__views.__alloyId235 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId235"
    });
    __alloyId224.push($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Telefono",
        id: "__alloyId236"
    });
    $.__views.__alloyId235.add($.__views.__alloyId236);
    $.__views.txtTelefono = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtTelefono"
    });
    $.__views.__alloyId235.add($.__views.txtTelefono);
    $.__views.__alloyId237 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId237"
    });
    __alloyId224.push($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Email",
        id: "__alloyId238"
    });
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtEmail"
    });
    $.__views.__alloyId237.add($.__views.txtEmail);
    $.__views.__alloyId239 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId239"
    });
    __alloyId224.push($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Ayuda activa",
        id: "__alloyId240"
    });
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.chkAyuda = Ti.UI.createSwitch({
        value: false,
        enabled: "true",
        left: "80%",
        id: "chkAyuda"
    });
    $.__views.__alloyId239.add($.__views.chkAyuda);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        data: __alloyId224,
        id: "Marco"
    });
    $.__views.winUsuario.add($.__views.Marco);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winUsuario.add($.__views.btnGuardar);
    $.__views.btnAlta = Ti.UI.createButton({
        top: "85%",
        left: "42%",
        id: "btnAlta",
        title: "Enviar a nube"
    });
    $.__views.winUsuario.add($.__views.btnAlta);
    Alta ? $.__views.btnAlta.addEventListener("click", Alta) : __defers["$.__views.btnAlta!click!Alta"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.winUsuario.setRightNavButton($.btnGuardar);
    $.winUsuario.title = "Información Usuario";
    $.txtNombre.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el nombre",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtNombre.value = e.text);
        });
        dialog.show();
    });
    $.txtApellido1.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el primer apellido",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtApellido1.value = e.text);
        });
        dialog.show();
    });
    $.txtApellido2.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el segundo apellido",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtApellido2.value = e.text);
        });
        dialog.show();
    });
    $.txtDireccion.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca la direccion",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtDireccion.value = e.text);
        });
        dialog.show();
    });
    $.txtCodPostal.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el código postal",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtCodPostal.value = e.text);
        });
        dialog.show();
    });
    $.txtTelefono.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el teléfono",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtTelefono.value = e.text);
        });
        dialog.show();
    });
    $.txtEmail.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca su Email",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtEmail.value = e.text);
        });
        dialog.show();
    });
    $.winUsuario.addEventListener("focus", function() {
        refreshScreen();
    });
    $.winUsuario.addEventListener("close", function() {
        $.destroy();
    });
    var validationCallback = function(errors) {
        if (errors.length > 0) {
            for (var i = 0; errors.length > i; i++) Ti.API.debug(errors[i].message);
            alert(errors[0].message);
        } else Guardar();
    };
    var returnCallback = function() {
        validator.run([ {
            id: "nameField",
            value: $.txtNombre.value,
            display: "Nombre",
            rules: "required|max_length[50]"
        }, {
            id: "surname1Field",
            value: $.txtApellido1.value,
            display: "Apellido1",
            rules: "required|max_length[50]"
        }, {
            id: "surname2Field",
            value: $.txtApellido2.value,
            display: "Apellido2",
            rules: "max_length[50]"
        }, {
            id: "emailField",
            value: $.txtEmail.value,
            display: "Email",
            rules: "required|valid_email"
        } ], validationCallback);
    };
    $.btnGuardar.addEventListener("click", returnCallback);
    __defers["$.__views.btnAlta!click!Alta"] && $.__views.btnAlta.addEventListener("click", Alta);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;