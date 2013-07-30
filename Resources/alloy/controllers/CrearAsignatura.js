function Controller() {
    function GuardarAsignatura() {
        var Asignatura = Alloy.createModel("Asignatura", {
            Nombre: $.txtNombreAsignatura.value,
            Curso: data.IdCurso,
            Descripcion: $.txtDescripcion.value,
            Optativa: $.swtOptativa.value ? 1 : 0
        });
        var coleccionAsignaturas = Alloy.Collections.Asignatura;
        coleccionAsignaturas.add(Asignatura);
        Asignatura.save();
        coleccionAsignaturas.fetch();
        $.winCrearAsignatura.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winCrearAsignatura = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winCrearAsignatura"
    });
    $.__views.winCrearAsignatura && $.addTopLevelView($.__views.winCrearAsignatura);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: "30%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Nombre",
        top: "5%",
        id: "__alloyId0"
    });
    $.__views.winCrearAsignatura.add($.__views.__alloyId0);
    $.__views.txtNombreAsignatura = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "5%",
        id: "txtNombreAsignatura"
    });
    $.__views.winCrearAsignatura.add($.__views.txtNombreAsignatura);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: "30%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Descripcion",
        top: "15%",
        id: "__alloyId1"
    });
    $.__views.winCrearAsignatura.add($.__views.__alloyId1);
    $.__views.txtDescripcion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "15%",
        id: "txtDescripcion"
    });
    $.__views.winCrearAsignatura.add($.__views.txtDescripcion);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: "30%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Asignatura Optativa",
        top: "25%",
        id: "__alloyId2"
    });
    $.__views.winCrearAsignatura.add($.__views.__alloyId2);
    $.__views.swtOptativa = Ti.UI.createSwitch({
        title: "Optativa",
        value: "false",
        visible: "true",
        top: "25%",
        id: "swtOptativa"
    });
    $.__views.winCrearAsignatura.add($.__views.swtOptativa);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winCrearAsignatura.add($.__views.btnGuardar);
    GuardarAsignatura ? $.__views.btnGuardar.addEventListener("click", GuardarAsignatura) : __defers["$.__views.btnGuardar!click!GuardarAsignatura"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winCrearAsignatura.title = data.Nombre;
    $.winCrearAsignatura.setRightNavButton($.btnGuardar);
    __defers["$.__views.btnGuardar!click!GuardarAsignatura"] && $.__views.btnGuardar.addEventListener("click", GuardarAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;