function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId148(e) {
        if (e && e.fromAdapter) return;
        __alloyId148.opts || {};
        var models = filtrado(__alloyId147);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId144 = models[i];
            __alloyId144.__transform = TextoFila(__alloyId144);
            var __alloyId146 = Alloy.createController("ExamenRow", {
                $model: __alloyId144,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId146.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaExamenes.setData(rows);
    }
    function TextoFila(model) {
        var transform = model.toJSON();
        transform.TextoFila = "Examen: " + transform.FechaExamen + "   Nota: " + transform.Nota;
        return transform;
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Evaluacion: data.IdEvaluacion
        });
        return coleccion_filtrada;
    }
    function NuevoExamen() {
        var tabExamenController = Alloy.createController("NuevoExamen", {
            Evaluacion: data.IdEvaluacion
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabExamenController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinExamenes";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.WinExamenes = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinExamenes",
        title: "Examenes"
    });
    $.__views.WinExamenes && $.addTopLevelView($.__views.WinExamenes);
    $.__views.TablaExamenes = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaExamenes"
    });
    $.__views.WinExamenes.add($.__views.TablaExamenes);
    var __alloyId147 = Alloy.Collections["Examen"] || Examen;
    __alloyId147.on("fetch destroy change add remove reset", __alloyId148);
    $.__views.addExamen = Ti.UI.createButton({
        id: "addExamen",
        title: "Nuevo",
        top: "-50dp"
    });
    $.__views.WinExamenes.add($.__views.addExamen);
    NuevoExamen ? $.__views.addExamen.addEventListener("click", NuevoExamen) : __defers["$.__views.addExamen!click!NuevoExamen"] = true;
    exports.destroy = function() {
        __alloyId147.off("fetch destroy change add remove reset", __alloyId148);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinExamenes.title = data.Nombre;
    $.WinExamenes.setRightNavButton($.addExamen);
    var Examenes = Alloy.Collections.Examen;
    Examenes.fetch();
    $.TablaExamenes.addEventListener("delete", function(e) {
        var Examenes = Alloy.Collections.Examen;
        var model = Examenes.get(e.rowData.data);
        model.destroy();
        Examenes.remove(model);
        Examenes.fetch();
    });
    $.WinExamenes.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.addExamen!click!NuevoExamen"] && $.__views.addExamen.addEventListener("click", NuevoExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;