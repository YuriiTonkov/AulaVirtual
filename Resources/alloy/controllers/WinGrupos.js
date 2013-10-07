function Controller() {
    function __alloyId87() {
        __alloyId87.opts || {};
        var models = __alloyId86.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId84 = models[i];
            __alloyId84.__transform = {};
            var __alloyId85 = Alloy.createController("GradoRow", {
                $model: __alloyId84
            });
            rows.push(__alloyId85.getViewEx({
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
        id: "winGrados",
        title: "Grados"
    });
    $.__views.winGrados && $.addTopLevelView($.__views.winGrados);
    $.__views.TablaGrados = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        id: "TablaGrados"
    });
    $.__views.winGrados.add($.__views.TablaGrados);
    var __alloyId86 = Alloy.Collections["Grado"] || Grado;
    __alloyId86.on("fetch destroy change add remove reset", __alloyId87);
    exports.destroy = function() {
        __alloyId86.off("fetch destroy change add remove reset", __alloyId87);
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