function Controller() {
    function __alloyId77() {
        var models = filtrado(__alloyId76);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId73 = models[i];
            __alloyId73.__transform = {};
            var __alloyId74 = Ti.UI.createTableViewRow({
                editable: "true",
                data: "undefined" != typeof __alloyId73.__transform["IdAsignatura"] ? __alloyId73.__transform["IdAsignatura"] : __alloyId73.get("IdAsignatura")
            });
            rows.push(__alloyId74);
            var __alloyId75 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "center",
                text: "undefined" != typeof __alloyId73.__transform["Nombre"] ? __alloyId73.__transform["Nombre"] : __alloyId73.get("Nombre"),
                textid: "undefined" != typeof __alloyId73.__transform["IdAsignatura"] ? __alloyId73.__transform["IdAsignatura"] : __alloyId73.get("IdAsignatura")
            });
            __alloyId74.add(__alloyId75);
        }
        $.__views.TablaAsignaturas.setData(rows);
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
        Alloy.Globals.tabGroup.open(tabAsignaturaController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinAsignaturas = Ti.UI.createWindow({
        id: "WinAsignaturas",
        title: "Asignaturas"
    });
    $.__views.WinAsignaturas && $.addTopLevelView($.__views.WinAsignaturas);
    $.__views.TablaAsignaturas = Ti.UI.createTableView({
        id: "TablaAsignaturas"
    });
    $.__views.WinAsignaturas.add($.__views.TablaAsignaturas);
    var __alloyId76 = Alloy.Collections["Asignatura"] || Asignatura;
    __alloyId76.on("fetch destroy change add remove reset", __alloyId77);
    $.__views.addAsignatura = Ti.UI.createButton({
        id: "addAsignatura",
        title: "Añadir",
        top: "-50dp"
    });
    $.__views.WinAsignaturas.add($.__views.addAsignatura);
    NuevaAsignatura ? $.__views.addAsignatura.addEventListener("click", NuevaAsignatura) : __defers["$.__views.addAsignatura!click!NuevaAsignatura"] = true;
    exports.destroy = function() {
        __alloyId76.off("fetch destroy change add remove reset", __alloyId77);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinAsignaturas.title = "Asignaturas";
    $.WinAsignaturas.setRightNavButton($.addAsignatura);
    var Asignaturas = Alloy.Collections.Asignatura;
    Asignaturas.fetch();
    $.TablaAsignaturas.addEventListener("delete", function(e) {
        var Asignaturas = Alloy.Collections.Asignatura;
        Asignaturas.fetch();
        var model = Asignaturas.get(e.rowData.data);
        model.destroy();
        Asignaturas.remove(model);
        Asignaturas.fetch();
    });
    __defers["$.__views.addAsignatura!click!NuevaAsignatura"] && $.__views.addAsignatura.addEventListener("click", NuevaAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;