function Controller() {
<<<<<<< HEAD
    function __alloyId70() {
        var models = filtrado(__alloyId69);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId67 = models[i];
            __alloyId67.__transform = {};
            var __alloyId68 = Alloy.createController("ExamenRow", {
                $model: __alloyId67
            });
            rows.push(__alloyId68.getViewEx({
=======
    function __alloyId77() {
        var models = filtrado(__alloyId76);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId74 = models[i];
            __alloyId74.__transform = {};
            var __alloyId75 = Alloy.createController("ExamenRow", {
                $model: __alloyId74
            });
            rows.push(__alloyId75.getViewEx({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
                recurse: true
            }));
        }
        $.__views.TablaExamenes.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Evaluacion: data.IdEvaluacion
        });
        return coleccion_filtrada;
    }
    function NuevoExamen() {
        var tabExamenController = Alloy.createController("NuevoExamen", {
            Evaluacion: data.IdEvaluacion,
            Nombre: data.FechaExamen
        });
        Alloy.Globals.tabGroup.open(tabExamenController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinExamenes = Ti.UI.createWindow({
        id: "WinExamenes",
        title: "Examenes"
    });
    $.__views.WinExamenes && $.addTopLevelView($.__views.WinExamenes);
    $.__views.TablaExamenes = Ti.UI.createTableView({
        id: "TablaExamenes"
    });
    $.__views.WinExamenes.add($.__views.TablaExamenes);
<<<<<<< HEAD
    var __alloyId69 = Alloy.Collections["Examen"] || Examen;
    __alloyId69.on("fetch destroy change add remove reset", __alloyId70);
=======
    var __alloyId76 = Alloy.Collections["Examen"] || Examen;
    __alloyId76.on("fetch destroy change add remove reset", __alloyId77);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.addExamen = Ti.UI.createButton({
        id: "addExamen",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinExamenes.add($.__views.addExamen);
    NuevoExamen ? $.__views.addExamen.addEventListener("click", NuevoExamen) : __defers["$.__views.addExamen!click!NuevoExamen"] = true;
    exports.destroy = function() {
<<<<<<< HEAD
        __alloyId69.off("fetch destroy change add remove reset", __alloyId70);
=======
        __alloyId76.off("fetch destroy change add remove reset", __alloyId77);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinExamenes.title = data.Nombre;
    $.WinExamenes.setRightNavButton($.addExamen);
    var Examenes = Alloy.Collections.Examen;
    Examenes.fetch();
    $.TablaExamenes.addEventListener("delete", function(e) {
        var Examenes = Alloy.Collections.Examen;
        var model = Examenes.get(e.rowData.data);
        model.destroy();
        Examenes.remove(model);
        Examenes.fetch();
    });
    __defers["$.__views.addExamen!click!NuevoExamen"] && $.__views.addExamen.addEventListener("click", NuevoExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;