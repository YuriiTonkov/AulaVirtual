function Controller() {
    function __alloyId157(e) {
        if (e && e.fromAdapter) return;
        __alloyId157.opts || {};
        var models = __alloyId156.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId151 = models[i];
            __alloyId151.__transform = {};
            var __alloyId153 = Alloy.createController("GradoRow", {
                $model: __alloyId151,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId153.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaGrados.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinGrupos";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winGrados = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "winGrados",
        title: "Grados"
    });
    $.__views.winGrados && $.addTopLevelView($.__views.winGrados);
    $.__views.__alloyId150 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/01HeaderGrados.png",
        height: "70dp",
        id: "__alloyId150"
    });
    $.__views.__alloyId155 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/01FooterGrados.png",
        id: "__alloyId155"
    });
    $.__views.TablaGrados = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        headerView: $.__views.__alloyId150,
        footerView: $.__views.__alloyId155,
        id: "TablaGrados"
    });
    $.__views.winGrados.add($.__views.TablaGrados);
    var __alloyId156 = Alloy.Collections["Grado"] || Grado;
    __alloyId156.on("fetch destroy change add remove reset", __alloyId157);
    exports.destroy = function() {
        __alloyId156.off("fetch destroy change add remove reset", __alloyId157);
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