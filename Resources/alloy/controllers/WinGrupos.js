function Controller() {
    function __alloyId94() {
        var models = __alloyId93.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId91 = models[i];
            __alloyId91.__transform = {};
            var __alloyId92 = Alloy.createController("GradoRow", {
                $model: __alloyId91
            });
            rows.push(__alloyId92.getViewEx({
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
    var __alloyId93 = Alloy.Collections["Grado"] || Grado;
    __alloyId93.on("fetch destroy change add remove reset", __alloyId94);
    exports.destroy = function() {
        __alloyId93.off("fetch destroy change add remove reset", __alloyId94);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;