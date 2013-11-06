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
    $.__views.winNuevaEvaluacion = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "white",
        id: "winNuevaEvaluacion"
    });
    $.__views.winNuevaEvaluacion && $.addTopLevelView($.__views.winNuevaEvaluacion);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId27"
    });
    var __alloyId28 = [];
    __alloyId28.push($.__views.__alloyId27);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.txtNombreEvaluacion = Ti.UI.createTextField({
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
        id: "txtNombreEvaluacion"
    });
    $.__views.__alloyId27.add($.__views.txtNombreEvaluacion);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId30"
    });
    __alloyId28.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Fecha Inicio",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.lblFecha = Ti.UI.createTextField({
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
        id: "lblFecha"
    });
    $.__views.__alloyId30.add($.__views.lblFecha);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId32"
    });
    __alloyId28.push($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Peso",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
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
    $.__views.__alloyId32.add($.__views.txtPeso);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId34"
    });
    __alloyId28.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nota",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.txtNota = Ti.UI.createLabel({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "txtNota"
    });
    $.__views.__alloyId34.add($.__views.txtNota);
    $.__views.Formulario = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        data: __alloyId28,
        id: "Formulario"
    });
    $.__views.winNuevaEvaluacion.add($.__views.Formulario);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevaEvaluacion.add($.__views.btnGuardar);
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
    }
    $.txtNombreEvaluacion.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el nombre de la Evaluación",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtNombreEvaluacion.value = e.text);
        });
        dialog.show();
    });
    $.txtPeso.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el peso de la Evaluacion",
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
        $.lblFecha.value = dateValue.getMonth() + 1 + "/" + dateValue.getDate() + "/" + dateValue.getFullYear();
        picker_view.animate(slide_out);
    });
    var validationCallback = function(errors) {
        if (errors.length > 0) {
            for (var i = 0; errors.length > i; i++) Ti.API.debug(errors[i].message);
            alert(errors[0].message);
        } else Guardar();
    };
    var returnCallback = function() {
        validator.run([ {
            id: "dateField",
            value: $.lblFecha.value,
            display: "Fecha",
            rules: "required"
        }, {
            id: "notaField",
            value: $.txtNombreEvaluacion.value,
            display: "Nombre",
            rules: "required"
        }, {
            id: "pesoField",
            value: $.txtPeso.value,
            display: "Peso",
            rules: "required|numeric"
        } ], validationCallback);
    };
    $.btnGuardar.addEventListener("click", returnCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;