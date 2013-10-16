function Controller() {
    function __alloyId180() {
        __alloyId180.opts || {};
        var models = filtrado(__alloyId179);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId177 = models[i];
            __alloyId177.__transform = {};
            var __alloyId178 = Alloy.createController("AsignaturaAlumnoRow", {
                $model: __alloyId177
            });
            rows.push(__alloyId178.getViewEx({
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
    $.__views.WinCrearAsignatura = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "EEE",
        id: "WinCrearAsignatura",
        title: "Asignaturas"
    });
    $.__views.WinCrearAsignatura && $.addTopLevelView($.__views.WinCrearAsignatura);
    $.__views.TablaAsignaturasAlumno = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "TablaAsignaturasAlumno"
    });
    $.__views.WinCrearAsignatura.add($.__views.TablaAsignaturasAlumno);
    var __alloyId179 = Alloy.Collections["Asignatura"] || Asignatura;
    __alloyId179.on("fetch destroy change add remove reset", __alloyId180);
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinCrearAsignatura.add($.__views.addAsignatura);
    NuevaAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevaAsignatura) : __defers["$.__views.addAsignatura!click!NuevaAsignatura"] = true;
    exports.destroy = function() {
        __alloyId179.off("fetch destroy change add remove reset", __alloyId180);
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