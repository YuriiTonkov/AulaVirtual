function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
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
    var __alloyId7 = [];
    var __alloyId8 = {
        title: "+",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId8);
    var __alloyId9 = {
        title: "*",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId9);
    $.__views.btnBar = Ti.UI.createButtonBar({
        labels: __alloyId7,
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
    var colAsignatura = Alloy.createCollection("Asignatura");
    colAsignatura.fetch();
    var model = colAsignatura.get(data.IdAsignatura);
    var datos = model.toJSON();
    if (1 == datos.Favorita) {
        var buttons = [ {
            title: "+",
            enabled: true
        }, {
            title: "*",
            enabled: false
        } ];
        $.btnBar.labels = buttons;
    }
    $.btnBar.addEventListener("click", function(e) {
        if (0 == e.index) {
            var tabAlumnosController = Alloy.createController("addAlumno", {
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
        } else {
            colAsignatura.updateFavorito(data.IdAsignatura, 1);
            var buttons = [ {
                title: "+",
                enabled: true
            }, {
                title: "*",
                enabled: false
            } ];
            $.btnBar.labels = buttons;
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Aviso",
                message: "La Asignatura se ha guardado en favoritos. Podrá acceder a través de la pestaña FAVORITOS",
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