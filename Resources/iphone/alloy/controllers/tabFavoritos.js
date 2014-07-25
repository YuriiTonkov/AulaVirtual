function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabFavoritos";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId215 = Alloy.createController("winClasesFav", {
        id: "__alloyId215",
        __parentSymbol: __parentSymbol
    });
    $.__views.tabFavoritos = Ti.UI.createTab({
        window: $.__views.__alloyId215.getViewEx({
            recurse: true
        }),
        title: "Mis Clases",
        icon: "KS_nav_Class.png",
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