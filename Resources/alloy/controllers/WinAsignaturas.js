function Controller() {
    function __alloyId78() {
        __alloyId78.opts || {};
        var models = filtrado(__alloyId77);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId75 = models[i];
            __alloyId75.__transform = {};
            var __alloyId76 = Alloy.createController("AsignaturaRow", {
                $model: __alloyId75
            });
            rows.push(__alloyId76.getViewEx({
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
        var tabAsignaturaController = Alloy.createController("NuevaAsignatura", {
            IdAlumno: data.IdAlumno,
            Nombre: data.Nombre
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturaController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinAsignaturas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinAsignaturasAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinAsignaturasAlumno",
        title: "Asignaturas"
    });
    $.__views.WinAsignaturasAlumno && $.addTopLevelView($.__views.WinAsignaturasAlumno);
    $.__views.TablaAsignaturasByAlumno = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        id: "TablaAsignaturasByAlumno"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.TablaAsignaturasByAlumno);
    var __alloyId77 = Alloy.Collections["VW_Alumno_Asignatura_Asignatura"] || VW_Alumno_Asignatura_Asignatura;
    __alloyId77.on("fetch destroy change add remove reset", __alloyId78);
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.addAsignatura);
    NuevoAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevoAsignatura) : __defers["$.__views.addAsignatura!click!NuevoAsignatura"] = true;
    exports.destroy = function() {
        __alloyId77.off("fetch destroy change add remove reset", __alloyId78);
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
    $.WinAsignaturasAlumno.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.addAsignatura!click!NuevoAsignatura"] && $.__views.addAsignatura.addEventListener("click", NuevoAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;