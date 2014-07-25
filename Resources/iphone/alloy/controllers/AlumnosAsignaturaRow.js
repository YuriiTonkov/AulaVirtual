function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AlumnosAsignaturaRow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tblAlumnosAsignaturaRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdAlumnoAsignatura"] ? $model.__transform["IdAlumnoAsignatura"] : $model.get("IdAlumnoAsignatura"),
        hasChild: "true",
        id: "tblAlumnosAsignaturaRow"
    });
    $.__views.tblAlumnosAsignaturaRow && $.addTopLevelView($.__views.tblAlumnosAsignaturaRow);
    $.__views.lblAlumno = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblAlumno",
        text: "undefined" != typeof $model.__transform["nombrecompleto"] ? $model.__transform["nombrecompleto"] : $model.get("nombrecompleto"),
        textid: "undefined" != typeof $model.__transform["IdAlumnoAsignatura"] ? $model.__transform["IdAlumnoAsignatura"] : $model.get("IdAlumnoAsignatura")
    });
    $.__views.tblAlumnosAsignaturaRow.add($.__views.lblAlumno);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblAlumnosAsignaturaRow.addEventListener("click", function(e) {
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