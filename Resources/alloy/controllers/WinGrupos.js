function Controller() {
    function __alloyId93() {
        var models = __alloyId92.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId90 = models[i];
            __alloyId90.__transform = {};
            var __alloyId91 = Alloy.createController("GradoRow", {
                $model: __alloyId90
            });
            rows.push(__alloyId91.getViewEx({
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
    var __alloyId92 = Alloy.Collections["Grado"] || Grado;
    __alloyId92.on("fetch destroy change add remove reset", __alloyId93);
    exports.destroy = function() {
        __alloyId92.off("fetch destroy change add remove reset", __alloyId93);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;