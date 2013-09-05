function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AsignaturaRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblAsignaturaRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdAlumnoAsignatura"] ? $model.__transform["IdAlumnoAsignatura"] : $model.get("IdAlumnoAsignatura"),
        hasChild: "true",
        id: "tblAsignaturaRow"
    });
    $.__views.tblAsignaturaRow && $.addTopLevelView($.__views.tblAsignaturaRow);
    $.__views.lblAsignatura = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "10dp",
        id: "lblAsignatura",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdAlumnoAsignatura"] ? $model.__transform["IdAlumnoAsignatura"] : $model.get("IdAlumnoAsignatura")
    });
    $.__views.tblAsignaturaRow.add($.__views.lblAsignatura);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblAsignatura.addEventListener("click", function(e) {
        var tabAsignaturasController = Alloy.createController("WinEvaluacion", {
            IdAlumnoAsignatura: e.source.textid,
            Nombre: e.source.text
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturasController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;