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
            Ti.App.Properties.setString("Email", $.txtEmail.value);
            Ti.App.Properties.setString("Ayuda", $.chkAyuda.value);
            $.lblError.text = "Se han modificado los datos de registro";
            $.lblError.visible = true;
        } else {
            $.lblError.text = "Contraseña incorrecta";
            $.lblError.visible = true;
        }
        if (void 0 != Ti.App.Properties.getString("UsuarioCloud")) {
            var data = {
                email: $.txtEmail.value,
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
                e.success ? alert("Updated!") : error(e);
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
        backgroundColor: "white",
        id: "winUsuario",
        title: "Perfil usuario"
    });
    $.__views.winUsuario && $.addTopLevelView($.__views.winUsuario);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Nombre",
        top: "2%",
        id: "__alloyId157"
    });
    $.__views.winUsuario.add($.__views.__alloyId157);
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "2%",
        id: "txtNombre"
    });
    $.__views.winUsuario.add($.__views.txtNombre);
    $.__views.__alloyId158 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "1er Apellido",
        top: "10%",
        id: "__alloyId158"
    });
    $.__views.winUsuario.add($.__views.__alloyId158);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "10%",
        id: "txtApellido1"
    });
    $.__views.winUsuario.add($.__views.txtApellido1);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "2o Apellido",
        top: "18%",
        id: "__alloyId159"
    });
    $.__views.winUsuario.add($.__views.__alloyId159);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "18%",
        id: "txtApellido2"
    });
    $.__views.winUsuario.add($.__views.txtApellido2);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Direccion",
        top: "26%",
        id: "__alloyId160"
    });
    $.__views.winUsuario.add($.__views.__alloyId160);
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "26%",
        id: "txtDireccion"
    });
    $.__views.winUsuario.add($.__views.txtDireccion);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Cod.Postal",
        top: "34%",
        id: "__alloyId161"
    });
    $.__views.winUsuario.add($.__views.__alloyId161);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "34%",
        id: "txtCodPostal"
    });
    $.__views.winUsuario.add($.__views.txtCodPostal);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Telefono",
        top: "42%",
        id: "__alloyId162"
    });
    $.__views.winUsuario.add($.__views.__alloyId162);
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "42%",
        id: "txtTelefono"
    });
    $.__views.winUsuario.add($.__views.txtTelefono);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Email",
        top: "50%",
        id: "__alloyId163"
    });
    $.__views.winUsuario.add($.__views.__alloyId163);
    $.__views.txtEmail = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        top: "50%",
        id: "txtEmail"
    });
    $.__views.winUsuario.add($.__views.txtEmail);
    $.__views.__alloyId164 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Contraseña",
        top: "60%",
        id: "__alloyId164"
    });
    $.__views.winUsuario.add($.__views.__alloyId164);
    $.__views.txtPass = Ti.UI.createTextField({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "50%",
        left: "42%",
        font: {
            fontSize: "13dp"
        },
        passwordMask: "true",
        top: "60%",
        id: "txtPass"
    });
    $.__views.winUsuario.add($.__views.txtPass);
    $.__views.__alloyId165 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Ayuda activa",
        top: "73%",
        id: "__alloyId165"
    });
    $.__views.winUsuario.add($.__views.__alloyId165);
    $.__views.chkAyuda = Ti.UI.createSwitch({
        enabled: "true",
        top: "70%",
        left: "42%",
        id: "chkAyuda"
    });
    $.__views.winUsuario.add($.__views.chkAyuda);
    $.__views.lblError = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        id: "lblError",
        visible: "false",
        top: "80%"
    });
    $.__views.winUsuario.add($.__views.lblError);
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