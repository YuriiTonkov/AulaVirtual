function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TabAsignaturasFavoritas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId37 = Alloy.createController("WinAsignaturasFav", {
        id: "__alloyId37"
    });
    $.__views.TabAsignaturasFavoritas = Ti.UI.createTab({
        window: $.__views.__alloyId37.getViewEx({
            recurse: true
        }),
        title: "Mis asignaturas",
        icon: "KS_nav_Exams.png",
        id: "TabAsignaturasFavoritas"
    });
    $.__views.TabAsignaturasFavoritas && $.addTopLevelView($.__views.TabAsignaturasFavoritas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.tabGroup4 = $.tabFavoritos;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;