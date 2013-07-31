function Controller() {
    function __alloyId89() {
        var models = filtrado(__alloyId88);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId86 = models[i];
            __alloyId86.__transform = TextoFila(__alloyId86);
            var __alloyId87 = Alloy.createController("ExamenRow", {
                $model: __alloyId86
            });
            rows.push(__alloyId87.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaExamenes.setData(rows);
    }
    function TextoFila(model) {
        var transform = model.toJSON();
        transform.TextoFila = "Examen: " + transform.FechaExamen + "   Nota: " + transform.Nota;
        return transform;
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
    var __alloyId88 = Alloy.Collections["Examen"] || Examen;
    __alloyId88.on("fetch destroy change add remove reset", __alloyId89);
    $.__views.addExamen = Ti.UI.createButton({
        id: "addExamen",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinExamenes.add($.__views.addExamen);
    NuevoExamen ? $.__views.addExamen.addEventListener("click", NuevoExamen) : __defers["$.__views.addExamen!click!NuevoExamen"] = true;
    exports.destroy = function() {
        __alloyId88.off("fetch destroy change add remove reset", __alloyId89);
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