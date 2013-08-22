function Controller() {
    function GuardarAlumno() {
        var coleccionAlumnos = Alloy.Collections.Alumno;
        if (void 0 == data.IdAlumno) {
            var alumno = Alloy.createModel("Alumno", {
                Nombre: $.txtNombre.value,
                Apellido1: $.txtApellido1.value,
                Apellido2: $.txtApellido2.value,
                Direccion: $.txtDireccion.value,
                CodPostal: $.txtCodPostal.value,
                TelContacto: $.txtTelefono.value,
                TelContacto2: $.txtTelefono2.value,
                Email: $.txtEmail.value,
                Email2: $.txtEmail2.value,
                Padre: $.txtPadre.value,
                Madre: $.txtMadre.value,
                Clase: data.IdClase
            });
            coleccionAlumnos.add(alumno);
            alumno.save();
            coleccionAlumnos.fetch();
        } else {
            var modelActual = coleccion_filtrada.getElement();
            modelActual.set({
                Nombre: $.txtNombre.value,
                Apellido1: $.txtApellido1.value,
                Apellido2: $.txtApellido2.value,
                Direccion: $.txtDireccion.value,
                CodPostal: $.txtCodPostal.value,
                TelContacto: $.txtTelefono.value,
                TelContacto2: $.txtTelefono2.value,
                Email: $.txtEmail.value,
                Email2: $.txtEmail2.value,
                Padre: $.txtPadre.value,
                Madre: $.txtMadre.value,
                Clase: data.IdClase
            });
            modelActual.save();
            var dialog = Ti.UI.createAlertDialog({
                title: "La información del alumno se ha almacenado correctamente.",
                style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
                buttonNames: [ "Aceptar" ]
            });
            dialog.show();
        }
    }
    function sacarFoto() {
        Titanium.Media.showCamera({
            success: function(event) {
                event.cropRect;
                var image = event.media;
                var d = new Date();
                var filename = d.getTime() + pictype + ".png";
                var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
                f.write(image);
                Titanium.API.info("taken picture.. path is;-");
                Titanium.API.info(f.nativePath);
            }
        });
    }
    function TomarAnotacion() {}
    function AnteriorAlumno() {
        var modelActual = coleccion_filtrada.getElement();
        var modelPrev = coleccion_filtrada.prev().getElement();
        if (void 0 != modelPrev) {
            var datos = modelPrev.toJSON();
            $.txtNombre.value = void 0 == datos.Nombre ? "" : datos.Nombre;
            $.txtApellido1.value = void 0 == datos.Apellido1 ? "" : datos.Apellido1;
            $.txtApellido2.value = void 0 == datos.Apellido2 ? "" : datos.Apellido2;
            $.txtDireccion.value = void 0 == datos.Direccion ? "" : datos.Direccion;
            $.txtCodPostal.value = void 0 == datos.CodPostal ? "" : datos.CodPostal;
            $.txtTelefono.value = void 0 == datos.TelContacto ? "" : datos.TelContacto;
            $.txtEmail.value = void 0 == datos.Email ? "" : datos.Email;
            $.txtTelefono2.value = void 0 == datos.TelContacto2 ? "" : datos.TelContacto2;
            $.txtEmail2.value = void 0 == datos.Email2 ? "" : datos.Email2;
            $.txtPadre.value = void 0 == datos.Padre ? "" : datos.Padre;
            $.txtMadre.value = void 0 == datos.Madre ? "" : datos.Madre;
        } else {
            coleccion_filtrada.setElement(modelActual);
            var dialog2 = Ti.UI.createAlertDialog({
                title: "Ha llegado al principio de la lista de alumnos",
                style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
                buttonNames: [ "Aceptar" ]
            });
            dialog2.show();
        }
    }
    function SiguienteAlumno() {
        var modelActual = coleccion_filtrada.getElement();
        var modelNext = coleccion_filtrada.next().getElement();
        if (void 0 != modelNext) {
            var datos = modelNext.toJSON();
            $.txtNombre.value = void 0 == datos.Nombre ? "" : datos.Nombre;
            $.txtApellido1.value = void 0 == datos.Apellido1 ? "" : datos.Apellido1;
            $.txtApellido2.value = void 0 == datos.Apellido2 ? "" : datos.Apellido2;
            $.txtDireccion.value = void 0 == datos.Direccion ? "" : datos.Direccion;
            $.txtCodPostal.value = void 0 == datos.CodPostal ? "" : datos.CodPostal;
            $.txtTelefono.value = void 0 == datos.TelContacto ? "" : datos.TelContacto;
            $.txtEmail.value = void 0 == datos.Email ? "" : datos.Email;
            $.txtTelefono2.value = void 0 == datos.TelContacto2 ? "" : datos.TelContacto2;
            $.txtEmail2.value = void 0 == datos.Email2 ? "" : datos.Email2;
            $.txtPadre.value = void 0 == datos.Padre ? "" : datos.Padre;
            $.txtMadre.value = void 0 == datos.Madre ? "" : datos.Madre;
        } else {
            coleccion_filtrada.setElement(modelActual);
            var dialog = Ti.UI.createAlertDialog({
                title: "Ha llegado al final de la lista de alumnos",
                style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
                buttonNames: [ "Aceptar" ]
            });
            dialog.show();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevoAlumno";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevoAlumno = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevoAlumno"
    });
    $.__views.winNuevoAlumno && $.addTopLevelView($.__views.winNuevoAlumno);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Nombre",
        top: "10%",
        id: "__alloyId23"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId23);
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "10%",
        id: "txtNombre"
    });
    $.__views.winNuevoAlumno.add($.__views.txtNombre);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "1er Apellido",
        top: "17%",
        id: "__alloyId24"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId24);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "17%",
        id: "txtApellido1"
    });
    $.__views.winNuevoAlumno.add($.__views.txtApellido1);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "2o Apellido",
        top: "24%",
        id: "__alloyId25"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId25);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "24%",
        id: "txtApellido2"
    });
    $.__views.winNuevoAlumno.add($.__views.txtApellido2);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Direccion",
        top: "31%",
        id: "__alloyId26"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId26);
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "31%",
        id: "txtDireccion"
    });
    $.__views.winNuevoAlumno.add($.__views.txtDireccion);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Cod.Postal",
        top: "38%",
        id: "__alloyId27"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId27);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "38%",
        id: "txtCodPostal"
    });
    $.__views.winNuevoAlumno.add($.__views.txtCodPostal);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Telefono",
        top: "45%",
        id: "__alloyId28"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId28);
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "45%",
        id: "txtTelefono"
    });
    $.__views.winNuevoAlumno.add($.__views.txtTelefono);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Telefono2",
        top: "52%",
        id: "__alloyId29"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId29);
    $.__views.txtTelefono2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "52%",
        id: "txtTelefono2"
    });
    $.__views.winNuevoAlumno.add($.__views.txtTelefono2);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Email",
        top: "59%",
        id: "__alloyId30"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId30);
    $.__views.txtEmail = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "59%",
        id: "txtEmail"
    });
    $.__views.winNuevoAlumno.add($.__views.txtEmail);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Email2",
        top: "66%",
        id: "__alloyId31"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId31);
    $.__views.txtEmail2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "66%",
        id: "txtEmail2"
    });
    $.__views.winNuevoAlumno.add($.__views.txtEmail2);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Nombre Padre",
        top: "73%",
        id: "__alloyId32"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId32);
    $.__views.txtPadre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "73%",
        id: "txtPadre"
    });
    $.__views.winNuevoAlumno.add($.__views.txtPadre);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Nombre Madre",
        top: "80%",
        id: "__alloyId33"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId33);
    $.__views.txtMadre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "80%",
        id: "txtMadre"
    });
    $.__views.winNuevoAlumno.add($.__views.txtMadre);
    $.__views.btnAnotacion = Ti.UI.createButton({
        top: "2%",
        borderRadius: "5dp",
        left: "30dp",
        height: "25dp",
        width: "125dp",
        id: "btnAnotacion",
        title: "Anotaciones"
    });
    $.__views.winNuevoAlumno.add($.__views.btnAnotacion);
    TomarAnotacion ? $.__views.btnAnotacion.addEventListener("click", TomarAnotacion) : __defers["$.__views.btnAnotacion!click!TomarAnotacion"] = true;
    $.__views.btnFoto = Ti.UI.createButton({
        top: "2%",
        borderRadius: "5dp",
        left: "165dp",
        height: "25dp",
        width: "125dp",
        id: "btnFoto",
        title: "Foto"
    });
    $.__views.winNuevoAlumno.add($.__views.btnFoto);
    sacarFoto ? $.__views.btnFoto.addEventListener("click", sacarFoto) : __defers["$.__views.btnFoto!click!sacarFoto"] = true;
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevoAlumno.add($.__views.btnGuardar);
    GuardarAlumno ? $.__views.btnGuardar.addEventListener("click", GuardarAlumno) : __defers["$.__views.btnGuardar!click!GuardarAlumno"] = true;
    $.__views.btnAnterior = Ti.UI.createButton({
        bottom: "2%",
        borderRadius: "5dp",
        left: "30dp",
        height: "25dp",
        width: "125dp",
        id: "btnAnterior",
        title: "Anterior"
    });
    $.__views.winNuevoAlumno.add($.__views.btnAnterior);
    AnteriorAlumno ? $.__views.btnAnterior.addEventListener("click", AnteriorAlumno) : __defers["$.__views.btnAnterior!click!AnteriorAlumno"] = true;
    $.__views.btnSiguiente = Ti.UI.createButton({
        bottom: "2%",
        borderRadius: "5dp",
        left: "165dp",
        height: "25dp",
        width: "125dp",
        id: "btnSiguiente",
        title: "Siguiente"
    });
    $.__views.winNuevoAlumno.add($.__views.btnSiguiente);
    SiguienteAlumno ? $.__views.btnSiguiente.addEventListener("click", SiguienteAlumno) : __defers["$.__views.btnSiguiente!click!SiguienteAlumno"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevoAlumno.title = data.Nombre;
    $.winNuevoAlumno.setRightNavButton($.btnGuardar);
    var alumno = Alloy.Collections.Alumno;
    var coleccion_filtrada = alumno.getAlumnosFromClase(data.IdClase);
    if (void 0 == data.IdAlumno) ; else {
        var model = coleccion_filtrada.get(data.IdAlumno);
        var datos = model.toJSON();
        coleccion_filtrada.setElement(model);
        $.txtNombre.value = datos.Nombre;
        $.txtApellido1.value = datos.Apellido1;
        $.txtApellido2.value = datos.Apellido2;
        $.txtDireccion.value = datos.Direccion;
        $.txtCodPostal.value = datos.CodPostal;
        $.txtTelefono.value = datos.TelContacto;
        $.txtTelefono2.value = datos.TelContacto2;
        $.txtEmail.value = datos.Email;
        $.txtEmail2.value = datos.Email2;
        $.txtPadre.value = datos.Padre;
        $.txtMadre.value = datos.Madre;
    }
    $.txtNombre.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el nombre",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtNombre.value = e.text);
        });
        dialog.show();
    });
    $.txtApellido1.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el primer apellido",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtApellido1.value = e.text);
        });
        dialog.show();
    });
    $.txtApellido2.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el segundo apellido",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtApellido2.value = e.text);
        });
        dialog.show();
    });
    $.txtDireccion.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca la direccion",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtDireccion.value = e.text);
        });
        dialog.show();
    });
    $.txtCodPostal.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el código postal",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtCodPostal.value = e.text);
        });
        dialog.show();
    });
    $.txtTelefono.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el teléfono",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtTelefono.value = e.text);
        });
        dialog.show();
    });
    $.txtTelefono2.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el teléfono",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtTelefono2.value = e.text);
        });
        dialog.show();
    });
    $.txtEmail.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el correo electrónico",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtEmail.value = e.text);
        });
        dialog.show();
    });
    $.txtEmail2.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el correo electrónico",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtEmail2.value = e.text);
        });
        dialog.show();
    });
    $.txtPadre.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el nombre del padre",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtPadre.value = e.text);
        });
        dialog.show();
    });
    $.txtMadre.addEventListener("click", function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el nombre de la madre",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: [ "Aceptar", "Cancelar" ],
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel || ($.txtMadre.value = e.text);
        });
        dialog.show();
    });
    __defers["$.__views.btnAnotacion!click!TomarAnotacion"] && $.__views.btnAnotacion.addEventListener("click", TomarAnotacion);
    __defers["$.__views.btnFoto!click!sacarFoto"] && $.__views.btnFoto.addEventListener("click", sacarFoto);
    __defers["$.__views.btnGuardar!click!GuardarAlumno"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumno);
    __defers["$.__views.btnAnterior!click!AnteriorAlumno"] && $.__views.btnAnterior.addEventListener("click", AnteriorAlumno);
    __defers["$.__views.btnSiguiente!click!SiguienteAlumno"] && $.__views.btnSiguiente.addEventListener("click", SiguienteAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;