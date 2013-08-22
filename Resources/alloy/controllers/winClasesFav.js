function Controller() {
    function __alloyId140() {
        __alloyId140.opts || {};
        var models = filtrado(__alloyId139);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId137 = models[i];
            __alloyId137.__transform = NombreClase(__alloyId137);
            var __alloyId138 = Alloy.createController("ClaseRow", {
                $model: __alloyId137
            });
            rows.push(__alloyId138.getViewEx({
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
    this.__controllerPath = "winClasesFav";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinClasesFav = Ti.UI.createWindow({
        id: "WinClasesFav",
        title: "Clases"
    });
    $.__views.WinClasesFav && $.addTopLevelView($.__views.WinClasesFav);
    $.__views.TablaClases = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        backgroundImage: "backGround320x416Base.png",
        id: "TablaClases"
    });
    $.__views.WinClasesFav.add($.__views.TablaClases);
    var __alloyId139 = Alloy.Collections["VW_Clases_Favoritas"] || VW_Clases_Favoritas;
    __alloyId139.on("fetch destroy change add remove reset", __alloyId140);
    exports.destroy = function() {
        __alloyId139.off("fetch destroy change add remove reset", __alloyId140);
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