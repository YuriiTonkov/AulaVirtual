function Controller() {
    function __alloyId116() {
        __alloyId116.opts || {};
        var models = filtrado(__alloyId115);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId113 = models[i];
            __alloyId113.__transform = TextoFila(__alloyId113);
            var __alloyId114 = Alloy.createController("ExamenRow", {
                $model: __alloyId113
            });
            rows.push(__alloyId114.getViewEx({
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
        Alloy.Globals.GrupoTab.activeTab.open(tabExamenController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinExamenes";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinExamenes = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinExamenes",
        title: "Examenes"
    });
    $.__views.WinExamenes && $.addTopLevelView($.__views.WinExamenes);
    $.__views.TablaExamenes = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaExamenes"
    });
    $.__views.WinExamenes.add($.__views.TablaExamenes);
    var __alloyId115 = Alloy.Collections["Examen"] || Examen;
    __alloyId115.on("fetch destroy change add remove reset", __alloyId116);
    $.__views.addExamen = Ti.UI.createButton({
        id: "addExamen",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinExamenes.add($.__views.addExamen);
    NuevoExamen ? $.__views.addExamen.addEventListener("click", NuevoExamen) : __defers["$.__views.addExamen!click!NuevoExamen"] = true;
    exports.destroy = function() {
        __alloyId115.off("fetch destroy change add remove reset", __alloyId116);
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
    $.WinExamenes.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.addExamen!click!NuevoExamen"] && $.__views.addExamen.addEventListener("click", NuevoExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;