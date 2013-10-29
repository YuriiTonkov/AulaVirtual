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
    this.__controllerPath = "CrearAsignatura";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winCrearAsignatura = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "white",
        id: "winCrearAsignatura"
    });
    $.__views.winCrearAsignatura && $.addTopLevelView($.__views.winCrearAsignatura);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "10%",
        id: "Marco"
    });
    $.__views.winCrearAsignatura.add($.__views.Marco);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId10"
    });
    $.__views.winCrearAsignatura.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: "30%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Nombre",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.txtNombreAsignatura = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        editable: "false",
        id: "txtNombreAsignatura"
    });
    $.__views.__alloyId10.add($.__views.txtNombreAsignatura);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId12"
    });
    $.__views.winCrearAsignatura.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: "30%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Descripcion",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.txtDescripcion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        editable: "false",
        id: "txtDescripcion"
    });
    $.__views.__alloyId12.add($.__views.txtDescripcion);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId14"
    });
    $.__views.winCrearAsignatura.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: "30%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Asignatura Optativa",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.swtOptativa = Ti.UI.createSwitch({
        title: "Optativa",
        value: "false",
        visible: "true",
        id: "swtOptativa"
    });
    $.__views.__alloyId14.add($.__views.swtOptativa);
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
    $.txtNombreAsignatura.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el nombre de la asignatura",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtNombreAsignatura.value = e.text);
        });
        dialog.show();
    });
    $.txtDescripcion.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca breve descripcion",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtDescripcion.value = e.text);
        });
        dialog.show();
    });
    __defers["$.__views.btnGuardar!click!GuardarAsignatura"] && $.__views.btnGuardar.addEventListener("click", GuardarAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;