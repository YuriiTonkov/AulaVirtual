function Controller() {
    function refreshScreen() {
        if (void 0 == data.IdClase) if (void 0 == data.IdAsignatura) ; else {
            $.btnEnviarTodos.visible = true;
            $.btnEnviar.visible = false;
        } else {
            $.btnEnviarTodos.visible = true;
            $.btnEnviar.visible = false;
        }
        if (void 0 == data.IdAnotacion) ; else {
            var anotacion = Alloy.Collections.Anotacion;
            anotacion.fetch();
            var model = anotacion.get(data.IdAnotacion);
            var datos = model.toJSON();
            $.dateTextField.text = datos.Fecha;
            $.txtTitulo.value = datos.Titulo;
            $.txtObservaciones.value = datos.Comentario;
        }
    }
    function Guardar() {
        if (void 0 == data.IdAnotacion) if (void 0 == data.IdClase) if (void 0 == data.IdAsignatura) {
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
            data.IdAnotacion = Anotacion.get("IdAnotacion");
            alert("Se ha creado la anotacion.");
        } else {
            var Anotacion = Alloy.createModel("Anotacion", {
                Fecha: $.dateTextField.text,
                IdAsignatura: data.IdAsignatura,
                Comentario: $.txtObservaciones.value,
                Titulo: $.txtTitulo.value
            });
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
            data.IdAnotacion = Anotacion.get("IdAnotacion");
            alert("Se ha creado la anotacion.");
        } else {
            var Anotacion = Alloy.createModel("Anotacion", {
                Fecha: $.dateTextField.text,
                IdClase: data.IdClase,
                Comentario: $.txtObservaciones.value,
                Titulo: $.txtTitulo.value
            });
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
            data.IdAnotacion = Anotacion.get("IdAnotacion");
            alert("Se ha creado la anotacion.");
        } else {
            var anotacion = Alloy.Collections.Anotacion;
            anotacion.fetch();
            var model = anotacion.get(data.IdAnotacion);
            model.set({
                Fecha: $.dateTextField.text,
                Comentario: $.txtObservaciones.value,
                Titulo: $.txtTitulo.value
            });
            model.save();
            alert("Se ha actualizado la anotacion.");
        }
    }
    function EnviarAnotacion() {
        EnviarAsync(data.IdAlumno, function(err) {
            err ? alert("Ups, hubo un problema en el envío del mensaje: " + err.message) : alert("El mensaje se ha enviado con éxito.");
        });
    }
    function EnviarAsync(idAlumno, callback2) {
        async.waterfall([ function(callback) {
            var alumnos = Alloy.Collections.Alumno;
            alumnos.fetch();
            var alumno = alumnos.get(idAlumno);
            var dato = alumno.toJSON();
            callback(null, dato);
        }, function(arg1, callback) {
            Cloud.Users.query({
                where: {
                    email: arg1.Email
                }
            }, function(e) {
                e.success ? callback(null, e.users[0], arg1.Email) : callback(e.error);
            });
        }, function(arg2, arg3, callback) {
            void 0 != arg2 ? Cloud.Messages.create({
                to_ids: arg2.id,
                body: $.txtObservaciones.value,
                subject: $.txtTitulo.value,
                custom_fields: {
                    IdTipo: 2,
                    Fecha: $.dateTextField.text,
                    Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") + " " + Ti.App.Properties.getString("Apellido2")
                }
            }, function(e) {
                e.success ? callback(null, null) : callback(e.error);
            }) : callback({
                name: "AlumnoNoEncontrado",
                message: "El alumno " + arg3 + " no existe en la nube"
            });
        } ], function(err) {
            err ? callback2(err) : callback2(null);
        });
    }
    function EnviarAnotacionTodos() {
        var alumno = Alloy.Collections.Alumno;
        var alumnos = [];
        alumno.fetch();
        var datos, model;
        model = void 0 != data.IdAsignatura ? alumno.where({
            Asignatura: data.IdAsignatura
        }) : alumno.where({
            Clase: data.IdClase
        });
        for (var i = 0; model.length > i; i++) {
            datos = model[i].toJSON();
            alumnos.push(datos.IdAlumno);
        }
        async.each(alumnos, EnviarAsync, function(err) {
            err ? alert("Ups, algo ha fallado en el envío: " + err.message) : alert("El mensaje se ha enviado correctamente a todos los alumnos");
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
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId36"
    });
    var __alloyId37 = [];
    __alloyId37.push($.__views.__alloyId36);
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
        text: "Fecha:",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
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
    $.__views.__alloyId36.add($.__views.dateTextField);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId39"
    });
    __alloyId37.push($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
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
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
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
    $.__views.__alloyId39.add($.__views.txtTitulo);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "200dp",
        id: "__alloyId41"
    });
    __alloyId37.push($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
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
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
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
    $.__views.__alloyId41.add($.__views.txtObservaciones);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId43"
    });
    __alloyId37.push($.__views.__alloyId43);
    $.__views.lblAviso = Ti.UI.createLabel({
        top: "15dp",
        width: "100%",
        height: "20dp",
        textAlign: "left",
        left: "45dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblAviso"
    });
    $.__views.__alloyId43.add($.__views.lblAviso);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "10%",
        data: __alloyId37,
        id: "Marco"
    });
    $.__views.winNuevaNota.add($.__views.Marco);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevaNota.add($.__views.btnGuardar);
    Guardar ? $.__views.btnGuardar.addEventListener("click", Guardar) : __defers["$.__views.btnGuardar!click!Guardar"] = true;
    $.__views.btnEnviar = Ti.UI.createButton({
        top: "10dp",
        id: "btnEnviar",
        title: "Enviar"
    });
    $.__views.winNuevaNota.add($.__views.btnEnviar);
    EnviarAnotacion ? $.__views.btnEnviar.addEventListener("click", EnviarAnotacion) : __defers["$.__views.btnEnviar!click!EnviarAnotacion"] = true;
    $.__views.btnEnviarTodos = Ti.UI.createButton({
        top: "20dp",
        visible: "false",
        id: "btnEnviarTodos",
        title: "EnviarTodos"
    });
    $.__views.winNuevaNota.add($.__views.btnEnviarTodos);
    EnviarAnotacionTodos ? $.__views.btnEnviarTodos.addEventListener("click", EnviarAnotacionTodos) : __defers["$.__views.btnEnviarTodos!click!EnviarAnotacionTodos"] = true;
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
    $.winNuevaNota.addEventListener("focus", function() {
        refreshScreen();
    });
    var validationCallback = function(errors) {
        if (errors.length > 0) {
            for (var i = 0; errors.length > i; i++) Ti.API.debug(errors[i].message);
            alert(errors[0].message);
        } else Guardar();
    };
    var returnCallback = function() {
        validator.run([ {
            id: "nameField",
            value: $.dateTextField.value,
            display: "Nombre",
            rules: "required"
        }, {
            id: "surname1Field",
            value: $.txtTitulo.value,
            display: "Apellido1",
            rules: "required|max_length[50]"
        }, {
            id: "surname2Field",
            value: $.txtObservaciones.value,
            display: "Apellido2",
            rules: "required|max_length[500]"
        } ], validationCallback);
    };
    $.btnGuardar.addEventListener("click", returnCallback);
    __defers["$.__views.btnGuardar!click!Guardar"] && $.__views.btnGuardar.addEventListener("click", Guardar);
    __defers["$.__views.btnEnviar!click!EnviarAnotacion"] && $.__views.btnEnviar.addEventListener("click", EnviarAnotacion);
    __defers["$.__views.btnEnviarTodos!click!EnviarAnotacionTodos"] && $.__views.btnEnviarTodos.addEventListener("click", EnviarAnotacionTodos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;