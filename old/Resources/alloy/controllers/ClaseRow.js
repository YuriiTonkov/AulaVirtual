function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblClasesRow = Ti.UI.createTableViewRow({
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdClase"] ? $model.__transform["IdClase"] : $model.get("IdClase"),
        hasChild: "true",
        id: "tblClasesRow"
    });
    $.__views.tblClasesRow && $.addTopLevelView($.__views.tblClasesRow);
    $.__views.lblClases = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "center",
        id: "lblClases",
        text: "undefined" != typeof $model.__transform["nombreCompleto"] ? $model.__transform["nombreCompleto"] : $model.get("nombreCompleto"),
        textid: "undefined" != typeof $model.__transform["IdClase"] ? $model.__transform["IdClase"] : $model.get("IdClase")
    });
    $.__views.tblClasesRow.add($.__views.lblClases);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblClases.addEventListener("click", function(e) {
        var tabAlumnosController = Alloy.createController("WinAlumnos", {
            IdClase: e.source.textid,
            Nombre: e.source.text
        });
        Alloy.Globals.tabGroup.open(tabAlumnosController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;