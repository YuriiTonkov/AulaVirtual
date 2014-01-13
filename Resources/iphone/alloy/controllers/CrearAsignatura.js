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
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.txtNombreAsignatura = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtNombreAsignatura"
    });
    $.__views.__alloyId12.add($.__views.txtNombreAsignatura);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId14"
    });
    __alloyId11.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Descripcion",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.txtDescripcion = Ti.UI.createTextField({
        top: "16dp",
        width: "100%",
        height: "19dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtDescripcion"
    });
    $.__views.__alloyId14.add($.__views.txtDescripcion);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId16"
    });
    __alloyId11.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Asignatura Optativa",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.swtOptativa = Ti.UI.createSwitch({
        value: false,
        title: "Optativa",
        visible: "true",
        id: "swtOptativa"
    });
    $.__views.__alloyId16.add($.__views.swtOptativa);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "10%",
        data: __alloyId11,
        id: "Marco"
    });
    $.__views.winCrearAsignatura.add($.__views.Marco);
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