function Controller() {
<<<<<<< HEAD
    function __alloyId60() {
        var models = filtrado(__alloyId59);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId57 = models[i];
            __alloyId57.__transform = {};
            var __alloyId58 = Alloy.createController("CursoRow", {
                $model: __alloyId57
            });
            rows.push(__alloyId58.getViewEx({
=======
    function __alloyId67() {
        var models = filtrado(__alloyId66);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId64 = models[i];
            __alloyId64.__transform = {};
            var __alloyId65 = Alloy.createController("CursoRow", {
                $model: __alloyId64
            });
            rows.push(__alloyId65.getViewEx({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
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
<<<<<<< HEAD
    var __alloyId59 = Alloy.Collections["Curso"] || Curso;
    __alloyId59.on("fetch destroy change add remove reset", __alloyId60);
    exports.destroy = function() {
        __alloyId59.off("fetch destroy change add remove reset", __alloyId60);
=======
    var __alloyId66 = Alloy.Collections["Curso"] || Curso;
    __alloyId66.on("fetch destroy change add remove reset", __alloyId67);
    exports.destroy = function() {
        __alloyId66.off("fetch destroy change add remove reset", __alloyId67);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
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