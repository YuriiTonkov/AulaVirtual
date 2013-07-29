function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
<<<<<<< HEAD
    $.__views.__alloyId40 = Alloy.createController("WinGrupos", {
        id: "__alloyId40"
    });
    $.__views.TabPrincipal = Ti.UI.createTab({
        window: $.__views.__alloyId40.getViewEx({
=======
    $.__views.__alloyId47 = Alloy.createController("WinGrupos", {
        id: "__alloyId47"
    });
    $.__views.TabPrincipal = Ti.UI.createTab({
        window: $.__views.__alloyId47.getViewEx({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
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