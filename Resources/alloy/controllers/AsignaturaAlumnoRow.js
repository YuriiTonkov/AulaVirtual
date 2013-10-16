function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AsignaturaAlumnoRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblAsignaturaAlumnoRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        hasChild: "true",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdAsignatura"] ? $model.__transform["IdAsignatura"] : $model.get("IdAsignatura"),
        id: "tblAsignaturaAlumnoRow"
    });
    $.__views.tblAsignaturaAlumnoRow && $.addTopLevelView($.__views.tblAsignaturaAlumnoRow);
    $.__views.lblAsignaturaAlumno = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblAsignaturaAlumno",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdAsignatura"] ? $model.__transform["IdAsignatura"] : $model.get("IdAsignatura")
    });
    $.__views.tblAsignaturaAlumnoRow.add($.__views.lblAsignaturaAlumno);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblAsignaturaAlumnoRow.addEventListener("click", function(e) {
        var tabAsignaturasController = Alloy.createController("WinAlumnosAsignatura", {
            IdAsignatura: e.source.textid,
            Nombre: e.source.text
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturasController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;