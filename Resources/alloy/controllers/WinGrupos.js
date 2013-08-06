function Controller() {
    function __alloyId137() {
        var models = __alloyId136.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId134 = models[i];
            __alloyId134.__transform = {};
            var __alloyId135 = Alloy.createController("GradoRow", {
                $model: __alloyId134
            });
            rows.push(__alloyId135.getViewEx({
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
    var __alloyId136 = Alloy.Collections["Grado"] || Grado;
    __alloyId136.on("fetch destroy change add remove reset", __alloyId137);
    exports.destroy = function() {
        __alloyId136.off("fetch destroy change add remove reset", __alloyId137);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;