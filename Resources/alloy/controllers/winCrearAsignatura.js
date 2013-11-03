function Controller() {
    function __alloyId197() {
        __alloyId197.opts || {};
        var models = filtrado(__alloyId196);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId194 = models[i];
            __alloyId194.__transform = {};
            var __alloyId195 = Alloy.createController("AsignaturaAlumnoRow", {
                $model: __alloyId194
            });
            rows.push(__alloyId195.getViewEx({
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
        backgroundColor: "e2effa",
        id: "WinCrearAsignatura",
        title: "Asignaturas"
    });
    $.__views.WinCrearAsignatura && $.addTopLevelView($.__views.WinCrearAsignatura);
    $.__views.TablaAsignaturasAlumno = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaAsignaturasAlumno"
    });
    $.__views.WinCrearAsignatura.add($.__views.TablaAsignaturasAlumno);
    var __alloyId196 = Alloy.Collections["Asignatura"] || Asignatura;
    __alloyId196.on("fetch destroy change add remove reset", __alloyId197);
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinCrearAsignatura.add($.__views.addAsignatura);
    NuevaAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevaAsignatura) : __defers["$.__views.addAsignatura!click!NuevaAsignatura"] = true;
    exports.destroy = function() {
        __alloyId196.off("fetch destroy change add remove reset", __alloyId197);
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