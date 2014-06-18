function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AsignaturaFavRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblAsignaturaRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdAsignatura"] ? $model.__transform["IdAsignatura"] : $model.get("IdAsignatura"),
        hasChild: "true",
        id: "tblAsignaturaRow"
    });
    $.__views.tblAsignaturaRow && $.addTopLevelView($.__views.tblAsignaturaRow);
    $.__views.lblAsignatura = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblAsignatura",
        text: "undefined" != typeof $model.__transform["nombrecompleto"] ? $model.__transform["nombrecompleto"] : $model.get("nombrecompleto"),
        textid: "undefined" != typeof $model.__transform["IdAsignatura"] ? $model.__transform["IdAsignatura"] : $model.get("IdAsignatura")
    });
    $.__views.tblAsignaturaRow.add($.__views.lblAsignatura);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblAsignaturaRow.addEventListener("click", function(e) {
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