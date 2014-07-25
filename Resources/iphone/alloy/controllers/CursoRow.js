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
    this.__controllerPath = "CursoRow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tblCursosRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        data: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso"),
        hasDetail: "true",
        id: "tblCursosRow"
    });
    $.__views.tblCursosRow && $.addTopLevelView($.__views.tblCursosRow);
    $.__views.lblCurso = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: "40dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        top: "-7dp",
        id: "lblCurso",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso")
    });
    $.__views.tblCursosRow.add($.__views.lblCurso);
    $.__views.lblInfoClases = Ti.UI.createLabel({
        width: "100%",
        height: "10dp",
        top: "26dp",
        font: {
            fontSize: 12,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        textAlign: "left",
        left: "16dp",
        id: "lblInfoClases",
        text: "undefined" != typeof $model.__transform["Grupos"] ? $model.__transform["Grupos"] : $model.get("Grupos"),
        textid: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso")
    });
    $.__views.tblCursosRow.add($.__views.lblInfoClases);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblCursosRow.addEventListener("click", function(e) {
        if (1 == e.detail) {
            var tabNuevaAsignaturaController = Alloy.createController("winCrearAsignatura", {
                Curso: e.source.data
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabNuevaAsignaturaController.getView());
        } else {
            var tabClasesController = Alloy.createController("WinClases", {
                IdCurso: e.source.textid,
                Nombre: e.source.text
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabClasesController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;