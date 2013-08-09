function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId85 = Alloy.createController("winClasesFav", {
        id: "__alloyId85"
    });
    $.__views.tabFavoritos = Ti.UI.createTab({
        window: $.__views.__alloyId85.getViewEx({
            recurse: true
        }),
        title: "Mis Clases",
        icon: "KS_nav_ui.png",
        id: "tabFavoritos"
    });
    $.__views.tabFavoritos && $.addTopLevelView($.__views.tabFavoritos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.tabGroup3 = $.tabFavoritos;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;