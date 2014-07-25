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
    this.__controllerPath = "TabPrincipal";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId88 = Alloy.createController("WinGrupos", {
        id: "__alloyId88",
        __parentSymbol: __parentSymbol
    });
    $.__views.TabPrincipal = Ti.UI.createTab({
        window: $.__views.__alloyId88.getViewEx({
            recurse: true
        }),
        title: "Menu principal",
        icon: "KS_nav_Menu.png",
        id: "TabPrincipal"
    });
    $.__views.TabPrincipal && $.addTopLevelView($.__views.TabPrincipal);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.tabGroup = $.TabPrincipal;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;