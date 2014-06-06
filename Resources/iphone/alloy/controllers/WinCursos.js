function Controller() {
    function __alloyId130(e) {
        if (e && e.fromAdapter) return;
        __alloyId130.opts || {};
        var models = filtrado(__alloyId129);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId124 = models[i];
            __alloyId124.__transform = transform(__alloyId124);
            var __alloyId126 = Alloy.createController("CursoRow", {
                $model: __alloyId124,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId126.getViewEx({
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
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
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
    $.__views.__alloyId123 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/02HeaderCursos.png",
        height: "70dp",
        id: "__alloyId123"
    });
    $.__views.__alloyId128 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/02FooterCursos.png",
        id: "__alloyId128"
    });
    $.__views.TablaCursos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        headerView: $.__views.__alloyId123,
        footerView: $.__views.__alloyId128,
        id: "TablaCursos"
    });
    $.__views.WinCursos.add($.__views.TablaCursos);
    var __alloyId129 = Alloy.Collections["Curso"] || Curso;
    __alloyId129.on("fetch destroy change add remove reset", __alloyId130);
    exports.destroy = function() {
        __alloyId129.off("fetch destroy change add remove reset", __alloyId130);
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