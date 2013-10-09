function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "BotoneraClase";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.botones = Ti.UI.createView({
        backgroundColor: "white",
        borderRadius: "5dp",
        height: "30dp",
        width: "50dp",
        id: "botones"
    });
    $.__views.botones && $.addTopLevelView($.__views.botones);
    var __alloyId5 = [];
    var __alloyId6 = {
        title: "+",
        ns: "Alloy.Abstract"
    };
    __alloyId5.push(__alloyId6);
    var __alloyId7 = {
        title: "(+)",
        ns: "Alloy.Abstract"
    };
    __alloyId5.push(__alloyId7);
    var __alloyId8 = {
        title: "*",
        ns: "Alloy.Abstract"
    };
    __alloyId5.push(__alloyId8);
    $.__views.btnBar = Ti.UI.createButtonBar({
        labels: __alloyId5,
        borderRadius: "5dp",
        height: "100%",
        width: "100%",
        id: "btnBar"
    });
    $.__views.botones.add($.__views.btnBar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.btnBar.style = Titanium.UI.iPhone.SystemButtonStyle.BAR;
    var colClase = Alloy.createCollection("Clase");
    colClase.fetch();
    var model = colClase.get(data.IdClase);
    var datos = model.toJSON();
    if (1 == datos.Favorita) if (void 0 == Ti.App.Properties.getString("UsuarioCloud")) {
        var buttons = [ {
            title: "+",
            enabled: true
        }, {
            title: "(+)",
            enabled: false
        }, {
            title: "*",
            enabled: false
        } ];
        $.btnBar.labels = buttons;
    } else {
        var buttons = [ {
            title: "+",
            enabled: true
        }, {
            title: "(+)",
            enabled: true
        }, {
            title: "*",
            enabled: false
        } ];
        $.btnBar.labels = buttons;
    } else if (void 0 == Ti.App.Properties.getString("UsuarioCloud")) {
        var buttons = [ {
            title: "+",
            enabled: true
        }, {
            title: "(+)",
            enabled: false
        }, {
            title: "*",
            enabled: true
        } ];
        $.btnBar.labels = buttons;
    } else {
        var buttons = [ {
            title: "+",
            enabled: true
        }, {
            title: "(+)",
            enabled: true
        }, {
            title: "*",
            enabled: true
        } ];
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
            var tabAlumnosCloudController = Alloy.createController("NuevoAlumnoCloud", {});
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosCloudController.getView());
            break;

          case 2:
            colClase.updateFavorito(data.IdClase, 1);
            var buttons = [ {
                title: "+",
                enabled: true
            }, {
                title: "(+)",
                enabled: true
            }, {
                title: "*",
                enabled: false
            } ];
            $.btnBar.labels = buttons;
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Aviso",
                message: "La clase se ha guardado en favoritos. Podrá acceder a través de la pestaña FAVORITOS",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;