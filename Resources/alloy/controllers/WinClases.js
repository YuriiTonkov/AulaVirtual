function Controller() {
<<<<<<< HEAD
    function __alloyId55() {
        var models = filtrado(__alloyId54);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId52 = models[i];
            __alloyId52.__transform = NombreClase(__alloyId52);
            var __alloyId53 = Alloy.createController("ClaseRow", {
                $model: __alloyId52
            });
            rows.push(__alloyId53.getViewEx({
=======
    function __alloyId62() {
        var models = filtrado(__alloyId61);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId59 = models[i];
            __alloyId59.__transform = NombreClase(__alloyId59);
            var __alloyId60 = Alloy.createController("ClaseRow", {
                $model: __alloyId59
            });
            rows.push(__alloyId60.getViewEx({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
                recurse: true
            }));
        }
        $.__views.TablaClases.setData(rows);
    }
    function NombreClase(model) {
        var transform = model.toJSON();
        transform.nombreCompleto = "Sección " + transform.Nombre;
        return transform;
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Curso: data.IdCurso
        });
        return coleccion_filtrada;
    }
    function NuevaClase() {
        var tabClasesController = Alloy.createController("NuevaClase", {
            IdCurso: data.IdCurso,
            Nombre: data.Nombre
        });
        Alloy.Globals.tabGroup.open(tabClasesController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinClases = Ti.UI.createWindow({
        id: "WinClases",
        title: "Clases"
    });
    $.__views.WinClases && $.addTopLevelView($.__views.WinClases);
    $.__views.TablaClases = Ti.UI.createTableView({
        id: "TablaClases"
    });
    $.__views.WinClases.add($.__views.TablaClases);
<<<<<<< HEAD
    var __alloyId54 = Alloy.Collections["Clase"] || Clase;
    __alloyId54.on("fetch destroy change add remove reset", __alloyId55);
=======
    var __alloyId61 = Alloy.Collections["Clase"] || Clase;
    __alloyId61.on("fetch destroy change add remove reset", __alloyId62);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.addClase = Ti.UI.createButton({
        id: "addClase",
        title: "Nueva",
        top: "-50dp"
    });
    $.__views.WinClases.add($.__views.addClase);
    NuevaClase ? $.__views.addClase.addEventListener("click", NuevaClase) : __defers["$.__views.addClase!click!NuevaClase"] = true;
    exports.destroy = function() {
<<<<<<< HEAD
        __alloyId54.off("fetch destroy change add remove reset", __alloyId55);
=======
        __alloyId61.off("fetch destroy change add remove reset", __alloyId62);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinClases.title = data.Nombre;
    $.WinClases.setRightNavButton($.addClase);
    var clases = Alloy.Collections.Clase;
    clases.fetch();
    $.TablaClases.addEventListener("delete", function(e) {
        var clases = Alloy.Collections.Clase;
        var model = clases.get(e.rowData.data);
        model.destroy();
        clases.remove(model);
        clases.fetch();
    });
    __defers["$.__views.addClase!click!NuevaClase"] && $.__views.addClase.addEventListener("click", NuevaClase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;