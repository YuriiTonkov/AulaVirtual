function Controller() {
    function __alloyId106() {
        var models = filtrado(__alloyId105);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId103 = models[i];
            __alloyId103.__transform = NombreAsignatura(__alloyId103);
            var __alloyId104 = Alloy.createController("AsignaturaFavRow", {
                $model: __alloyId103
            });
            rows.push(__alloyId104.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAsignaturasFav.setData(rows);
    }
    function NombreAsignatura(model) {
        var transform = model.toJSON();
        transform.nombrecompleto = transform.NombreAsignatura + " (" + transform.NombreCurso + " " + transform.NombreGrado + ")";
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
    $.__views.WinAsignaturasFav = Ti.UI.createWindow({
        id: "WinAsignaturasFav",
        title: "Mis Asignaturas"
    });
    $.__views.WinAsignaturasFav && $.addTopLevelView($.__views.WinAsignaturasFav);
    $.__views.TablaAsignaturasFav = Ti.UI.createTableView({
        id: "TablaAsignaturasFav"
    });
    $.__views.WinAsignaturasFav.add($.__views.TablaAsignaturasFav);
    var __alloyId105 = Alloy.Collections["VW_Asignaturas_Favoritas"] || VW_Asignaturas_Favoritas;
    __alloyId105.on("fetch destroy change add remove reset", __alloyId106);
    exports.destroy = function() {
        __alloyId105.off("fetch destroy change add remove reset", __alloyId106);
    };
    _.extend($, $.__views);
    $.WinAsignaturasFav.title = "Asignaturas Favoritas";
    var asignaturas = Alloy.Collections.VW_Asignaturas_Favoritas;
    asignaturas.fetch();
    $.TablaAsignaturasFav.addEventListener("delete", function(e) {
        var colAsignatura = Alloy.createCollection("Asignatura");
        colAsignatura.updateFavorito(e.rowData.data, 0);
        colAsignatura.fetch();
        asignaturas.fetch();
    });
    $.WinAsignaturasFav.addEventListener("focus", function() {
        var asignaturas = Alloy.Collections.VW_Asignaturas_Favoritas;
        asignaturas.fetch();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;