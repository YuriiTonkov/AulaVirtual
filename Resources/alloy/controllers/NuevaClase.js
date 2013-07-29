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
            $.NuevaClase.close();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NuevaClase = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "NuevaClase"
    });
    $.__views.NuevaClase && $.addTopLevelView($.__views.NuevaClase);
<<<<<<< HEAD
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: "80%",
        text: "Introduzca el nombre de la clase",
        top: "5%",
        id: "__alloyId29"
    });
    $.__views.NuevaClase.add($.__views.__alloyId29);
=======
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: "80%",
        text: "Introduzca el nombre de la clase",
        top: "5%",
        id: "__alloyId36"
    });
    $.__views.NuevaClase.add($.__views.__alloyId36);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtNombreClase = Ti.UI.createTextField({
        borderColor: "#000",
        width: "70%",
        top: "20%",
        id: "txtNombreClase"
    });
    $.__views.NuevaClase.add($.__views.txtNombreClase);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "35%",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.NuevaClase.add($.__views.btnGuardar);
    GuardarClase ? $.__views.btnGuardar.addEventListener("click", GuardarClase) : __defers["$.__views.btnGuardar!click!GuardarClase"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    __defers["$.__views.btnGuardar!click!GuardarClase"] && $.__views.btnGuardar.addEventListener("click", GuardarClase);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;