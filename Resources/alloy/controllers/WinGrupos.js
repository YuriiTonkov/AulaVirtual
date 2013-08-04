function Controller() {
    function __alloyId111() {
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
    var __alloyId110 = Alloy.Collections["Grado"] || Grado;
    __alloyId110.on("fetch destroy change add remove reset", __alloyId111);
    exports.destroy = function() {
        __alloyId110.off("fetch destroy change add remove reset", __alloyId111);
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;