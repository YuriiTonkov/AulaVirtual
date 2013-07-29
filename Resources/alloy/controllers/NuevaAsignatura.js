function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NuevaAsignatura = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "NuevaAsignatura"
    });
    $.__views.NuevaAsignatura && $.addTopLevelView($.__views.NuevaAsignatura);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "Seleccione la asignatura",
        top: "5%",
        id: "__alloyId28"
    });
    $.__views.NuevaAsignatura.add($.__views.__alloyId28);
    $.__views.txtNombreClase = Ti.UI.createTextField({
        top: "20%",
        id: "txtNombreClase"
    });
    $.__views.NuevaAsignatura.add($.__views.txtNombreClase);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "35%",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.NuevaAsignatura.add($.__views.btnGuardar);
    GuardarClase ? $.__views.btnGuardar.addEventListener("click", GuardarClase) : __defers["$.__views.btnGuardar!click!GuardarClase"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnGuardar!click!GuardarClase"] && $.__views.btnGuardar.addEventListener("click", GuardarClase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;