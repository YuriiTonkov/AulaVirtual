function Controller() {
    function __alloyId105() {
        __alloyId105.opts || {};
        var models = filtrado(__alloyId104);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId100 = models[i];
            __alloyId100.__transform = transform(__alloyId100);
            var __alloyId101 = Alloy.createController("CursoRow", {
                $model: __alloyId100
            });
            rows.push(__alloyId101.getViewEx({
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
        if (0 == arrayGrupos.length) transform.Grupos = "No hay clases creadas"; else {
            var texto = "Clases ";
            for (var i = 0; arrayGrupos.length > i; i++) {
                var modelo = arrayGrupos[i].toJSON();
                "Clases " == texto ? texto += modelo.Nombre : texto = texto + ", " + modelo.Nombre;
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
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinCursos",
        title: "Cursos"
    });
    $.__views.WinCursos && $.addTopLevelView($.__views.WinCursos);
    $.__views.TablaCursos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaCursos"
    });
    $.__views.WinCursos.add($.__views.TablaCursos);
    $.__views.__alloyId98 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/02HeaderCursos.png",
        height: "70dp",
        id: "__alloyId98"
    });
    $.__views.TablaCursos.headerView = $.__views.__alloyId98;
    $.__views.__alloyId103 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/02FooterCursos.png",
        id: "__alloyId103"
    });
    $.__views.TablaCursos.footerView = $.__views.__alloyId103;
    var __alloyId104 = Alloy.Collections["Curso"] || Curso;
    __alloyId104.on("fetch destroy change add remove reset", __alloyId105);
    exports.destroy = function() {
        __alloyId104.off("fetch destroy change add remove reset", __alloyId105);
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