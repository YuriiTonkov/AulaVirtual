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
                Email: $.txtEmail.value,
                Clase: data.IdClase
            });
            coleccionAlumnos.add(alumno);
            alumno.save();
        } else {
            var modelActual = coleccion_filtrada.getElement();
            var datos = modelActual.toJSON();
            coleccionAlumnos.updateAlumno(datos.IdAlumno, $.txtNombre.value, $.txtApellido1.value, $.txtApellido2.value, $.txtDireccion.value, $.txtCodPostal.value, $.txtTelefono.value, $.txtEmail.value);
            coleccionAlumnos.fetch();
        }
        coleccionAlumnos.fetch();
        $.winNuevoAlumno.close();
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
            $.txtNombre.value = datos.Nombre;
            $.txtApellido1.value = datos.Apellido1;
            $.txtApellido2.value = datos.Apellido2;
            $.txtDireccion.value = datos.Direccion;
            $.txtCodPostal.value = datos.CodPostal;
            $.txtTelefono.value = datos.TelContacto;
            $.txtEmail.value = datos.Email;
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
            $.txtNombre.value = datos.Nombre;
            $.txtApellido1.value = datos.Apellido1;
            $.txtApellido2.value = datos.Apellido2;
            $.txtDireccion.value = datos.Direccion;
            $.txtCodPostal.value = datos.CodPostal;
            $.txtTelefono.value = datos.TelContacto;
            $.txtEmail.value = datos.Email;
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevoAlumno = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevoAlumno"
    });
    $.__views.winNuevoAlumno && $.addTopLevelView($.__views.winNuevoAlumno);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Nombre",
        top: "12%",
        id: "__alloyId70"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId70);
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "12%",
        id: "txtNombre"
    });
    $.__views.winNuevoAlumno.add($.__views.txtNombre);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "1er Apellido",
        top: "20%",
        id: "__alloyId71"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId71);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "20%",
        id: "txtApellido1"
    });
    $.__views.winNuevoAlumno.add($.__views.txtApellido1);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "2o Apellido",
        top: "28%",
        id: "__alloyId72"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId72);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "28%",
        id: "txtApellido2"
    });
    $.__views.winNuevoAlumno.add($.__views.txtApellido2);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Direccion",
        top: "36%",
        id: "__alloyId73"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId73);
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "36%",
        id: "txtDireccion"
    });
    $.__views.winNuevoAlumno.add($.__views.txtDireccion);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Cod.Postal",
        top: "44%",
        id: "__alloyId74"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId74);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "44%",
        id: "txtCodPostal"
    });
    $.__views.winNuevoAlumno.add($.__views.txtCodPostal);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Telefono",
        top: "52%",
        id: "__alloyId75"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId75);
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "52%",
        id: "txtTelefono"
    });
    $.__views.winNuevoAlumno.add($.__views.txtTelefono);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Email",
        top: "60%",
        id: "__alloyId76"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId76);
    $.__views.txtEmail = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "60%",
        id: "txtEmail"
    });
    $.__views.winNuevoAlumno.add($.__views.txtEmail);
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
        $.txtEmail.value = datos.Email;
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
    __defers["$.__views.btnAnotacion!click!TomarAnotacion"] && $.__views.btnAnotacion.addEventListener("click", TomarAnotacion);
    __defers["$.__views.btnFoto!click!sacarFoto"] && $.__views.btnFoto.addEventListener("click", sacarFoto);
    __defers["$.__views.btnGuardar!click!GuardarAlumno"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumno);
    __defers["$.__views.btnAnterior!click!AnteriorAlumno"] && $.__views.btnAnterior.addEventListener("click", AnteriorAlumno);
    __defers["$.__views.btnSiguiente!click!SiguienteAlumno"] && $.__views.btnSiguiente.addEventListener("click", SiguienteAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;