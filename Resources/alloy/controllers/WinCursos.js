function Controller() {
    function __alloyId82() {
        var models = filtrado(__alloyId81);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId79 = models[i];
            __alloyId79.__transform = {};
            var __alloyId80 = Alloy.createController("CursoRow", {
                $model: __alloyId79
            });
            rows.push(__alloyId80.getViewEx({
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
    var __alloyId81 = Alloy.Collections["Curso"] || Curso;
    __alloyId81.on("fetch destroy change add remove reset", __alloyId82);
    exports.destroy = function() {
        __alloyId81.off("fetch destroy change add remove reset", __alloyId82);
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