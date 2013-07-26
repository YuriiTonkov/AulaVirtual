function Controller() {
    function __alloyId68() {
        var models = __alloyId67.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId65 = models[i];
            __alloyId65.__transform = {};
            var __alloyId66 = Alloy.createController("GradoRow", {
                $model: __alloyId65
            });
            rows.push(__alloyId66.getViewEx({
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
    var __alloyId67 = Alloy.Collections["Grado"] || Grado;
    __alloyId67.on("fetch destroy change add remove reset", __alloyId68);
    exports.destroy = function() {
        __alloyId67.off("fetch destroy change add remove reset", __alloyId68);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;