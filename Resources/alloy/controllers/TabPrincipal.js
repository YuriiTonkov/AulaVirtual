function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId54 = Alloy.createController("WinGrupos", {
        id: "__alloyId54"
    });
    $.__views.TabPrincipal = Ti.UI.createTab({
        window: $.__views.__alloyId54.getViewEx({
            recurse: true
        }),
        title: "Menu principal",
        icon: "KS_nav_ui.png",
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