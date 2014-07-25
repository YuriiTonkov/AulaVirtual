function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function GuardarExamen() {
        var coleccionExamenes = Alloy.Collections.Examen;
        if (void 0 == data.IdExamen) {
            var Examen = Alloy.createModel("Examen", {
                FechaExamen: $.dateTextField.value,
                Peso: $.txtPeso.value,
                Evaluacion: data.Evaluacion,
                Nota: $.txtNota.value
            });
            coleccionExamenes.add(Examen);
            Examen.save();
            coleccionExamenes.fetch();
            $.winNuevoExamen.close();
        } else {
            coleccionExamenes.fetch();
            var modelExamen = coleccionExamenes.get(data.IdExamen);
            modelExamen.set({
                Nota: $.txtNota.value,
                Peso: $.txtPeso.value,
                FechaExamen: $.dateTextField.value
            });
            modelExamen.save();
            coleccionExamenes.fetch();
        }
    }
    function Enviar() {
        null != ArrayAlumno.UsuarioCloud ? EnviarAsync(ArrayAlumno.IdAlumno, function(err) {
            err ? alert("Ups, hubo un problema en el envío del mensaje: " + err.message) : alert("El mensaje se ha enviado con éxito.");
        }) : EnviarMailAsync(ArrayAlumno.IdAlumno, function(err) {
            err ? alert("Ups, hubo un problema en el envío del mensaje: " + err.message) : alert("El mensaje se ha enviado con éxito.");
        });
    }
    function EnviarAsync(idAlumno, callback2) {
        async.waterfall([ function(callback) {
            var examen = Alloy.Collections.VW_Examen_Alumno;
            examen.fetch();
            var alumno = examen.get(data.IdExamen);
            var dato = alumno.toJSON();
            callback(null, dato);
        }, function(arg1, callback) {
            Cloud.Users.query({
                where: {
                    email: arg1.Email
                }
            }, function(e) {
                e.success ? callback(null, e.users[0], arg1) : callback(e.error);
            });
        }, function(arg2, arg3, callback) {
            void 0 != arg2 ? Cloud.Messages.create({
                to_ids: arg2.id,
                body: "El examen se ha evaluado con la calificacion de " + arg3.Nota.toString() + ". " + arg3.Descripcion,
                subject: "Calificación del examen de " + arg3.Asignatura + " del" + arg3.FechaExamen,
                custom_fields: {
                    IdTipo: 1,
                    Fecha: arg3.FechaExamen,
                    Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") + " " + Ti.App.Properties.getString("Apellido2")
                }
            }, function(e) {
                e.success ? callback(null, null) : callback(e.error);
            }) : callback({
                name: "AlumnoNoEncontrado",
                message: "El alumno " + arg3.Email + " no existe en la nube"
            });
        } ], function(err) {
            err ? callback2(err) : callback2(null);
        });
    }
    function EnviarMailAsync(idAlumno, callback2) {
        async.waterfall([ function(callback) {
            var examen = Alloy.Collections.VW_Examen_Alumno;
            examen.fetch();
            var alumno = examen.get(data.IdExamen);
            var dato = alumno.toJSON();
            callback(null, dato);
        }, function(arg1, callback) {
            Cloud.Users.query({
                where: {
                    email: arg1.Email
                }
            }, function(e) {
                e.success ? callback(null, e.users[0], arg1) : callback(e.error);
            });
        }, function(arg2, arg3, callback) {
            if (void 0 != arg2) {
                if (void 0 != arg3) {
                    void 0 == arg3.Descripcion && (arg3.Descripcion = "");
                    Cloud.Emails.send({
                        template: "Note",
                        recipients: arg3.Email,
                        titulo: "Calificación del examen de " + arg3.ASIGNATURA + " del " + arg3.FechaExamen,
                        texto: "El examen se ha evaluado con la calificacion de " + arg3.Nota.toString() + ". " + arg3.Descripcion
                    }, function(e) {
                        e.success ? alert("Se ha enviado la nota por correo a " + arg3.Email) : alert("Ups, algo ha fallado en el envío a " + arg3.Email + ":\n" + (e.error && e.message || JSON.stringify(e)));
                    });
                }
            } else callback({
                name: "AlumnoNoEncontrado",
                message: "El alumno " + arg3 + " no existe en la nube"
            });
        } ], function(err) {
            err ? callback2(err) : callback2(null);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevoExamen";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
    var __alloyId79 = [];
    $.__views.__alloyId80 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId80"
    });
    __alloyId79.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Fecha Examen:",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.dateTextField = Ti.UI.createTextField({
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
        id: "dateTextField"
    });
    $.__views.__alloyId80.add($.__views.dateTextField);
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId82"
    });
    __alloyId79.push($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nota:",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.txtNota = Ti.UI.createTextField({
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
        id: "txtNota"
    });
    $.__views.__alloyId82.add($.__views.txtNota);
    $.__views.__alloyId84 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId84"
    });
    __alloyId79.push($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Peso:",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.txtPeso = Ti.UI.createTextField({
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
        id: "txtPeso"
    });
    $.__views.__alloyId84.add($.__views.txtPeso);
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        data: __alloyId79,
        id: "Marco"
    });
    $.__views.winNuevoExamen.add($.__views.Marco);
    $.__views.btnEnviar = Ti.UI.createButton({
        top: "10dp",
        id: "btnEnviar",
        title: "Enviar"
    });
    $.__views.winNuevoExamen.add($.__views.btnEnviar);
    Enviar ? $.__views.btnEnviar.addEventListener("click", Enviar) : __defers["$.__views.btnEnviar!click!Enviar"] = true;
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevoExamen.add($.__views.btnGuardar);
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
    if (void 0 == data.IdExamen) ; else {
        var colExamenes = Alloy.Collections.Examen;
        colExamenes.fetch();
        var modelExamen = colExamenes.get(data.IdExamen);
        var ArrayExamen = modelExamen.toJSON();
        $.txtNota.value = ArrayExamen.Nota;
        $.dateTextField.value = ArrayExamen.FechaExamen;
        $.txtPeso.value = ArrayExamen.Peso;
        var colExamenAlumno = Alloy.Collections.VW_Examen_Alumno;
        colExamenAlumno.fetch();
        var modelExamenAlumno = colExamenAlumno.get(data.IdExamen);
        var ArrayExamenAlumno = modelExamenAlumno.toJSON();
        var colAlumno = Alloy.Collections.Alumno;
        colAlumno.fetch();
        var modelAlumno = colAlumno.get(ArrayExamenAlumno.IdAlumno);
        var ArrayAlumno = modelAlumno.toJSON();
    }
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
        $.txtPeso.blur();
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
        $.dateTextField.value = dateValue.getMonth() + 1 + "/" + dateValue.getDate() + "/" + dateValue.getFullYear();
        picker_view.animate(slide_out);
    });
    var validationCallback = function(errors) {
        if (errors.length > 0) {
            for (var i = 0; errors.length > i; i++) Ti.API.debug(errors[i].message);
            alert(errors[0].message);
        } else GuardarExamen();
    };
    var returnCallback = function() {
        validator.run([ {
            id: "dateField",
            value: $.dateTextField.value,
            display: "Fecha",
            rules: "required"
        }, {
            id: "notaField",
            value: $.txtNota.value,
            display: "Nota",
            rules: "required|numeric"
        }, {
            id: "pesoField",
            value: $.txtPeso.value,
            display: "Peso",
            rules: "numeric"
        } ], validationCallback);
    };
    $.btnGuardar.addEventListener("click", returnCallback);
    __defers["$.__views.btnEnviar!click!Enviar"] && $.__views.btnEnviar.addEventListener("click", Enviar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;