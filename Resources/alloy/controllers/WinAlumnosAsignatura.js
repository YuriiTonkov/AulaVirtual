function Controller() {
    function __alloyId52() {
        __alloyId52.opts || {};
        var models = filtrado(__alloyId51);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId49 = models[i];
            __alloyId49.__transform = nombrecompleto(__alloyId49);
            var __alloyId50 = Alloy.createController("AlumnosAsignaturaRow", {
                $model: __alloyId49
            });
            rows.push(__alloyId50.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAlumnosByAsignatura.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Asignatura: data.IdAsignatura
        });
        return coleccion_filtrada;
    }
    function nombrecompleto(model) {
        var transform = model.toJSON();
        transform.nombrecompleto = transform.NombreAlumno + " " + transform.Apellido1 + " " + transform.Apellido2;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinAlumnosAsignatura";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinAsignaturasAlumno = Ti.UI.createWindow({
        id: "WinAsignaturasAlumno",
        title: "Asignaturas"
    });
    $.__views.WinAsignaturasAlumno && $.addTopLevelView($.__views.WinAsignaturasAlumno);
    $.__views.TablaAlumnosByAsignatura = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        backgroundImage: "backGround320x416Base.png",
        id: "TablaAlumnosByAsignatura"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.TablaAlumnosByAsignatura);
    var __alloyId51 = Alloy.Collections["VW_Alumno_Asignatura_Asignatura"] || VW_Alumno_Asignatura_Asignatura;
    __alloyId51.on("fetch destroy change add remove reset", __alloyId52);
    exports.destroy = function() {
        __alloyId51.off("fetch destroy change add remove reset", __alloyId52);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinAsignaturasAlumno.title = data.Nombre;
    var tab = Alloy.createController("BotoneraAsignatura", {
        IdAsignatura: data.IdAsignatura
    });
    $.WinAsignaturasAlumno.setRightNavButton(tab.getView());
    var alumnos = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
    alumnos.fetch();
    $.TablaAlumnosByAsignatura.addEventListener("delete", function(e) {
        var alumnos = Alloy.Collections.Alumno_Asignatura;
        alumnos.fetch();
        var model = alumnos.get(e.rowData.data);
        model.destroy();
        alumnos.remove(model);
        alumnos.fetch();
    });
    $.WinAsignaturasAlumno.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;