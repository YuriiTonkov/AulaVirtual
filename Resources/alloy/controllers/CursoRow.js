function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblCursosRow = Ti.UI.createTableViewRow({
        data: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso"),
        hasDetail: "true",
        id: "tblCursosRow"
    });
    $.__views.tblCursosRow && $.addTopLevelView($.__views.tblCursosRow);
    $.__views.lblCurso = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "center",
        id: "lblCurso",
        text: "undefined" != typeof $model.__transform["Nombre"] ? $model.__transform["Nombre"] : $model.get("Nombre"),
        textid: "undefined" != typeof $model.__transform["IdCurso"] ? $model.__transform["IdCurso"] : $model.get("IdCurso")
    });
    $.__views.tblCursosRow.add($.__views.lblCurso);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblCursosRow.addEventListener("click", function(e) {
        if (1 == e.detail) {
            var tabNuevaAsignaturaController = Alloy.createController("winCrearAsignatura", {
                Curso: e.source.data
            });
            Alloy.Globals.tabGroup.open(tabNuevaAsignaturaController.getView());
        } else {
            var tabClasesController = Alloy.createController("WinClases", {
                IdCurso: e.source.textid,
                Nombre: e.source.text
            });
            Alloy.Globals.tabGroup.open(tabClasesController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;