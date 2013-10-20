function Controller() {
    function __alloyId115() {
        __alloyId115.opts || {};
        var models = __alloyId114.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId110 = models[i];
            __alloyId110.__transform = {};
            var __alloyId111 = Alloy.createController("GradoRow", {
                $model: __alloyId110
            });
            rows.push(__alloyId111.getViewEx({
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
        backgroundColor: "e2effa",
        id: "winGrados",
        title: "Grados"
    });
    $.__views.winGrados && $.addTopLevelView($.__views.winGrados);
    $.__views.TablaGrados = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaGrados"
    });
    $.__views.winGrados.add($.__views.TablaGrados);
    $.__views.__alloyId108 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/01HeaderGrados.png",
        id: "__alloyId108"
    });
    $.__views.TablaGrados.headerView = $.__views.__alloyId108;
    $.__views.__alloyId113 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/01FooterGrados.png",
        id: "__alloyId113"
    });
    $.__views.TablaGrados.footerView = $.__views.__alloyId113;
    var __alloyId114 = Alloy.Collections["Grado"] || Grado;
    __alloyId114.on("fetch destroy change add remove reset", __alloyId115);
    exports.destroy = function() {
        __alloyId114.off("fetch destroy change add remove reset", __alloyId115);
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