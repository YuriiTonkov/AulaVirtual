function Controller() {
    function __alloyId193(e) {
        if (e && e.fromAdapter) return;
        __alloyId193.opts || {};
        var models = filtrado(__alloyId192);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId189 = models[i];
            __alloyId189.__transform = NombreClase(__alloyId189);
            var __alloyId191 = Alloy.createController("ClaseRow", {
                $model: __alloyId189,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId191.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaClases.setData(rows);
    }
    function NombreClase(model) {
        var transform = model.toJSON();
        transform.nombreCompleto = transform.NombreCurso + " de " + transform.NombreGrado + ". Clase " + transform.NombreClase;
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
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
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
    var __alloyId192 = Alloy.Collections["VW_Clases_Favoritas"] || VW_Clases_Favoritas;
    __alloyId192.on("fetch destroy change add remove reset", __alloyId193);
    exports.destroy = function() {
        __alloyId192.off("fetch destroy change add remove reset", __alloyId193);
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