function Controller() {
    function GuardarExamen() {
        if (void 0 == data.IdAnotacion) if ("Pulse aqui" == $.dateTextField.text) alert("Tiene que introducir la fecha del aviso."); else {
            var Anotacion = Alloy.createModel("Anotacion", {
                Fecha: $.dateTextField.text,
                IdAlumno: data.IdAlumno,
                Comentario: $.txtObservaciones.value,
                Titulo: $.txtTitulo.value
            });
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
        } else {
            model.set({
                Fecha: $.dateTextField.text,
                IdAlumno: data.IdAlumno,
                Comentario: $.txtObservaciones.value,
                Titulo: $.txtTitulo.value
            });
            model.save();
        }
    }
    function EnviarExamen() {
        var alumno = Alloy.Collections.Alumno;
        alumno.fetch();
        var model = alumno.get(data.IdAlumno);
        var datos = model.toJSON();
        (datos.UsuarioCloud = 1) && Cloud.Users.query({
            where: {
                email: datos.Email
            }
        }, function(e) {
            e.success ? Cloud.Messages.create({
                to_ids: e.users[0].id,
                body: $.txtObservaciones.value,
                subject: $.txtTitulo.value,
                custom_fields: {
                    IdTipo: 2,
                    Fecha: $.dateTextField.text,
                    Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") + " " + Ti.App.Properties.getString("Apellido2")
                }
            }, function(e) {
                e.success ? alert("Enviado!") : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
            }) : alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
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
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId32"
    });
    var __alloyId33 = [];
    __alloyId33.push($.__views.__alloyId32);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Fecha:",
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
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
        text: "Pulse aqui",
        id: "dateTextField"
    });
    $.__views.__alloyId32.add($.__views.dateTextField);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId35"
    });
    __alloyId33.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Titulo:",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.txtTitulo = Ti.UI.createTextField({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        enabled: "false",
        id: "txtTitulo"
    });
    $.__views.__alloyId35.add($.__views.txtTitulo);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "300dp",
        id: "__alloyId37"
    });
    __alloyId33.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "6dp",
        top: "1dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Observaciones:",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.txtObservaciones = Ti.UI.createTextField({
        top: "15dp",
        width: "80%",
        height: "100%",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        enabled: "false",
        id: "txtObservaciones"
    });
    $.__views.__alloyId37.add($.__views.txtObservaciones);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "10%",
        data: __alloyId33,
        id: "Marco"
    });
    $.__views.winNuevaNota.add($.__views.Marco);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevaNota.add($.__views.btnGuardar);
    GuardarExamen ? $.__views.btnGuardar.addEventListener("click", GuardarExamen) : __defers["$.__views.btnGuardar!click!GuardarExamen"] = true;
    $.__views.btnEnviar = Ti.UI.createButton({
        top: "10dp",
        id: "btnEnviar",
        title: "Enviar"
    });
    $.__views.winNuevaNota.add($.__views.btnEnviar);
    EnviarExamen ? $.__views.btnEnviar.addEventListener("click", EnviarExamen) : __defers["$.__views.btnEnviar!click!EnviarExamen"] = true;
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
    if (void 0 == data.IdAnotacion) ; else {
        var anotacion = Alloy.Collections.Anotacion;
        anotacion.fetch();
        var model = anotacion.get(data.IdAnotacion);
        var datos = model.toJSON();
        $.dateTextField.text = datos.Fecha;
        $.txtTitulo.value = datos.Titulo;
        $.txtObservaciones.value = datos.Comentario;
    }
    $.txtTitulo.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el titulo",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtTitulo.value = e.text);
        });
        dialog.show();
    });
    $.txtObservaciones.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el texto de la observación",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtObservaciones.value = e.text);
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
    __defers["$.__views.btnEnviar!click!EnviarExamen"] && $.__views.btnEnviar.addEventListener("click", EnviarExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;