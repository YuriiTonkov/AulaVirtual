function Controller() {
    function __alloyId36() {
        var models = filtrado(__alloyId35);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId33 = models[i];
            __alloyId33.__transform = nombrecompleto(__alloyId33);
            var __alloyId34 = Alloy.createController("AlumnoRow", {
                $model: __alloyId33
            });
            rows.push(__alloyId34.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAlumnos.setData(rows);
    }
    function NuevoAlumno() {
        var tabAlumnosController = Alloy.createController("NuevoAlumno", {
            IdClase: data.IdClase,
            Nombre: data.Nombre
        });
        Alloy.Globals.tabGroup.open(tabAlumnosController.getView());
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Clase: data.IdClase
        });
        return coleccion_filtrada;
    }
    function nombrecompleto(model) {
        var transform = model.toJSON();
        transform.nombrecompleto = transform.Nombre + " " + transform.Apellido1 + " " + transform.Apellido2;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinAlumnos = Ti.UI.createWindow({
        id: "WinAlumnos",
        title: "Alumnos"
    });
    $.__views.WinAlumnos && $.addTopLevelView($.__views.WinAlumnos);
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        id: "TablaAlumnos"
    });
    $.__views.WinAlumnos.add($.__views.TablaAlumnos);
    var __alloyId35 = Alloy.Collections["Alumno"] || Alumno;
    __alloyId35.on("fetch destroy change add remove reset", __alloyId36);
    $.__views.addAlumno = Ti.UI.createButton({
        id: "addAlumno",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinAlumnos.add($.__views.addAlumno);
    NuevoAlumno ? $.__views.addAlumno.addEventListener("click", NuevoAlumno) : __defers["$.__views.addAlumno!click!NuevoAlumno"] = true;
    exports.destroy = function() {
        __alloyId35.off("fetch destroy change add remove reset", __alloyId36);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinAlumnos.title = data.Nombre;
    $.WinAlumnos.setRightNavButton($.addAlumno);
    var alumnos = Alloy.Collections.Alumno;
    alumnos.fetch();
    $.TablaAlumnos.addEventListener("delete", function(e) {
        var alumnos = Alloy.Collections.Alumno;
        var model = alumnos.get(e.rowData.data);
        model.destroy();
        alumnos.remove(model);
        alumnos.fetch();
    });
    __defers["$.__views.addAlumno!click!NuevoAlumno"] && $.__views.addAlumno.addEventListener("click", NuevoAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;