function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblAsignaturaRow = Ti.UI.createTableViewRow({
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdEvaluacion"] ? $model.__transform["IdEvaluacion"] : $model.get("IdEvaluacion"),
        hasChild: "true",
        id: "tblAsignaturaRow"
    });
    $.__views.tblAsignaturaRow && $.addTopLevelView($.__views.tblAsignaturaRow);
    $.__views.lblEvaluacion = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "center",
        id: "lblEvaluacion",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdEvaluacion"] ? $model.__transform["IdEvaluacion"] : $model.get("IdEvaluacion")
    });
    $.__views.tblAsignaturaRow.add($.__views.lblEvaluacion);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblEvaluacion.addEventListener("click", function(e) {
        var tabEvaluacionesController = Alloy.createController("WinExamenes", {
            IdEvaluacion: e.source.textid,
            Nombre: e.source.text
        });
        Alloy.Globals.tabGroup.open(tabEvaluacionesController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;