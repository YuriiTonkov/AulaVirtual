function Controller() {
<<<<<<< HEAD
    function __alloyId50() {
        var models = filtrado(__alloyId49);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId47 = models[i];
            __alloyId47.__transform = {};
            var __alloyId48 = Alloy.createController("AsignaturaRow", {
                $model: __alloyId47
            });
            rows.push(__alloyId48.getViewEx({
=======
    function __alloyId57() {
        var models = filtrado(__alloyId56);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId54 = models[i];
            __alloyId54.__transform = {};
            var __alloyId55 = Alloy.createController("AsignaturaRow", {
                $model: __alloyId54
            });
            rows.push(__alloyId55.getViewEx({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
                recurse: true
            }));
        }
        $.__views.TablaAsignaturasByAlumno.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Alumno: data.IdAlumno
        });
        return coleccion_filtrada;
    }
    function NuevoAsignatura() {
        var tabClasesController = Alloy.createController("NuevaAsignatura", {
            IdAlumno: data.IdAlumno,
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
    $.__views.WinAsignaturasAlumno = Ti.UI.createWindow({
        id: "WinAsignaturasAlumno",
        title: "Asignaturas"
    });
    $.__views.WinAsignaturasAlumno && $.addTopLevelView($.__views.WinAsignaturasAlumno);
    $.__views.TablaAsignaturasByAlumno = Ti.UI.createTableView({
        id: "TablaAsignaturasByAlumno"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.TablaAsignaturasByAlumno);
<<<<<<< HEAD
    var __alloyId49 = Alloy.Collections["VW_Alumno_Asignatura_Asignatura"] || VW_Alumno_Asignatura_Asignatura;
    __alloyId49.on("fetch destroy change add remove reset", __alloyId50);
=======
    var __alloyId56 = Alloy.Collections["VW_Alumno_Asignatura_Asignatura"] || VW_Alumno_Asignatura_Asignatura;
    __alloyId56.on("fetch destroy change add remove reset", __alloyId57);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.addAsignatura);
    NuevoAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevoAsignatura) : __defers["$.__views.addAsignatura!click!NuevoAsignatura"] = true;
    exports.destroy = function() {
<<<<<<< HEAD
        __alloyId49.off("fetch destroy change add remove reset", __alloyId50);
=======
        __alloyId56.off("fetch destroy change add remove reset", __alloyId57);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinAsignaturasAlumno.title = data.Nombre;
    $.WinAsignaturasAlumno.setRightNavButton($.addAsignatura);
    var AsignaturasAlumno = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
    AsignaturasAlumno.fetch();
    $.TablaAsignaturasByAlumno.addEventListener("delete", function(e) {
        var Asignaturas = Alloy.Collections.Alumno_Asignatura;
        Asignaturas.fetch();
        var model = Asignaturas.get(e.rowData.data);
        model.destroy();
        Asignaturas.remove(model);
        Asignaturas.fetch();
    });
    __defers["$.__views.addAsignatura!click!NuevoAsignatura"] && $.__views.addAsignatura.addEventListener("click", NuevoAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;