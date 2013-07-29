function Controller() {
<<<<<<< HEAD
    function __alloyId75() {
        var models = __alloyId74.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId72 = models[i];
            __alloyId72.__transform = {};
            var __alloyId73 = Alloy.createController("GradoRow", {
                $model: __alloyId72
            });
            rows.push(__alloyId73.getViewEx({
=======
    function __alloyId82() {
        var models = __alloyId81.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId79 = models[i];
            __alloyId79.__transform = {};
            var __alloyId80 = Alloy.createController("GradoRow", {
                $model: __alloyId79
            });
            rows.push(__alloyId80.getViewEx({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
                recurse: true
            }));
        }
        $.__views.TablaGrados.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.winGrados = Ti.UI.createWindow({
        id: "winGrados",
        title: "Grados"
    });
    $.__views.winGrados && $.addTopLevelView($.__views.winGrados);
    $.__views.TablaGrados = Ti.UI.createTableView({
        id: "TablaGrados"
    });
    $.__views.winGrados.add($.__views.TablaGrados);
<<<<<<< HEAD
    var __alloyId74 = Alloy.Collections["Grado"] || Grado;
    __alloyId74.on("fetch destroy change add remove reset", __alloyId75);
    exports.destroy = function() {
        __alloyId74.off("fetch destroy change add remove reset", __alloyId75);
=======
    var __alloyId81 = Alloy.Collections["Grado"] || Grado;
    __alloyId81.on("fetch destroy change add remove reset", __alloyId82);
    exports.destroy = function() {
        __alloyId81.off("fetch destroy change add remove reset", __alloyId82);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    };
    _.extend($, $.__views);
    var grados = Alloy.Collections.Grado;
    grados.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;