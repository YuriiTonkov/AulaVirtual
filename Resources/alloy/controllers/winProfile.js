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
                var user = e.users[0];
                alert("Success:\nid: " + user.id + "\n" + "sessionId: " + Cloud.sessionId + "\n" + "first name: " + user.first_name + "\n" + "last name: " + user.last_name);
                Ti.App.Properties.setString("UsuarioCloud", 1);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    function Guardar() {
        if (Ti.App.Properties.getString("Pass") == $.txtPass.value) {
            Ti.App.Properties.setString("Nombre", $.txtNombre.value);
            Ti.App.Properties.setString("Apellido1", $.txtApellido1.value);
            Ti.App.Properties.setString("Apellido2", $.txtApellido2.value);
            Ti.App.Properties.setString("Direccion", $.txtDireccion.value);
            Ti.App.Properties.setString("CP", $.txtCodPostal.value);
            Ti.App.Properties.setString("Telefono", $.txtTelefono.value);
            Ti.App.Properties.setString("Ayuda", $.chkAyuda.value);
            $.lblError.text = "Se han modificado los datos de registro";
            $.lblError.visible = true;
            if (void 0 != Ti.App.Properties.getString("UsuarioCloud")) {
                var data = {
                    first_name: $.txtNombre.value,
                    last_name: $.txtApellido1.value,
                    password: "AulaVirtual",
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
                    e.success ? alert("Se han modificado los datos de usuario") : alert("No se han podido actualizar los datos en la nube");
                });
            }
        } else {
            $.lblError.text = "Contraseña incorrecta";
            $.lblError.visible = true;
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
        backgroundColor: "white",
        id: "winUsuario",
        title: "Perfil usuario"
    });
    $.__views.winUsuario && $.addTopLevelView($.__views.winUsuario);
    $.__views.__alloyId189 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId189"
    });
    var __alloyId190 = [];
    __alloyId190.push($.__views.__alloyId189);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre",
        id: "__alloyId191"
    });
    $.__views.__alloyId189.add($.__views.__alloyId191);
    $.__views.txtNombre = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtNombre"
    });
    $.__views.__alloyId189.add($.__views.txtNombre);
    $.__views.__alloyId192 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId192"
    });
    __alloyId190.push($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "1er Apellido",
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtApellido1"
    });
    $.__views.__alloyId192.add($.__views.txtApellido1);
    $.__views.__alloyId194 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId194"
    });
    __alloyId190.push($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "2o Apellido",
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        top: "18%",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtApellido2"
    });
    $.__views.__alloyId194.add($.__views.txtApellido2);
    $.__views.__alloyId196 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId196"
    });
    __alloyId190.push($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Direccion",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.txtDireccion = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtDireccion"
    });
    $.__views.__alloyId196.add($.__views.txtDireccion);
    $.__views.__alloyId198 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId198"
    });
    __alloyId190.push($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Cod.Postal",
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtCodPostal"
    });
    $.__views.__alloyId198.add($.__views.txtCodPostal);
    $.__views.__alloyId200 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId200"
    });
    __alloyId190.push($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Telefono",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.txtTelefono = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtTelefono"
    });
    $.__views.__alloyId200.add($.__views.txtTelefono);
    $.__views.__alloyId202 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId202"
    });
    __alloyId190.push($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Email",
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtEmail"
    });
    $.__views.__alloyId202.add($.__views.txtEmail);
    $.__views.__alloyId204 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId204"
    });
    __alloyId190.push($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Contraseña",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.txtPass = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        passwordMask: "true",
        id: "txtPass"
    });
    $.__views.__alloyId204.add($.__views.txtPass);
    $.__views.__alloyId206 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId206"
    });
    __alloyId190.push($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Ayuda activa",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.chkAyuda = Ti.UI.createSwitch({
        enabled: "true",
        left: "80%",
        id: "chkAyuda"
    });
    $.__views.__alloyId206.add($.__views.chkAyuda);
    $.__views.__alloyId208 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId208"
    });
    __alloyId190.push($.__views.__alloyId208);
    $.__views.lblError = Ti.UI.createLabel({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblError",
        visible: "false"
    });
    $.__views.__alloyId208.add($.__views.lblError);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        data: __alloyId190,
        id: "Marco"
    });
    $.__views.winUsuario.add($.__views.Marco);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winUsuario.add($.__views.btnGuardar);
    Guardar ? $.__views.btnGuardar.addEventListener("click", Guardar) : __defers["$.__views.btnGuardar!click!Guardar"] = true;
    $.__views.btnAlta = Ti.UI.createButton({
        top: "85%",
        left: "42%",
        id: "btnAlta",
        title: "Alta"
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
        if ("" == $.txtEmail.value) {
            var dialog = Ti.UI.createAlertDialog({
                title: "Introduzca su Email (No permite modificación)",
                style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
                buttonNames: [ "Aceptar", "Cancelar" ],
                cancel: 1
            });
            dialog.addEventListener("click", function(e) {
                e.index === e.source.cancel || ($.txtEmail.value = e.text);
            });
            dialog.show();
        } else alert("No se puede modificar el Email");
    });
    $.txtPass.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el correo electrónico",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtPass.value = e.text);
        });
        dialog.show();
    });
    $.winUsuario.addEventListener("focus", function() {
        refreshScreen();
    });
    $.winUsuario.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.btnGuardar!click!Guardar"] && $.__views.btnGuardar.addEventListener("click", Guardar);
    __defers["$.__views.btnAlta!click!Alta"] && $.__views.btnAlta.addEventListener("click", Alta);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;