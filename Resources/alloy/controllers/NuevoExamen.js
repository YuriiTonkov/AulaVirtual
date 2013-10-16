function Controller() {
    function GuardarExamen() {
        if ("Pulse aqui" == $.dateTextField.text) alert("Tiene que introducir la fecha del examen."); else {
            var Examen = Alloy.createModel("Examen", {
                FechaExamen: $.dateTextField.text,
                Peso: $.txtPeso.value,
                Evaluacion: data.Evaluacion,
                Nota: $.txtNota.value
            });
            var coleccionExamenes = Alloy.Collections.Examen;
            coleccionExamenes.add(Examen);
            Examen.save();
            coleccionExamenes.fetch();
            $.winNuevoExamen.close();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevoExamen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevoExamen = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "winNuevoExamen"
    });
    $.__views.winNuevoExamen && $.addTopLevelView($.__views.winNuevoExamen);
    $.__views.__alloyId54 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId54"
    });
    var __alloyId55 = [];
    __alloyId55.push($.__views.__alloyId54);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Fecha Examen:",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.dateTextField = Ti.UI.createLabel({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "dateTextField"
    });
    $.__views.__alloyId54.add($.__views.dateTextField);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId57"
    });
    __alloyId55.push($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nota:",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.txtNota = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtNota"
    });
    $.__views.__alloyId57.add($.__views.txtNota);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId59"
    });
    __alloyId55.push($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Peso:",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.txtPeso = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        editable: "false",
        id: "txtPeso"
    });
    $.__views.__alloyId59.add($.__views.txtPeso);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId55,
        id: "Marco"
    });
    $.__views.winNuevoExamen.add($.__views.Marco);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevoExamen.add($.__views.btnGuardar);
    GuardarExamen ? $.__views.btnGuardar.addEventListener("click", GuardarExamen) : __defers["$.__views.btnGuardar!click!GuardarExamen"] = true;
    $.__views.cancel = Ti.UI.createButton({
        top: "-90dp",
        id: "cancel",
        title: "Cancelar",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.winNuevoExamen.add($.__views.cancel);
    $.__views.done = Ti.UI.createButton({
        top: "-100dp",
        id: "done",
        title: "Hecho",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.winNuevoExamen.add($.__views.done);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevoExamen.setRightNavButton($.btnGuardar);
    $.txtNota.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca la nota del examen",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtNota.value = e.text);
        });
        dialog.show();
    });
    $.txtPeso.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el segundo apellido",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtPeso.value = e.text);
        });
        dialog.show();
    });
    var slide_in = Titanium.UI.createAnimation({
        bottom: 0
    });
    var slide_out = Titanium.UI.createAnimation({
        bottom: -251
    });
    var picker_view = Titanium.UI.createView({
        height: 251,
        bottom: -251
    });
    var cancel = $.cancel;
    var done = $.done;
    var spacer = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    var toolbar = Ti.UI.iOS.createToolbar({
        top: 0,
        items: [ cancel, spacer, done ]
    });
    var dateValue = new Date();
    var minDate = new Date();
    minDate.setFullYear(1900);
    minDate.setMonth(0);
    minDate.setDate(1);
    var picker = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        value: dateValue,
        selectionIndicator: "true"
    });
    picker_view.add(picker);
    picker_view.add(toolbar);
    $.dateTextField.addEventListener("click", function() {
        $.txtNota.blur();
        $.winNuevoExamen.add(picker_view);
        picker_view.animate(slide_in);
    });
    $.txtNota.addEventListener("click", function() {
        picker_view.animate(slide_out);
    });
    $.cancel.addEventListener("click", function() {
        picker_view.animate(slide_out);
    });
    $.done.addEventListener("click", function() {
        var dateValue = picker.value;
        $.dateTextField.text = dateValue.getMonth() + 1 + "/" + dateValue.getDate() + "/" + dateValue.getFullYear();
        picker_view.animate(slide_out);
    });
    __defers["$.__views.btnGuardar!click!GuardarExamen"] && $.__views.btnGuardar.addEventListener("click", GuardarExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;