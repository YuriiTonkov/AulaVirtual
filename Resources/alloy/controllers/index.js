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
    Alloy.Collections.instance("VW_Clases_Favoritas");
    Alloy.Collections.instance("VW_Asignaturas_Favoritas");
    $.__views.GrupoTab = Ti.UI.createTabGroup({
        backgroundImage: "backGround320x480Base.png",
        id: "GrupoTab"
    });
    $.__views.__alloyId55 = Alloy.createController("TabPrincipal", {
        id: "__alloyId55"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId55.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId57 = Alloy.createController("tabFavoritos", {
        id: "__alloyId57"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId57.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId59 = Alloy.createController("TabAsignaturasFavoritas", {
        id: "__alloyId59"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId59.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId61 = Alloy.createController("TabConfiguracion", {
        id: "__alloyId61"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId61.getViewEx({
        recurse: true
    }));
    $.__views.GrupoTab && $.addTopLevelView($.__views.GrupoTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.GrupoTab.open();
    Alloy.Globals.GrupoTab = $.GrupoTab;
    Ti.App.Properties.setString("Ayuda", 0);
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
            backgroundImage: "backGround320x416Login.png"
        });
        window.open({
            modal: true,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
        });
        var txtLogin = Titanium.UI.createTextField({
            top: 60,
            left: 35,
            width: 245,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Usuario"
        });
        var txtPass = Titanium.UI.createTextField({
            top: 110,
            left: 35,
            width: 245,
            passwordMask: "true",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Contraseña"
        });
        var emailField = Titanium.UI.createTextField({
            top: 160,
            left: 35,
            width: 245,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            hintText: "Email"
        });
        window.add(txtLogin);
        window.add(txtPass);
        window.add(emailField);
        window.setRightNavButton(btnGuardar);
    } else {
        var window = Titanium.UI.createWindow({
            title: "Login",
            backgroundImage: "backGround320x416Login.png"
        });
        window.open({
            modal: true,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
        });
        var lblLogin = Titanium.UI.createLabel({
            color: "#000",
            text: "Usuario:",
            top: 60,
            left: 35,
            width: 245,
            height: "auto",
            font: {
                fontSize: "15dp",
                fontFamily: "Helvetica Neue"
            }
        });
        var lblPass = Titanium.UI.createLabel({
            color: "#000",
            text: "Contraseña:",
            top: 130,
            left: 35,
            width: 245,
            height: "auto",
            font: {
                fontSize: "15dp",
                fontFamily: "Helvetica Neue"
            }
        });
        var lblError = Titanium.UI.createLabel({
            color: "#f00",
            visible: "false",
            top: 300,
            left: 35,
            width: "100%",
            height: "auto",
            font: {
                fontSize: "15dp",
                fontFamily: "Helvetica Neue"
            }
        });
        var txtLogin = Titanium.UI.createTextField({
            top: 90,
            left: 35,
            width: 245,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            font: {
                fontSize: "15dp",
                fontFamily: "Helvetica Neue"
            }
        });
        var txtPass = Titanium.UI.createTextField({
            top: 160,
            left: 35,
            width: 245,
            passwordMask: "true",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            font: {
                fontSize: "15dp",
                fontFamily: "Helvetica Neue"
            }
        });
        var lblAyuda = Titanium.UI.createLabel({
            color: "#000",
            text: "Ayuda activa:",
            top: 220,
            left: 65,
            width: 100,
            height: "auto",
            font: {
                fontSize: "15dp",
                fontFamily: "Helvetica Neue"
            }
        });
        var chkAyuda = Titanium.UI.createSwitch({
            value: false,
            top: 215,
            left: 160,
            width: "40",
            height: "auto"
        });
        window.add(lblLogin);
        window.add(lblPass);
        window.add(lblError);
        window.add(lblAyuda);
        window.add(txtLogin);
        window.add(txtPass);
        window.add(chkAyuda);
        window.setRightNavButton(btnLogin);
        txtLogin.value = Ti.App.Properties.getString("Login");
    }
    btnGuardar.addEventListener("click", function() {
        Ti.App.Properties.setString("Login", txtLogin.value);
        Ti.App.Properties.setString("Pass", txtPass.value);
        Ti.App.Properties.setString("Email", emailField.value);
        Ti.App.Properties.setString("Ayuda", 1);
        window.close();
    });
    btnLogin.addEventListener("click", function() {
        if (Ti.App.Properties.getString("Login") == txtLogin.value && Ti.App.Properties.getString("Pass") == txtPass.value) {
            Ti.App.Properties.setString("Ayuda", chkAyuda.value);
            window.close();
        } else {
            lblError.text = "Usuario/Contraseña incorrecta";
            lblError.visible = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;