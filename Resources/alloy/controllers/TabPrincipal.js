function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TabPrincipal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId77 = Alloy.createController("WinGrupos", {
        id: "__alloyId77"
    });
    $.__views.TabPrincipal = Ti.UI.createTab({
        window: $.__views.__alloyId77.getViewEx({
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