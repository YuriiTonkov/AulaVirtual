function Controller() {
    function GuardarExamen() {
        if ("Pulse aqui" == $.dateTextField.text) alert("Tiene que introducir la fecha del examen."); else {
            var Examen = Alloy.createModel("Examen", {
                FechaExamen: $.dateTextField.text,
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevoExamen = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevoExamen"
    });
    $.__views.winNuevoExamen && $.addTopLevelView($.__views.winNuevoExamen);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "14dp"
        },
        text: "Fecha Examen:",
        top: "15%",
        id: "__alloyId52"
    });
    $.__views.winNuevoExamen.add($.__views.__alloyId52);
    $.__views.dateTextField = Ti.UI.createLabel({
        borderColor: "#000",
        height: "16dp",
        textAlign: "center",
        width: "40%",
        left: "35%",
        font: {
            fontSize: "14dp"
        },
        borderWidth: "1dp",
        top: "15%",
        text: "Pulse aqui",
        id: "dateTextField"
    });
    $.__views.winNuevoExamen.add($.__views.dateTextField);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "14dp"
        },
        text: "Nota:",
        top: "25%",
        id: "__alloyId53"
    });
    $.__views.winNuevoExamen.add($.__views.__alloyId53);
    $.__views.txtNota = Ti.UI.createTextField({
        borderColor: "#000",
        height: "16dp",
        textAlign: "center",
        width: "20%",
        left: "35%",
        font: {
            fontSize: "14dp"
        },
        top: "25%",
        id: "txtNota",
        keyboardType: "KEYBOARD_DECIMAL_PAD"
    });
    $.__views.winNuevoExamen.add($.__views.txtNota);
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