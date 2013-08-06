function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId79 = Alloy.createController("WinAsignaturasFav", {
        id: "__alloyId79"
    });
    $.__views.TabAsignaturasFavoritas = Ti.UI.createTab({
        window: $.__views.__alloyId79.getViewEx({
            recurse: true
        }),
        title: "Mis asignaturas",
        icon: "KS_nav_ui.png",
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