function Controller() {
    function GuardarExamen() {
        if (void 0 == $.DtExamen.value) alert("Tiene que introducir la fecha del examen."); else {
            var Examen = Alloy.createModel("Examen", {
                FechaExamen: $.DtExamen.value,
                Evaluacion: data.Evaluacion
            });
            var coleccionExamenes = Alloy.Collections.Examen;
            coleccionExamenes.add(Examen);
            Examen.save();
            coleccionExamenes.fetch();
            $.NuevoExamen.close();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NuevoExamen = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "NuevoExamen"
    });
    $.__views.NuevoExamen && $.addTopLevelView($.__views.NuevoExamen);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        text: "Introduzca la fecha del examen",
        top: "5%",
        id: "__alloyId51"
    });
    $.__views.NuevoExamen.add($.__views.__alloyId51);
    $.__views.DtExamen = Ti.UI.createPicker({
        id: "DtExamen",
        type: "PICKER_TYPE_DATE"
    });
    $.__views.NuevoExamen.add($.__views.DtExamen);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "35%",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.NuevoExamen.add($.__views.btnGuardar);
    GuardarExamen ? $.__views.btnGuardar.addEventListener("click", GuardarExamen) : __defers["$.__views.btnGuardar!click!GuardarExamen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    __defers["$.__views.btnGuardar!click!GuardarExamen"] && $.__views.btnGuardar.addEventListener("click", GuardarExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;