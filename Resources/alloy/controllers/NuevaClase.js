function Controller() {
    function GuardarClase() {
        if ("" == $.txtNombreClase.value) alert("Tiene que introducir un nombre de clase."); else {
            var clase = Alloy.createModel("Clase", {
                Nombre: $.txtNombreClase.value,
                Curso: data.IdCurso
            });
            var coleccionClases = Alloy.Collections.Clase;
            coleccionClases.add(clase);
            clase.save();
            coleccionClases.fetch();
            $.winNuevaClase.close();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaClase = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevaClase"
    });
    $.__views.winNuevaClase && $.addTopLevelView($.__views.winNuevaClase);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: "80%",
        text: "Introduzca el nombre de la clase",
        top: "5%",
        id: "__alloyId43"
    });
    $.__views.winNuevaClase.add($.__views.__alloyId43);
    $.__views.txtNombreClase = Ti.UI.createTextField({
        borderColor: "#000",
        width: "70%",
        top: "20%",
        id: "txtNombreClase"
    });
    $.__views.winNuevaClase.add($.__views.txtNombreClase);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevaClase.add($.__views.btnGuardar);
    GuardarClase ? $.__views.btnGuardar.addEventListener("click", GuardarClase) : __defers["$.__views.btnGuardar!click!GuardarClase"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevaClase.setRightNavButton($.btnGuardar);
    __defers["$.__views.btnGuardar!click!GuardarClase"] && $.__views.btnGuardar.addEventListener("click", GuardarClase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;