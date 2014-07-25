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
    this.__controllerPath = "EvaluacionRow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tblAsignaturaRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdEvaluacion"] ? $model.__transform["IdEvaluacion"] : $model.get("IdEvaluacion"),
        hasDetail: "true",
        id: "tblAsignaturaRow"
    });
    $.__views.tblAsignaturaRow && $.addTopLevelView($.__views.tblAsignaturaRow);
    $.__views.lblEvaluacion = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblEvaluacion",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdEvaluacion"] ? $model.__transform["IdEvaluacion"] : $model.get("IdEvaluacion")
    });
    $.__views.tblAsignaturaRow.add($.__views.lblEvaluacion);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblAsignaturaRow.addEventListener("click", function(e) {
        if (1 == e.detail) {
            var tabAlumnosController = Alloy.createController("NuevaEvaluacion", {
                IdEvaluacion: e.source.data
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
        } else {
            var tabEvaluacionesController = Alloy.createController("WinExamenes", {
                IdEvaluacion: e.source.textid,
                Nombre: e.source.text
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabEvaluacionesController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;