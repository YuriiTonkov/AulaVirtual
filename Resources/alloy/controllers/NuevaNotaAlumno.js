function Controller() {
    function GuardarExamen() {
        if ("Pulse aqui" == $.dateTextField.text) alert("Tiene que introducir la fecha del examen."); else {
            var Anotacion = Alloy.createModel("Anotacion", {
                Fecha: $.dateTextField.text,
                IdAlumno: data.IdAlumno,
                Comentario: $.txtObservaciones.value
            });
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
            $.winNuevaNota.close();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevaNotaAlumno";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaNota = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "white",
        id: "winNuevaNota"
    });
    $.__views.winNuevaNota && $.addTopLevelView($.__views.winNuevaNota);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "14dp"
        },
        text: "Fecha:",
        top: "15%",
        id: "__alloyId24"
    });
    $.__views.winNuevaNota.add($.__views.__alloyId24);
    $.__views.dateTextField = Ti.UI.createLabel({
        height: "20dp",
        textAlign: "center",
        width: "40%",
        left: "35%",
        font: {
            fontSize: "14dp"
        },
        borderWidth: "1dp",
        borderColor: "#000",
        top: "15%",
        text: "Pulse aqui",
        id: "dateTextField"
    });
    $.__views.winNuevaNota.add($.__views.dateTextField);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: "40%",
        left: "2%",
        font: {
            fontSize: "14dp"
        },
        text: "Observaciones:",
        top: "35%",
        id: "__alloyId25"
    });
    $.__views.winNuevaNota.add($.__views.__alloyId25);
    $.__views.txtObservaciones = Ti.UI.createTextArea({
        borderColor: "#000",
        height: "200dp",
        textAlign: "left",
        width: "60%",
        left: "35%",
        font: {
            fontSize: "14dp"
        },
        top: "35%",
        id: "txtObservaciones"
    });
    $.__views.winNuevaNota.add($.__views.txtObservaciones);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevaNota.add($.__views.btnGuardar);
    GuardarExamen ? $.__views.btnGuardar.addEventListener("click", GuardarExamen) : __defers["$.__views.btnGuardar!click!GuardarExamen"] = true;
    $.__views.cancel = Ti.UI.createButton({
        top: "-90dp",
        id: "cancel",
        title: "Cancelar",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.winNuevaNota.add($.__views.cancel);
    $.__views.done = Ti.UI.createButton({
        top: "-100dp",
        id: "done",
        title: "Hecho",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.winNuevaNota.add($.__views.done);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevaNota.setRightNavButton($.btnGuardar);
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
        $.txtObservaciones.blur();
        $.winNuevaNota.add(picker_view);
        picker_view.animate(slide_in);
    });
    $.txtObservaciones.addEventListener("click", function() {
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