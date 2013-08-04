function Controller() {
    function __alloyId86() {
        var models = filtrado(__alloyId85);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId83 = models[i];
            __alloyId83.__transform = NombreClase(__alloyId83);
            var __alloyId84 = Alloy.createController("ClaseRow", {
                $model: __alloyId83
            });
            rows.push(__alloyId84.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaClases.setData(rows);
    }
    function NombreClase(model) {
        var transform = model.toJSON();
        transform.nombreCompleto = transform.NombreGrado + " " + transform.NombreCurso + " " + transform.NombreClase;
        return transform;
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Favorita: 1
        });
        return coleccion_filtrada;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinClases = Ti.UI.createWindow({
        id: "WinClases",
        title: "Clases"
    });
    $.__views.WinClases && $.addTopLevelView($.__views.WinClases);
    $.__views.TablaClases = Ti.UI.createTableView({
        id: "TablaClases"
    });
    $.__views.WinClases.add($.__views.TablaClases);
    var __alloyId85 = Alloy.Collections["VW_Clases_Favoritas"] || VW_Clases_Favoritas;
    __alloyId85.on("fetch destroy change add remove reset", __alloyId86);
    exports.destroy = function() {
        __alloyId85.off("fetch destroy change add remove reset", __alloyId86);
    };
    _.extend($, $.__views);
    $.WinClases.title = "Clases Favoritas";
    var clases = Alloy.Collections.VW_Clases_Favoritas;
    clases.fetch();
    $.TablaClases.addEventListener("delete", function(e) {
        var colClase = Alloy.createCollection("Clase");
        colClase.updateFavorito(e.rowData.data, 0);
        colClase.fetch();
        clases.fetch();
    });
    $.WinClases.addEventListener("focus", function() {
        var clase = Alloy.Collections.VW_Clases_Favoritas;
        clase.fetch();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;