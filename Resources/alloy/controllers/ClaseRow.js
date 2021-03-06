function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ClaseRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblClasesRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdClase"] ? $model.__transform["IdClase"] : $model.get("IdClase"),
        hasChild: "true",
        id: "tblClasesRow"
    });
    $.__views.tblClasesRow && $.addTopLevelView($.__views.tblClasesRow);
    $.__views.lblClases = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: "40dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        top: "-7dp",
        id: "lblClases",
        text: "undefined" != typeof $model.__transform["nombreCompleto"] ? $model.__transform["nombreCompleto"] : $model.get("nombreCompleto"),
        textid: "undefined" != typeof $model.__transform["IdClase"] ? $model.__transform["IdClase"] : $model.get("IdClase")
    });
    $.__views.tblClasesRow.add($.__views.lblClases);
    $.__views.lblInfoAlumnos = Ti.UI.createLabel({
        width: "100%",
        height: "10dp",
        top: "26dp",
        font: {
            fontSize: 12,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        textAlign: "left",
        left: "16dp",
        id: "lblInfoAlumnos",
        text: "undefined" != typeof $model.__transform["Alumnos"] ? $model.__transform["Alumnos"] : $model.get("Alumnos"),
        textid: "undefined" != typeof $model.__transform["IdClase"] ? $model.__transform["IdClase"] : $model.get("IdClase")
    });
    $.__views.tblClasesRow.add($.__views.lblInfoAlumnos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblClases.addEventListener("click", function(e) {
        var tabAlumnosController = Alloy.createController("WinAlumnos", {
            IdClase: e.source.textid,
            Nombre: e.source.text
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
    });
    $.lblClases.addEventListener("longpress", function(e) {
        var colVWClases = Alloy.Collections.VW_Clases_Favoritas;
        var colClases = Alloy.createCollection("Clase");
        colClases.fetch();
        var model = colClases.get(e.source.textid);
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca nombre de la clase",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            if (e.index === e.source.cancel) ; else {
                model.set({
                    Nombre: e.text
                });
                model.save();
                colClases.fetch();
                colVWClases.fetch();
            }
        });
        dialog.show();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;