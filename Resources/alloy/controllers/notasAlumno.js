function Controller() {
    function __alloyId166() {
        __alloyId166.opts || {};
        var models = filtrado(__alloyId165);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId163 = models[i];
            __alloyId163.__transform = {};
            var __alloyId164 = Alloy.createController("AnotacionRow", {
                $model: __alloyId163
            });
            rows.push(__alloyId164.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAnotaciones.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            IdAlumno: data.IdAlumno
        });
        return coleccion_filtrada;
    }
    function NuevaAnotacion() {
        var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {
            IdAlumno: data.IdAlumno
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notasAlumno";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinNotasAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinNotasAlumno",
        title: "Anotaciones"
    });
    $.__views.WinNotasAlumno && $.addTopLevelView($.__views.WinNotasAlumno);
    $.__views.TablaAnotaciones = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "TablaAnotaciones"
    });
    $.__views.WinNotasAlumno.add($.__views.TablaAnotaciones);
    var __alloyId165 = Alloy.Collections["Anotacion"] || Anotacion;
    __alloyId165.on("fetch destroy change add remove reset", __alloyId166);
    $.__views.addAnotacion = Ti.UI.createButton({
        id: "addAnotacion",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinNotasAlumno.add($.__views.addAnotacion);
    NuevaAnotacion ? $.__views.addAnotacion.addEventListener("click", NuevaAnotacion) : __defers["$.__views.addAnotacion!click!NuevaAnotacion"] = true;
    exports.destroy = function() {
        __alloyId165.off("fetch destroy change add remove reset", __alloyId166);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinNotasAlumno.title = data.Nombre;
    $.WinNotasAlumno.setRightNavButton($.addAnotacion);
    var Anotaciones = Alloy.Collections.Anotacion;
    Anotaciones.fetch();
    $.TablaAnotaciones.addEventListener("delete", function(e) {
        var Anotaciones = Alloy.Collections.Anotacion;
        var model = Anotaciones.get(e.rowData.data);
        model.destroy();
        Anotaciones.remove(model);
        Anotaciones.fetch();
    });
    __defers["$.__views.addAnotacion!click!NuevaAnotacion"] && $.__views.addAnotacion.addEventListener("click", NuevaAnotacion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;