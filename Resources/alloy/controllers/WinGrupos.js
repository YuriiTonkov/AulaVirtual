function Controller() {
    function __alloyId111() {
        __alloyId111.opts || {};
        var models = __alloyId110.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId108 = models[i];
            __alloyId108.__transform = {};
            var __alloyId109 = Alloy.createController("GradoRow", {
                $model: __alloyId108
            });
            rows.push(__alloyId109.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaGrados.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinGrupos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winGrados = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "EEE",
        id: "winGrados",
        title: "Grados"
    });
    $.__views.winGrados && $.addTopLevelView($.__views.winGrados);
    $.__views.TablaGrados = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "TablaGrados"
    });
    $.__views.winGrados.add($.__views.TablaGrados);
    var __alloyId110 = Alloy.Collections["Grado"] || Grado;
    __alloyId110.on("fetch destroy change add remove reset", __alloyId111);
    exports.destroy = function() {
        __alloyId110.off("fetch destroy change add remove reset", __alloyId111);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    $.winGrados.addEventListener("focus", function() {
        if ("1" == Ti.App.Properties.getString("Ayuda")) {
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los Grados disponibles de acuerdo a la LOCE",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
        }
    });
    $.winGrados.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;