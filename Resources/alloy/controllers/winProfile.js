function Controller() {
    function refreshScreen() {
        void 0 != Ti.App.Properties.getString("Nombre") && ($.txtNombre.value = Ti.App.Properties.getString("Nombre"));
        void 0 != Ti.App.Properties.getString("Apellido1") && ($.txtApellido1.value = Ti.App.Properties.getString("Apellido1"));
        void 0 != Ti.App.Properties.getString("Apellido2") && ($.txtApellido2.value = Ti.App.Properties.getString("Apellido2"));
        void 0 != Ti.App.Properties.getString("Direccion") && ($.txtDireccion.value = Ti.App.Properties.getString("Direccion"));
        void 0 != Ti.App.Properties.getString("CP") && ($.txtCodPostal.value = Ti.App.Properties.getString("CP"));
        void 0 != Ti.App.Properties.getString("Telefono") && ($.txtTelefono.value = Ti.App.Properties.getString("Telefono"));
        void 0 != Ti.App.Properties.getString("Email") && ($.txtEmail.value = Ti.App.Properties.getString("Email"));
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
            $.lblError.text = "Se han modificado los datos de registro";
            $.lblError.visible = true;
        } else {
            $.lblError.text = "Contraseña incorrecta";
            $.lblError.visible = true;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winUsuario = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winUsuario",
        title: "Perfil usuario"
    });
    $.__views.winUsuario && $.addTopLevelView($.__views.winUsuario);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Nombre",
        top: "2%",
        id: "__alloyId112"
    });
    $.__views.winUsuario.add($.__views.__alloyId112);
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
    $.__views.__alloyId113 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "1er Apellido",
        top: "10%",
        id: "__alloyId113"
    });
    $.__views.winUsuario.add($.__views.__alloyId113);
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
    $.__views.__alloyId114 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "2o Apellido",
        top: "18%",
        id: "__alloyId114"
    });
    $.__views.winUsuario.add($.__views.__alloyId114);
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
    $.__views.__alloyId115 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Direccion",
        top: "26%",
        id: "__alloyId115"
    });
    $.__views.winUsuario.add($.__views.__alloyId115);
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
    $.__views.__alloyId116 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Cod.Postal",
        top: "34%",
        id: "__alloyId116"
    });
    $.__views.winUsuario.add($.__views.__alloyId116);
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
    $.__views.__alloyId117 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Telefono",
        top: "42%",
        id: "__alloyId117"
    });
    $.__views.winUsuario.add($.__views.__alloyId117);
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
    $.__views.__alloyId118 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Email",
        top: "50%",
        id: "__alloyId118"
    });
    $.__views.winUsuario.add($.__views.__alloyId118);
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
    $.__views.__alloyId119 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        text: "Contraseña",
        top: "60%",
        id: "__alloyId119"
    });
    $.__views.winUsuario.add($.__views.__alloyId119);
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
    $.__views.lblError = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "13dp"
        },
        id: "lblError",
        visible: "false",
        top: "68%"
    });
    $.__views.winUsuario.add($.__views.lblError);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winUsuario.add($.__views.btnGuardar);
    Guardar ? $.__views.btnGuardar.addEventListener("click", Guardar) : __defers["$.__views.btnGuardar!click!Guardar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.winUsuario.setRightNavButton($.btnGuardar);
    $.winUsuario.addEventListener("focus", function() {
        refreshScreen();
    });
    __defers["$.__views.btnGuardar!click!Guardar"] && $.__views.btnGuardar.addEventListener("click", Guardar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;