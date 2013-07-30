function Controller() {
    function GuardarEvaluacion() {
        if ("" == $.txtNombreEvaluacion.value) alert("Tiene que introducir un nombre de la evaluacion."); else {
            var Evaluacion = Alloy.createModel("Evaluacion", {
                Nombre: $.txtNombreEvaluacion.value,
                AlumnoAsignatura: data.AlumnoAsignatura
            });
            var coleccionEvaluaciones = Alloy.Collections.Evaluacion;
            coleccionEvaluaciones.add(Evaluacion);
            Evaluacion.save();
            coleccionEvaluaciones.fetch();
            $.NuevaEvaluacion.close();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NuevaEvaluacion = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "NuevaEvaluacion"
    });
    $.__views.NuevaEvaluacion && $.addTopLevelView($.__views.NuevaEvaluacion);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: "80%",
        text: "Introduzca el nombre de la evaluacion",
        top: "5%",
        id: "__alloyId43"
    });
    $.__views.NuevaEvaluacion.add($.__views.__alloyId43);
    $.__views.txtNombreEvaluacion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "70%",
        top: "20%",
        id: "txtNombreEvaluacion"
    });
    $.__views.NuevaEvaluacion.add($.__views.txtNombreEvaluacion);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "35%",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.NuevaEvaluacion.add($.__views.btnGuardar);
    GuardarEvaluacion ? $.__views.btnGuardar.addEventListener("click", GuardarEvaluacion) : __defers["$.__views.btnGuardar!click!GuardarEvaluacion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    __defers["$.__views.btnGuardar!click!GuardarEvaluacion"] && $.__views.btnGuardar.addEventListener("click", GuardarEvaluacion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;