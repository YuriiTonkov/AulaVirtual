function Controller() {
    function __alloyId122() {
        var models = filtrado(__alloyId121);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId119 = models[i];
            __alloyId119.__transform = {};
            var __alloyId120 = Alloy.createController("CursoRow", {
                $model: __alloyId119
            });
            rows.push(__alloyId120.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaCursos.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Grado: data.IdGrado
        });
        return coleccion_filtrada;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinCursos = Ti.UI.createWindow({
        id: "WinCursos",
        title: "Cursos"
    });
    $.__views.WinCursos && $.addTopLevelView($.__views.WinCursos);
    $.__views.TablaCursos = Ti.UI.createTableView({
        id: "TablaCursos"
    });
    $.__views.WinCursos.add($.__views.TablaCursos);
    var __alloyId121 = Alloy.Collections["Curso"] || Curso;
    __alloyId121.on("fetch destroy change add remove reset", __alloyId122);
    exports.destroy = function() {
        __alloyId121.off("fetch destroy change add remove reset", __alloyId122);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinCursos.title = data.NombreGrado;
    var cursos = Alloy.Collections.Curso;
    cursos.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;