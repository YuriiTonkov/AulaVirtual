function Controller() {
    function __alloyId72() {
        __alloyId72.opts || {};
        var models = filtrado(__alloyId71);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId69 = models[i];
            __alloyId69.__transform = transform(__alloyId69);
            var __alloyId70 = Alloy.createController("CursoRow", {
                $model: __alloyId69
            });
            rows.push(__alloyId70.getViewEx({
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
    function transform(model) {
        var transform = model.toJSON();
        var colGrupos = Alloy.Collections.Clase;
        colGrupos.fetch();
        var arrayGrupos = colGrupos.where({
            Curso: transform.IdCurso
        });
        if (0 == arrayGrupos.length) transform.Grupos = "No hay grupos creados"; else {
            var texto = "Grupos ";
            for (var i = 0; arrayGrupos.length > i; i++) {
                var modelo = arrayGrupos[i].toJSON();
                "Grupos " == texto ? texto += modelo.Nombre : texto = texto + ", " + modelo.Nombre;
            }
            transform.Grupos = texto;
        }
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinCursos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinCursos = Ti.UI.createWindow({
        id: "WinCursos",
        title: "Cursos"
    });
    $.__views.WinCursos && $.addTopLevelView($.__views.WinCursos);
    $.__views.TablaCursos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        id: "TablaCursos"
    });
    $.__views.WinCursos.add($.__views.TablaCursos);
    var __alloyId71 = Alloy.Collections["Curso"] || Curso;
    __alloyId71.on("fetch destroy change add remove reset", __alloyId72);
    exports.destroy = function() {
        __alloyId71.off("fetch destroy change add remove reset", __alloyId72);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinCursos.addEventListener("focus", function() {
        $.WinCursos.title = data.NombreGrado;
        var cursos = Alloy.Collections.Curso;
        cursos.fetch();
        if ("1" == Ti.App.Properties.getString("Ayuda")) {
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los cursos pertenecientes a " + data.NombreGrado + ". Se puede acceder a los diferentes grupos del curso o a través del detalle a las asignaturas existentes para ese curso.",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
        }
    });
    $.WinCursos.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;