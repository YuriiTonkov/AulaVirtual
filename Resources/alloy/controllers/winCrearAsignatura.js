function Controller() {
    function __alloyId156() {
        __alloyId156.opts || {};
        var models = filtrado(__alloyId155);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId153 = models[i];
            __alloyId153.__transform = {};
            var __alloyId154 = Alloy.createController("AsignaturaAlumnoRow", {
                $model: __alloyId153
            });
            rows.push(__alloyId154.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAsignaturasAlumno.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Curso: data.Curso
        });
        return coleccion_filtrada;
    }
    function NuevaAsignatura() {
        var tabAsignaturaController = Alloy.createController("CrearAsignatura", {
            IdCurso: data.Curso
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturaController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "winCrearAsignatura";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinAsignaturasAlumno = Ti.UI.createWindow({
        id: "WinAsignaturasAlumno",
        title: "Asignaturas"
    });
    $.__views.WinAsignaturasAlumno && $.addTopLevelView($.__views.WinAsignaturasAlumno);
    $.__views.TablaAsignaturasAlumno = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        id: "TablaAsignaturasAlumno"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.TablaAsignaturasAlumno);
    var __alloyId155 = Alloy.Collections["Asignatura"] || Asignatura;
    __alloyId155.on("fetch destroy change add remove reset", __alloyId156);
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinAsignaturasAlumno.add($.__views.addAsignatura);
    NuevaAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevaAsignatura) : __defers["$.__views.addAsignatura!click!NuevaAsignatura"] = true;
    exports.destroy = function() {
        __alloyId155.off("fetch destroy change add remove reset", __alloyId156);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinCrearAsignatura.title = "Asignaturas";
    $.WinCrearAsignatura.setRightNavButton($.addAsignatura);
    var Asignaturas = Alloy.Collections.Asignatura;
    Asignaturas.fetch();
    $.TablaAsignaturasAlumno.addEventListener("delete", function(e) {
        var Asignaturas = Alloy.Collections.Asignatura;
        Asignaturas.fetch();
        var model = Asignaturas.get(e.rowData.data);
        model.destroy();
        Asignaturas.remove(model);
        Asignaturas.fetch();
    });
    $.WinCrearAsignatura.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.addAsignatura!click!NuevaAsignatura"] && $.__views.addAsignatura.addEventListener("click", NuevaAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;