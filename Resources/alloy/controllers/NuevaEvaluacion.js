function Controller() {
    function Guardar() {
        GuardarEvaluacion();
        $.winNuevaEvaluacion.close();
    }
    function GuardarEvaluacion() {
        calcularMedia();
        var coleccionEvaluaciones = Alloy.Collections.Evaluacion;
        if (void 0 == data.IdEvaluacion) if ("" == $.txtNombreEvaluacion.value) alert("Tiene que introducir un nombre de la evaluacion."); else {
            var Evaluacion = Alloy.createModel("Evaluacion", {
                Nombre: $.txtNombreEvaluacion.value,
                AlumnoAsignatura: data.AlumnoAsignatura,
                Nota: $.txtNota.text,
                Peso: $.txtPeso.value,
                FechaInicio: $.lblFecha.text
            });
            coleccionEvaluaciones.add(Evaluacion);
            Evaluacion.save();
            coleccionEvaluaciones.fetch();
            $.winNuevaEvaluacion.close();
        } else {
            coleccionEvaluaciones.fetch();
            var modelEvaluacion = coleccionEvaluaciones.get(data.IdEvaluacion);
            modelEvaluacion.set({
                Nombre: $.txtNombreEvaluacion.value,
                Evaluacion: data.IdEvaluacion,
                Calificacion: $.txtNota.text,
                Peso: $.txtPeso.value,
                FechaInicio: $.lblFecha.text
            });
            modelEvaluacion.save();
            coleccionEvaluaciones.fetch();
        }
    }
    function calcularMedia() {
        var colExamenes = Alloy.createCollection("Examen");
        colExamenes.fetch();
        var modelExamen = colExamenes.where({
            Evaluacion: data.IdEvaluacion
        });
        var nota = 0;
        for (var i = 0; modelExamen.length > i; i++) {
            var datos = modelExamen[i].toJSON();
            nota += datos.Nota * datos.Peso / 100;
        }
        $.txtNota.text = nota;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevaEvaluacion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaEvaluacion = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "white",
        id: "winNuevaEvaluacion"
    });
    $.__views.winNuevaEvaluacion && $.addTopLevelView($.__views.winNuevaEvaluacion);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: "40%",
        left: "10dp",
        text: "Nombre",
        top: "10%",
        id: "__alloyId20"
    });
    $.__views.winNuevaEvaluacion.add($.__views.__alloyId20);
    $.__views.txtNombreEvaluacion = Ti.UI.createTextField({
        borderColor: "#000",
        left: "50%",
        width: "40%",
        top: "10%",
        id: "txtNombreEvaluacion"
    });
    $.__views.winNuevaEvaluacion.add($.__views.txtNombreEvaluacion);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: "40%",
        left: "10dp",
        text: "Fecha Inicio",
        top: "20%",
        id: "__alloyId21"
    });
    $.__views.winNuevaEvaluacion.add($.__views.__alloyId21);
    $.__views.lblFecha = Ti.UI.createLabel({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "40%",
        left: "50%",
        font: {
            fontSize: "14dp"
        },
        borderWidth: "1dp",
        top: "20%",
        id: "lblFecha"
    });
    $.__views.winNuevaEvaluacion.add($.__views.lblFecha);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: "40%",
        left: "10dp",
        text: "Peso",
        top: "30%",
        id: "__alloyId22"
    });
    $.__views.winNuevaEvaluacion.add($.__views.__alloyId22);
    $.__views.txtPeso = Ti.UI.createTextField({
        borderColor: "#000",
        left: "50%",
        width: "40%",
        top: "30%",
        id: "txtPeso"
    });
    $.__views.winNuevaEvaluacion.add($.__views.txtPeso);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: "40%",
        left: "10dp",
        text: "Nota",
        top: "40%",
        id: "__alloyId23"
    });
    $.__views.winNuevaEvaluacion.add($.__views.__alloyId23);
    $.__views.txtNota = Ti.UI.createLabel({
        borderColor: "#000",
        height: "20dp",
        textAlign: "center",
        width: "40%",
        left: "50%",
        font: {
            fontSize: "14dp"
        },
        borderWidth: "1dp",
        top: "40%",
        id: "txtNota"
    });
    $.__views.winNuevaEvaluacion.add($.__views.txtNota);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevaEvaluacion.add($.__views.btnGuardar);
    Guardar ? $.__views.btnGuardar.addEventListener("click", Guardar) : __defers["$.__views.btnGuardar!click!Guardar"] = true;
    $.__views.cancel = Ti.UI.createButton({
        top: "-90dp",
        id: "cancel",
        title: "Cancelar",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.winNuevaEvaluacion.add($.__views.cancel);
    $.__views.done = Ti.UI.createButton({
        top: "-100dp",
        id: "done",
        title: "Hecho",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    $.__views.winNuevaEvaluacion.add($.__views.done);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevaEvaluacion.setRightNavButton($.btnGuardar);
    if (void 0 == data.IdEvaluacion) ; else {
        var colEvaluaciones = Alloy.Collections.Evaluacion;
        colEvaluaciones.fetch();
        var modelEvaluacion = colEvaluaciones.get(data.IdEvaluacion);
        var ArrayEvaluacion = modelEvaluacion.toJSON();
        $.txtNombreEvaluacion.value = ArrayEvaluacion.Nombre;
        $.lblFecha.text = ArrayEvaluacion.FechaInicio;
        $.txtPeso.value = ArrayEvaluacion.Peso;
        GuardarEvaluacion();
    }
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
    $.lblFecha.addEventListener("click", function() {
        $.winNuevaEvaluacion.add(picker_view);
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
        $.lblFecha.text = dateValue.getMonth() + 1 + "/" + dateValue.getDate() + "/" + dateValue.getFullYear();
        picker_view.animate(slide_out);
    });
    __defers["$.__views.btnGuardar!click!Guardar"] && $.__views.btnGuardar.addEventListener("click", Guardar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;