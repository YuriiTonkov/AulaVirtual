function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AlumnoRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblAlumnoRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdAlumno"] ? $model.__transform["IdAlumno"] : $model.get("IdAlumno"),
        hasDetail: "true",
        id: "tblAlumnoRow"
    });
    $.__views.tblAlumnoRow && $.addTopLevelView($.__views.tblAlumnoRow);
    $.__views.lblAlumno = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "10dp",
        id: "lblAlumno",
        text: "undefined" != typeof $model.__transform["nombrecompleto"] ? $model.__transform["nombrecompleto"] : $model.get("nombrecompleto"),
        textid: "undefined" != typeof $model.__transform["IdAlumno"] ? $model.__transform["IdAlumno"] : $model.get("IdAlumno")
    });
    $.__views.tblAlumnoRow.add($.__views.lblAlumno);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblAlumnoRow.addEventListener("click", function(e) {
        if (1 == e.detail) {
            var alumnos = Alloy.Collections.Alumno;
            var idAlu = e.source.data;
            var model = alumnos.get(idAlu);
            var array = model.toJSON();
            var tabAlumnosController = Alloy.createController("NuevoAlumno", {
                IdAlumno: idAlu,
                IdClase: array.Clase
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
        } else {
            var tabAsignaturasController = Alloy.createController("WinAsignaturas", {
                IdAlumno: e.source.textid,
                Nombre: e.source.text
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturasController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;