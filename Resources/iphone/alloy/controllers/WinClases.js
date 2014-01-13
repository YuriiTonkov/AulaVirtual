function Controller() {
    function __alloyId111(e) {
        if (e && e.fromAdapter) return;
        __alloyId111.opts || {};
        var models = filtrado(__alloyId110);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId105 = models[i];
            __alloyId105.__transform = NombreClase(__alloyId105);
            var __alloyId107 = Alloy.createController("ClaseRow", {
                $model: __alloyId105,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId107.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaClases.setData(rows);
    }
    function NombreClase(model) {
        var transform = model.toJSON();
        transform.nombreCompleto = "Clase " + transform.Nombre;
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
            Curso: data.IdCurso
        });
        return coleccion_filtrada;
    }
    function NuevaClase() {
        var tabClasesController = Alloy.createController("NuevaClase", {
            IdCurso: data.IdCurso,
            Nombre: data.Nombre
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabClasesController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinClases";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinClases = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinClases",
        title: "Clases"
    });
    $.__views.WinClases && $.addTopLevelView($.__views.WinClases);
    $.__views.__alloyId104 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/03HeaderClases.png",
        height: "70dp",
        id: "__alloyId104"
    });
    $.__views.__alloyId109 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/03FooterClases.png",
        id: "__alloyId109"
    });
    $.__views.TablaClases = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        headerView: $.__views.__alloyId104,
        footerView: $.__views.__alloyId109,
        id: "TablaClases"
    });
    $.__views.WinClases.add($.__views.TablaClases);
    var __alloyId110 = Alloy.Collections["Clase"] || Clase;
    __alloyId110.on("fetch destroy change add remove reset", __alloyId111);
    $.__views.addClase = Ti.UI.createButton({
        id: "addClase",
        title: "Nueva",
        top: "-50dp"
    });
    $.__views.WinClases.add($.__views.addClase);
    NuevaClase ? $.__views.addClase.addEventListener("click", NuevaClase) : __defers["$.__views.addClase!click!NuevaClase"] = true;
    exports.destroy = function() {
        __alloyId110.off("fetch destroy change add remove reset", __alloyId111);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinClases.title = data.Nombre;
    $.WinClases.setRightNavButton($.addClase);
    $.WinClases.addEventListener("focus", function() {
        $.WinClases.title = data.Nombre;
        var clases = Alloy.Collections.Clase;
        clases.fetch();
        if ("1" == Ti.App.Properties.getString("Ayuda")) {
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar las clases pertenecientes a " + data.Nombre + ". Se puede acceder a los diferentes alumnos.",
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
        }
    });
    $.TablaClases.addEventListener("delete", function(e) {
        var clases = Alloy.Collections.Clase;
        var model = clases.get(e.rowData.data);
        model.destroy();
        clases.remove(model);
        clases.fetch();
    });
    $.WinClases.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.addClase!click!NuevaClase"] && $.__views.addClase.addEventListener("click", NuevaClase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;