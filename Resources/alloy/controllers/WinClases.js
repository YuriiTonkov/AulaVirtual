function Controller() {
    function __alloyId125() {
        var models = filtrado(__alloyId124);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId122 = models[i];
            __alloyId122.__transform = NombreClase(__alloyId122);
            var __alloyId123 = Alloy.createController("ClaseRow", {
                $model: __alloyId122
            });
            rows.push(__alloyId123.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaClases.setData(rows);
    }
    function NombreClase(model) {
        var transform = model.toJSON();
        transform.nombreCompleto = "Grupo " + transform.Nombre;
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
        Alloy.Globals.GrupoTab.activeTab.open(tabClasesController.getView());
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
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        id: "TablaClases"
    });
    $.__views.WinClases.add($.__views.TablaClases);
    var __alloyId124 = Alloy.Collections["Clase"] || Clase;
    __alloyId124.on("fetch destroy change add remove reset", __alloyId125);
    $.__views.addClase = Ti.UI.createButton({
        id: "addClase",
        title: "Nueva",
        top: "-50dp"
    });
    $.__views.WinClases.add($.__views.addClase);
    NuevaClase ? $.__views.addClase.addEventListener("click", NuevaClase) : __defers["$.__views.addClase!click!NuevaClase"] = true;
    exports.destroy = function() {
        __alloyId124.off("fetch destroy change add remove reset", __alloyId125);
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
    $.WinClases.addEventListener("focus", function() {
        if ("1" == Ti.App.Properties.getString("Ayuda")) {
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los grupos pertenecientes a " + data.Nombre + ". A través de esta tabla se puede acceder a los diferentes Alumnos de cada grupo.",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
        }
    });
    __defers["$.__views.addClase!click!NuevaClase"] && $.__views.addClase.addEventListener("click", NuevaClase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;