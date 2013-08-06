function Controller() {
    function __alloyId87() {
        var models = filtrado(__alloyId86);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId84 = models[i];
            __alloyId84.__transform = nombrecompleto(__alloyId84);
            var __alloyId85 = Alloy.createController("AlumnoRow", {
                $model: __alloyId84
            });
            rows.push(__alloyId85.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAlumnos.setData(rows);
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
    $.__views.WinAlumnos = Ti.UI.createWindow({
        id: "WinAlumnos",
        title: "Alumnos"
    });
    $.__views.WinAlumnos && $.addTopLevelView($.__views.WinAlumnos);
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        id: "TablaAlumnos"
    });
    $.__views.WinAlumnos.add($.__views.TablaAlumnos);
    var __alloyId86 = Alloy.Collections["Alumno"] || Alumno;
    __alloyId86.on("fetch destroy change add remove reset", __alloyId87);
    exports.destroy = function() {
        __alloyId86.off("fetch destroy change add remove reset", __alloyId87);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinAlumnos.title = data.Nombre;
    var tab = Alloy.createController("BotoneraClase", {
        IdClase: data.IdClase
    });
    $.WinAlumnos.setRightNavButton(tab.getView());
    var alumnos = Alloy.Collections.Alumno;
    alumnos.fetch();
    $.TablaAlumnos.addEventListener("delete", function(e) {
        var alumnos = Alloy.Collections.Alumno;
        var model = alumnos.get(e.rowData.data);
        model.destroy();
        alumnos.remove(model);
        alumnos.fetch();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;