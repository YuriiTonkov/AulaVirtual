function Controller() {
    function __alloyId189() {
        __alloyId189.opts || {};
        var models = filtrado(__alloyId188);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId186 = models[i];
            __alloyId186.__transform = NombreClase(__alloyId186);
            var __alloyId187 = Alloy.createController("ClaseRow", {
                $model: __alloyId186
            });
            rows.push(__alloyId187.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaClases.setData(rows);
    }
    function NombreClase(model) {
        var transform = model.toJSON();
        transform.nombreCompleto = "Grupo " + transform.NombreClase;
        var alumnos = Alloy.Collections.Alumno;
        alumnos.fetch();
        var arrayAlumnos = alumnos.where({
            Clase: transform.IdClase
        });
        if ("0" == arrayAlumnos.length) transform.Alumnos = "No hay alumnos"; else {
            var texto = "Hay " + arrayAlumnos.length + " alummos.";
            transform.Alumnos = texto;
        }
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
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinClasesFav",
        title: "Clases"
    });
    $.__views.WinClasesFav && $.addTopLevelView($.__views.WinClasesFav);
    $.__views.TablaClases = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaClases"
    });
    $.__views.WinClasesFav.add($.__views.TablaClases);
    var __alloyId188 = Alloy.Collections["VW_Clases_Favoritas"] || VW_Clases_Favoritas;
    __alloyId188.on("fetch destroy change add remove reset", __alloyId189);
    exports.destroy = function() {
        __alloyId188.off("fetch destroy change add remove reset", __alloyId189);
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
    $.WinClasesFav.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;