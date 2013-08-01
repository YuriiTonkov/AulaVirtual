function Controller() {
    function __alloyId97() {
        var models = __alloyId96.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId94 = models[i];
            __alloyId94.__transform = {};
            var __alloyId95 = Alloy.createController("GradoRow", {
                $model: __alloyId94
            });
            rows.push(__alloyId95.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaGrados.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.winGrados = Ti.UI.createWindow({
        id: "winGrados",
        title: "Grados"
    });
    $.__views.winGrados && $.addTopLevelView($.__views.winGrados);
    $.__views.TablaGrados = Ti.UI.createTableView({
        id: "TablaGrados"
    });
    $.__views.winGrados.add($.__views.TablaGrados);
    var __alloyId96 = Alloy.Collections["Grado"] || Grado;
    __alloyId96.on("fetch destroy change add remove reset", __alloyId97);
    exports.destroy = function() {
        __alloyId96.off("fetch destroy change add remove reset", __alloyId97);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;