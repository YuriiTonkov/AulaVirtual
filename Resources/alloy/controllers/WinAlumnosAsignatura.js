function Controller() {
    function __alloyId51() {
        __alloyId51.opts || {};
        var models = filtrado(__alloyId50);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId48 = models[i];
            __alloyId48.__transform = nombrecompleto(__alloyId48);
            var __alloyId49 = Alloy.createController("AlumnosAsignaturaRow", {
                $model: __alloyId48
            });
            rows.push(__alloyId49.getViewEx({
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
    var __alloyId50 = Alloy.Collections["VW_Alumno_Asignatura_Asignatura"] || VW_Alumno_Asignatura_Asignatura;
    __alloyId50.on("fetch destroy change add remove reset", __alloyId51);
    exports.destroy = function() {
        __alloyId50.off("fetch destroy change add remove reset", __alloyId51);
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