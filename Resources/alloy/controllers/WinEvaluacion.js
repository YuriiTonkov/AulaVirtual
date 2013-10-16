function Controller() {
    function __alloyId98() {
        __alloyId98.opts || {};
        var models = filtrado(__alloyId97);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId95 = models[i];
            __alloyId95.__transform = {};
            var __alloyId96 = Alloy.createController("EvaluacionRow", {
                $model: __alloyId95
            });
            rows.push(__alloyId96.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaEvaluaciones.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            AlumnoAsignatura: data.IdAlumnoAsignatura
        });
        return coleccion_filtrada;
    }
    function NuevoEvaluacion() {
        var tabEvaluacionController = Alloy.createController("NuevaEvaluacion", {
            AlumnoAsignatura: data.IdAlumnoAsignatura,
            Nombre: data.Nombre
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabEvaluacionController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinEvaluacion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinEvaluacionesAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "EEE",
        id: "WinEvaluacionesAlumno",
        title: "Evaluaciones"
    });
    $.__views.WinEvaluacionesAlumno && $.addTopLevelView($.__views.WinEvaluacionesAlumno);
    $.__views.TablaEvaluaciones = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        id: "TablaEvaluaciones"
    });
    $.__views.WinEvaluacionesAlumno.add($.__views.TablaEvaluaciones);
    var __alloyId97 = Alloy.Collections["Evaluacion"] || Evaluacion;
    __alloyId97.on("fetch destroy change add remove reset", __alloyId98);
    $.__views.addEvaluacion = Ti.UI.createButton({
        id: "addEvaluacion",
        title: "Nueva",
        top: "-50dp"
    });
    $.__views.WinEvaluacionesAlumno.add($.__views.addEvaluacion);
    NuevoEvaluacion ? $.__views.addEvaluacion.addEventListener("click", NuevoEvaluacion) : __defers["$.__views.addEvaluacion!click!NuevoEvaluacion"] = true;
    exports.destroy = function() {
        __alloyId97.off("fetch destroy change add remove reset", __alloyId98);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinEvaluacionesAlumno.title = data.Nombre;
    $.WinEvaluacionesAlumno.setRightNavButton($.addEvaluacion);
    var Evaluaciones = Alloy.Collections.Evaluacion;
    Evaluaciones.fetch();
    $.TablaEvaluaciones.addEventListener("delete", function(e) {
        var Evaluaciones = Alloy.Collections.Evaluacion;
        var model = Evaluaciones.get(e.rowData.data);
        model.destroy();
        Evaluaciones.remove(model);
        Evaluaciones.fetch();
    });
    $.WinEvaluacionesAlumno.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.addEvaluacion!click!NuevoEvaluacion"] && $.__views.addEvaluacion.addEventListener("click", NuevoEvaluacion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;