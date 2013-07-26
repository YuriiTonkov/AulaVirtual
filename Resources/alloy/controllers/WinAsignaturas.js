function Controller() {
    function __alloyId41() {
        var models = filtrado(__alloyId40);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId38 = models[i];
            __alloyId38.__transform = {};
            var __alloyId39 = Alloy.createController("AsignaturaRow", {
                $model: __alloyId38
            });
            rows.push(__alloyId39.getViewEx({
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
    var __alloyId40 = Alloy.Collections["VW_Alumno_Asignatura_Asignatura"] || VW_Alumno_Asignatura_Asignatura;
    __alloyId40.on("fetch destroy change add remove reset", __alloyId41);
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.addAsignatura);
    NuevoAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevoAsignatura) : __defers["$.__views.addAsignatura!click!NuevoAsignatura"] = true;
    exports.destroy = function() {
        __alloyId40.off("fetch destroy change add remove reset", __alloyId41);
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