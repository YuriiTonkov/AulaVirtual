function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblCursosRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        data: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso"),
        hasDetail: "true",
        id: "tblCursosRow"
    });
    $.__views.tblCursosRow && $.addTopLevelView($.__views.tblCursosRow);
    $.__views.lblCurso = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "10dp",
        id: "lblCurso",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso")
    });
    $.__views.tblCursosRow.add($.__views.lblCurso);
    $.__views.lblInfo = Ti.UI.createLabel({
        width: "100%",
        height: "10dp",
        top: "33dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue"
        },
        textAlign: "left",
        left: "10dp",
        id: "lblInfo",
        text: "undefined" != typeof $model.__transform["Grupos"] ? $model.__transform["Grupos"] : $model.get("Grupos"),
        textid: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso")
    });
    $.__views.tblCursosRow.add($.__views.lblInfo);
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