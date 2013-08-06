function Controller() {
    function __alloyId112() {
        var models = filtrado(__alloyId111);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId109 = models[i];
            __alloyId109.__transform = NombreClase(__alloyId109);
            var __alloyId110 = Alloy.createController("ClaseRow", {
                $model: __alloyId109
            });
            rows.push(__alloyId110.getViewEx({
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
    $.__views.WinClasesFav = Ti.UI.createWindow({
        id: "WinClasesFav",
        title: "Clases"
    });
    $.__views.WinClasesFav && $.addTopLevelView($.__views.WinClasesFav);
    $.__views.TablaClases = Ti.UI.createTableView({
        id: "TablaClases"
    });
    $.__views.WinClasesFav.add($.__views.TablaClases);
    var __alloyId111 = Alloy.Collections["VW_Clases_Favoritas"] || VW_Clases_Favoritas;
    __alloyId111.on("fetch destroy change add remove reset", __alloyId112);
    exports.destroy = function() {
        __alloyId111.off("fetch destroy change add remove reset", __alloyId112);
    };
    _.extend($, $.__views);
    $.WinClasesFav.title = "Clases Favoritas";
    var clases = Alloy.Collections.VW_Clases_Favoritas;
    clases.fetch();
    $.TablaClases.addEventListener("delete", function(e) {
        var colClase = Alloy.createCollection("Clase");
        colClase.updateFavorito(e.rowData.data, 0);
        colClase.fetch();
        clases.fetch();
    });
    $.WinClasesFav.addEventListener("focus", function() {
        var clase = Alloy.Collections.VW_Clases_Favoritas;
        clase.fetch();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;