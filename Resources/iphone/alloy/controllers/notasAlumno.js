function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId214(e) {
        if (e && e.fromAdapter) return;
        __alloyId214.opts || {};
        var models = filtrado(__alloyId213);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId210 = models[i];
            __alloyId210.__transform = {};
            var __alloyId212 = Alloy.createController("AnotacionRow", {
                $model: __alloyId210,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId212.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAnotaciones.setData(rows);
    }
    function filtrado(collection) {
        if (void 0 == data.IdAlumno) if (void 0 == data.IdClase) var coleccion_filtrada = collection.where({
            IdAsignatura: data.IdAsignatura
        }); else var coleccion_filtrada = collection.where({
            IdClase: data.IdClase
        }); else var coleccion_filtrada = collection.where({
            IdAlumno: data.IdAlumno
        });
        return coleccion_filtrada;
    }
    function NuevaAnotacion() {
        if (void 0 == data.IdAlumno) if (void 0 == data.IdClase) {
            var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
        } else {
            var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {
                IdClase: data.IdClase
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
        } else {
            var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {
                IdAlumno: data.IdAlumno
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notasAlumno";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinNotasAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinNotasAlumno",
        title: "Anotaciones"
    });
    $.__views.WinNotasAlumno && $.addTopLevelView($.__views.WinNotasAlumno);
    $.__views.TablaAnotaciones = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaAnotaciones"
    });
    $.__views.WinNotasAlumno.add($.__views.TablaAnotaciones);
    var __alloyId213 = Alloy.Collections["Anotacion"] || Anotacion;
    __alloyId213.on("fetch destroy change add remove reset", __alloyId214);
    $.__views.addAnotacion = Ti.UI.createButton({
        id: "addAnotacion",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinNotasAlumno.add($.__views.addAnotacion);
    NuevaAnotacion ? $.__views.addAnotacion.addEventListener("click", NuevaAnotacion) : __defers["$.__views.addAnotacion!click!NuevaAnotacion"] = true;
    exports.destroy = function() {
        __alloyId213.off("fetch destroy change add remove reset", __alloyId214);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinNotasAlumno.title = data.Nombre;
    $.WinNotasAlumno.setRightNavButton($.addAnotacion);
    var Anotaciones = Alloy.Collections.Anotacion;
    Anotaciones.fetch();
    $.TablaAnotaciones.addEventListener("delete", function(e) {
        var Anotaciones = Alloy.Collections.Anotacion;
        var model = Anotaciones.get(e.rowData.data);
        model.destroy();
        Anotaciones.remove(model);
        Anotaciones.fetch();
    });
    $.TablaAnotaciones.addEventListener("click", function(e) {
        if ("tblAnotacionRow" == e.source.id) {
            var tabItemController = Alloy.createController("NuevaNotaAlumno", {
                IdAnotacion: e.source.data,
                IdAlumno: data.IdAlumno,
                IdClase: data.IdClase,
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabItemController.getView());
        } else {
            var tabItemController = Alloy.createController("NuevaNotaAlumno", {
                IdAnotacion: e.source.textid,
                IdAlumno: data.IdAlumno,
                IdClase: data.IdClase,
                IdAsignatura: data.IdAsignatura
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabItemController.getView());
        }
    });
    __defers["$.__views.addAnotacion!click!NuevaAnotacion"] && $.__views.addAnotacion.addEventListener("click", NuevaAnotacion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;