function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

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
    this.__controllerPath = "NuevaClase";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaClase = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "winNuevaClase"
    });
    $.__views.winNuevaClase && $.addTopLevelView($.__views.winNuevaClase);
    $.__views.__alloyId33 = Ti.UI.createImageView({
        top: "25dp",
        image: "library/images/iphone/helpScreen/0301HeaderNuevaClase.png",
        id: "__alloyId33"
    });
    $.__views.winNuevaClase.add($.__views.__alloyId33);
    $.__views.txtNombreClase = Ti.UI.createTextField({
        backgroundColor: "white",
        width: "80%",
        borderColor: "66cccc",
        borderRadius: "4",
        height: "28dp",
        top: "80dp",
        id: "txtNombreClase"
    });
    $.__views.winNuevaClase.add($.__views.txtNombreClase);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        top: "110dp",
        image: "library/images/iphone/helpScreen/0301FooterNuevaClase.png",
        id: "__alloyId34"
    });
    $.__views.winNuevaClase.add($.__views.__alloyId34);
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