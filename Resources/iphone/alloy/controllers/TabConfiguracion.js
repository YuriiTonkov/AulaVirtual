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
    this.__controllerPath = "TabConfiguracion";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId87 = Alloy.createController("winProfile", {
        id: "__alloyId87",
        __parentSymbol: __parentSymbol
    });
    $.__views.TabConfiguracion = Ti.UI.createTab({
        window: $.__views.__alloyId87.getViewEx({
            recurse: true
        }),
        title: "Configuracion",
        icon: "KS_nav_Config.png",
        id: "TabConfiguracion"
    });
    $.__views.TabConfiguracion && $.addTopLevelView($.__views.TabConfiguracion);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.tabGroup2 = $.TabConfiguracion;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;