function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId88 = Alloy.createController("WinGrupos", {
        id: "__alloyId88"
    });
    $.__views.TabConfiguracion = Ti.UI.createTab({
        window: $.__views.__alloyId88.getViewEx({
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