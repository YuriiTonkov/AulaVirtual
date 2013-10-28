function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    Alloy.Collections.instance("Anotacion");
    $.__views.GrupoTab = Ti.UI.createTabGroup({
        id: "GrupoTab"
    });
    $.__views.__alloyId171 = Alloy.createController("TabPrincipal", {
        id: "__alloyId171"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId171.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId173 = Alloy.createController("tabFavoritos", {
        id: "__alloyId173"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId173.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId175 = Alloy.createController("TabAsignaturasFavoritas", {
        id: "__alloyId175"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId175.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId177 = Alloy.createController("TabConfiguracion", {
        id: "__alloyId177"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId177.getViewEx({
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
        top: 190,
        left: 35,
        style: Ti.UI.iPhone.SystemButton.SAVE
    });
    var btnLogin = Ti.UI.createButton({
        title: "Login",
        top: 210,
        left: 0/0,
        width: 60,
        backgroundImage: "library/images/iphone/iconLogin.png",
        color: "e2effa"
    });
    if (void 0 == Ti.App.Properties.getString("Login")) {
        var window = Titanium.UI.createWindow({
            title: "Nuevo usuario"
        });
        window.backgroundImage = 568 > Titanium.Platform.displayCaps.platformHeight ? "library/images/iphone/backGround640x920Login.png" : "library/images/iphone/backGround640x1136Login.png";
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
        window.add(btnGuardar);
    } else {
        var window = Titanium.UI.createWindow({
            title: "Datos de Acceso"
        });
        window.backgroundImage = 568 > Titanium.Platform.displayCaps.platformHeight ? "library/images/iphone/backGround640x920Login.png" : "library/images/iphone/backGround640x1136Login.png";
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
                fontSize: "15dp"
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
                fontSize: "15dp"
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
                fontSize: "15dp"
            }
        });
        var txtLogin = Titanium.UI.createTextField({
            top: 90,
            left: 35,
            width: 245,
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            font: {
                fontSize: "15dp"
            }
        });
        var txtPass = Titanium.UI.createTextField({
            top: 160,
            left: 35,
            width: 245,
            passwordMask: "true",
            borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
            font: {
                fontSize: "15dp"
            }
        });
        var lblAyuda = Titanium.UI.createLabel({
            color: "#000",
            text: "Ayuda activa:",
            top: 250,
            left: 65,
            width: 100,
            height: "auto",
            font: {
                fontSize: "15dp"
            }
        });
        var chkAyuda = Titanium.UI.createSwitch({
            value: false,
            top: 245,
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
        window.add(btnLogin);
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
            void 0 != Ti.App.Properties.getString("UsuarioCloud") && Cloud.Users.login({
                login: Ti.App.Properties.getString("Email"),
                password: "AulaVirtual"
            }, function(e) {
                e.success ? Ti.API.info("Logged in user, id = " + e.users[0].id + ", session ID = " + Cloud.sessionId) : Ti.API.info("Login failed.");
            });
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