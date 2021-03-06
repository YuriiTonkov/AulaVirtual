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
    this.__controllerPath = "BotoneraClase";
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
    var __alloyId7 = [];
    var __alloyId8 = {
        image: "/library/images/iphone/icons/iconoAddAlumno.png"
    };
    __alloyId7.push(__alloyId8);
    var __alloyId9 = {
        image: "/library/images/iphone/icons/iconoAddAlumnoCloud.png"
    };
    __alloyId7.push(__alloyId9);
    var __alloyId10 = {
        image: "/library/images/iphone/icons/iconoAddFavorito.png"
    };
    __alloyId7.push(__alloyId10);
    var __alloyId11 = {
        image: "/library/images/iphone/icons/iconoMandarNotaClase.png"
    };
    __alloyId7.push(__alloyId11);
    $.__views.btnBar = Ti.UI.createButtonBar({
        labels: __alloyId7,
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
    var buttonObjectsEDDD = [ {
        image: "/library/images/iphone/icons/iconoAddAlumno.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoAddAlumnoCloud.png",
        width: 24,
        enabled: false
    }, {
        image: "/library/images/iphone/icons/iconoAddFavorito.png",
        width: 24,
        enabled: false
    }, {
        image: "/library/images/iphone/icons/iconoMandarNotaClase.png",
        width: 24,
        enabled: false
    } ];
    var buttonObjectsEEDE = [ {
        image: "/library/images/iphone/icons/iconoAddAlumno.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoAddAlumnoCloud.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoAddFavorito.png",
        width: 24,
        enabled: false
    }, {
        image: "/library/images/iphone/icons/iconoMandarNotaClase.png",
        width: 24,
        enabled: true
    } ];
    var buttonObjectsEDED = [ {
        image: "/library/images/iphone/icons/iconoAddAlumno.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoAddAlumnoCloud.png",
        width: 24,
        enabled: false
    }, {
        image: "/library/images/iphone/icons/iconoAddFavorito.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoMandarNotaClase.png",
        width: 24,
        enabled: false
    } ];
    var buttonObjectsEEEE = [ {
        image: "/library/images/iphone/icons/iconoAddAlumno.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoAddAlumnoCloud.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoAddFavorito.png",
        width: 24,
        enabled: true
    }, {
        image: "/library/images/iphone/icons/iconoMandarNotaClase.png",
        width: 24,
        enabled: true
    } ];
    $.btnBar.style = Titanium.UI.iPhone.SystemButtonStyle.BAR;
    var colClase = Alloy.createCollection("Clase");
    colClase.fetch();
    var model = colClase.get(data.IdClase);
    var datos = model.toJSON();
    if (1 == datos.Favorita) if (void 0 == Ti.App.Properties.getString("UsuarioCloud")) {
        var buttons = buttonObjectsEDDD;
        $.btnBar.labels = buttons;
    } else {
        var buttons = buttonObjectsEEDE;
        $.btnBar.labels = buttons;
    } else if (void 0 == Ti.App.Properties.getString("UsuarioCloud")) {
        var buttons = buttonObjectsEDED;
        $.btnBar.labels = buttons;
    } else {
        var buttons = buttonObjectsEEEE;
        $.btnBar.labels = buttons;
    }
    $.btnBar.addEventListener("click", function(e) {
        switch (e.index) {
          case 0:
            var tabAlumnosController = Alloy.createController("NuevoAlumno", {
                IdClase: data.IdClase
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
            break;

          case 1:
            var tabAlumnosCloudController = Alloy.createController("NuevoAlumnoCloud", {
                IdClase: data.IdClase
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosCloudController.getView());
            break;

          case 2:
            colClase.updateFavorito(data.IdClase, 1);
            var buttons = buttonObjectsEEDE;
            $.btnBar.labels = buttons;
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Aviso",
                message: "La clase se ha guardado en favoritos. Podrá acceder a través de la pestaña FAVORITOS",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
            break;

          case 3:
            var tabAlumnosCloudController = Alloy.createController("notasAlumno", {
                IdClase: data.IdClase
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosCloudController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;