function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Grado");
    Alloy.Collections.instance("Curso");
    Alloy.Collections.instance("Clase");
    Alloy.Collections.instance("Alumno");
    Alloy.Collections.instance("VW_Alumno_Asignatura_Asignatura");
    Alloy.Collections.instance("VW_Asignatura_Alumno_Left");
    Alloy.Collections.instance("Alumno_Asignatura");
    Alloy.Collections.instance("Evaluacion");
    Alloy.Collections.instance("Examen");
    Alloy.Collections.instance("Asignatura");
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId36 = Alloy.createController("TabPrincipal", {
        id: "__alloyId36"
    });
    $.__views.index.addTab($.__views.__alloyId36.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var btnGuardar = Ti.UI.createButton({
        title: "Alta",
        style: Ti.UI.iPhone.SystemButton.SAVE
    });
    var btnLogin = Ti.UI.createButton({
        title: "Login",
        style: Ti.UI.iPhone.SystemButton.SAVE
    });
    if (void 0 == Ti.App.Properties.getString("Login")) {
        var window = Titanium.UI.createWindow({
            title: "Nuevo usuario",
            backgroundColor: "#fff"
        });
        window.open({
            modal: true,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
        });
        var lblLogin = Titanium.UI.createLabel({
            color: "#000",
            text: "Usuario:",
            top: 15,
            left: 5,
            width: 100,
            height: "auto"
        });
        var lblPass = Titanium.UI.createLabel({
            color: "#000",
            text: "Contraseña:",
            top: 60,
            left: 5,
            width: 100,
            height: "auto"
        });
        var lblEmail = Titanium.UI.createLabel({
            color: "#000",
            text: "Email:",
            top: 105,
            left: 5,
            width: 100,
            height: "auto"
        });
        var txtLogin = Titanium.UI.createTextField({
            top: 15,
            left: 110,
            width: 180,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
        });
        var txtPass = Titanium.UI.createTextField({
            top: 60,
            left: 110,
            width: 180,
            passwordMask: "true",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
        });
        var emailField = Titanium.UI.createTextField({
            top: 105,
            left: 110,
            width: 180,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
        });
        window.add(lblLogin);
        window.add(lblPass);
        window.add(lblEmail);
        window.add(txtLogin);
        window.add(txtPass);
        window.add(emailField);
        window.setRightNavButton(btnGuardar);
    } else {
        var window = Titanium.UI.createWindow({
            title: "Login",
            backgroundColor: "#fff"
        });
        window.open({
            modal: true,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
        });
        var lblLogin = Titanium.UI.createLabel({
            color: "#000",
            text: "Usuario:",
            top: 15,
            left: 5,
            width: 100,
            height: "auto"
        });
        var lblPass = Titanium.UI.createLabel({
            color: "#000",
            text: "Contraseña:",
            top: 60,
            left: 5,
            width: 100,
            height: "auto"
        });
        var lblError = Titanium.UI.createLabel({
            color: "#f00",
            visible: "false",
            top: 105,
            left: 5,
            width: "100%",
            height: "auto"
        });
        var txtLogin = Titanium.UI.createTextField({
            top: 15,
            left: 110,
            width: 180,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
        });
        var txtPass = Titanium.UI.createTextField({
            top: 60,
            left: 110,
            width: 180,
            passwordMask: "true",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
        });
        window.add(lblLogin);
        window.add(lblPass);
        window.add(lblError);
        window.add(txtLogin);
        window.add(txtPass);
        window.setRightNavButton(btnLogin);
        txtLogin.value = Ti.App.Properties.getString("Login");
    }
    btnGuardar.addEventListener("click", function() {
        Ti.App.Properties.setString("Login", txtLogin.value);
        Ti.App.Properties.setString("Pass", txtPass.value);
        Ti.App.Properties.setString("Email", emailField);
        window.close();
    });
    btnLogin.addEventListener("click", function() {
        if (Ti.App.Properties.getString("Login") == txtLogin.value && Ti.App.Properties.getString("Pass") == txtPass.value) window.close(); else {
            lblError.text = "Usuario/Contraseña incorrecta";
            lblError.visible = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;