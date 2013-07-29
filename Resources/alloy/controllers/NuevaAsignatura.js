function Controller() {
    function __alloyId39() {
        var models = __alloyId38.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId35 = models[i];
            __alloyId35.__transform = {};
            var __alloyId36 = Ti.UI.createTableViewRow({
                editable: "true",
                data: "undefined" != typeof __alloyId35.__transform["IdAsignatura"] ? __alloyId35.__transform["IdAsignatura"] : __alloyId35.get("IdAsignatura")
            });
            rows.push(__alloyId36);
            var __alloyId37 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "center",
                text: "undefined" != typeof __alloyId35.__transform["Nombre"] ? __alloyId35.__transform["Nombre"] : __alloyId35.get("Nombre"),
                textid: "undefined" != typeof __alloyId35.__transform["IdAsignatura"] ? __alloyId35.__transform["IdAsignatura"] : __alloyId35.get("IdAsignatura")
            });
            __alloyId36.add(__alloyId37);
        }
        $.__views.TablaAsignaturas.setData(rows);
    }
    function GuardarAsignatura() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaAsignatura = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevaAsignatura"
    });
    $.__views.winNuevaAsignatura && $.addTopLevelView($.__views.winNuevaAsignatura);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        text: "Seleccione la asignatura",
        top: "5%",
        id: "__alloyId34"
    });
    $.__views.winNuevaAsignatura.add($.__views.__alloyId34);
    $.__views.TablaAsignaturas = Ti.UI.createTableView({
        id: "TablaAsignaturas",
        allowsSelection: "true"
    });
    $.__views.winNuevaAsignatura.add($.__views.TablaAsignaturas);
    var __alloyId38 = Alloy.Collections["VW_Asignatura_Alumno_Left"] || VW_Asignatura_Alumno_Left;
    __alloyId38.on("fetch destroy change add remove reset", __alloyId39);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.winNuevaAsignatura.add($.__views.btnGuardar);
    GuardarAsignatura ? $.__views.btnGuardar.addEventListener("click", GuardarAsignatura) : __defers["$.__views.btnGuardar!click!GuardarAsignatura"] = true;
    exports.destroy = function() {
        __alloyId38.off("fetch destroy change add remove reset", __alloyId39);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevaAsignatura.setRightNavButton($.btnGuardar);
    var Asignaturas = Alloy.Collections.VW_Asignatura_Alumno_Left;
    Asignaturas.filtraAsignatura(data.IdAlumno);
    __defers["$.__views.btnGuardar!click!GuardarAsignatura"] && $.__views.btnGuardar.addEventListener("click", GuardarAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;