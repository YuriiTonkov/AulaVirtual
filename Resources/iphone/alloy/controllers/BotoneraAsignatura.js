function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "BotoneraAsignatura";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.botones = Ti.UI.createView({
        height: "25dp",
        width: "110dp",
        id: "botones"
    });
    $.__views.botones && $.addTopLevelView($.__views.botones);
    var __alloyId1 = [];
    var __alloyId2 = {
        image: "/library/images/iphone/icons/iconoAddAlumno.png"
    };
    __alloyId1.push(__alloyId2);
    var __alloyId3 = {
        image: "/library/images/iphone/icons/iconoAddFavorito.png"
    };
    __alloyId1.push(__alloyId3);
    var __alloyId4 = {
        image: "/library/images/iphone/icons/iconoAddAlumnoCloud.png"
    };
    __alloyId1.push(__alloyId4);
    var __alloyId5 = {
        image: "/library/images/iphone/icons/iconoMandarNotaClase.png"
    };
    __alloyId1.push(__alloyId5);
    $.__views.btnBar = Ti.UI.createButtonBar({
        labels: __alloyId1,
        height: "100%",
        width: "100%",
        id: "btnBar",
        tintColor: "white",
        left: "10"
    });
    $.__views.botones.add($.__views.btnBar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.btnBar.style = Titanium.UI.iPhone.SystemButtonStyle.BAR;
    var colAsignatura = Alloy.createCollection("Asignatura");
    colAsignatura.fetch();
    var model = colAsignatura.get(data.IdAsignatura);
    var datos = model.toJSON();
    if (1 == datos.Favorita) {
        var buttons = [ {
            image: "/library/images/iphone/icons/iconoAddAlumno.png",
            width: 24,
            enabled: true
        }, {
            image: "/library/images/iphone/icons/iconoAddFavorito.png",
            width: 24,
            enabled: false
        }, {
            image: "/library/images/iphone/icons/iconoCrearExamen.png",
            width: 24,
            enabled: true
        }, {
            image: "/library/images/iphone/icons/iconoMandarNotaClase.png",
            width: 24,
            enabled: true
        } ];
        $.btnBar.labels = buttons;
    }
    $.btnBar.addEventListener("click", function(e) {
        switch (e.index) {
          case 0:
            var tabAlumnosController = Alloy.createController("addAlumno", {
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
            break;

          case 1:
            colAsignatura.updateFavorito(data.IdAsignatura, 1);
            var buttons = [ {
                image: "/library/images/iphone/icons/iconoAddAlumno.png",
                width: 24,
                enabled: true
            }, {
                image: "/library/images/iphone/icons/iconoAddFavorito.png",
                width: 24,
                enabled: false
            }, {
                image: "/library/images/iphone/icons/iconoCrearExamen.png",
                width: 24,
                enabled: true
            }, {
                image: "/library/images/iphone/icons/iconoMandarNotaClase.png",
                width: 24,
                enabled: true
            } ];
            $.btnBar.labels = buttons;
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Aviso",
                message: "La Asignatura se ha guardado en favoritos. Podrá acceder a través de la pestaña Mis Asignaturas",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
            break;

          case 2:
            var tabAlumnosController = Alloy.createController("examenesAsignatura", {
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
            break;

          case 3:
            var tabAlumnosController = Alloy.createController("notasAlumno", {
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;