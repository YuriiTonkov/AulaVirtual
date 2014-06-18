function Controller() {
    function __alloyId117(e) {
        if (e && e.fromAdapter) return;
        __alloyId117.opts || {};
        var models = filtrado(__alloyId116);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId113 = models[i];
            __alloyId113.__transform = NombreAsignatura(__alloyId113);
            var __alloyId115 = Alloy.createController("AsignaturaFavRow", {
                $model: __alloyId113,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId115.getViewEx({
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
    this.__controllerPath = "WinAsignaturasFav";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinAsignaturasFav = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinAsignaturasFav",
        title: "Mis Asignaturas"
    });
    $.__views.WinAsignaturasFav && $.addTopLevelView($.__views.WinAsignaturasFav);
    $.__views.TablaAsignaturasFav = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaAsignaturasFav"
    });
    $.__views.WinAsignaturasFav.add($.__views.TablaAsignaturasFav);
    var __alloyId116 = Alloy.Collections["VW_Asignaturas_Favoritas"] || VW_Asignaturas_Favoritas;
    __alloyId116.on("fetch destroy change add remove reset", __alloyId117);
    exports.destroy = function() {
        __alloyId116.off("fetch destroy change add remove reset", __alloyId117);
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
    $.WinAsignaturasFav.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;