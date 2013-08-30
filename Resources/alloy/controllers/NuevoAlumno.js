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
                foto1_url: $.imgAlumno.image,
                Clase: data.IdClase
            });
            coleccionAlumnos.add(alumno);
            alumno.save();
            coleccionAlumnos.fetch();
            var dialog1 = Ti.UI.createAlertDialog({
                title: "El alumno se ha creado correctamente.",
                style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
                buttonNames: [ "Aceptar" ]
            });
            dialog1.show();
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
                foto1_url: $.imgAlumno.image,
                Clase: data.IdClase
            });
            modelActual.save();
            var dialog2 = Ti.UI.createAlertDialog({
                title: "La información del alumno se ha almacenado correctamente.",
                style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
                buttonNames: [ "Aceptar" ]
            });
            dialog2.show();
        }
    }
    function sacarFoto() {
        Titanium.Media.showCamera({
            success: function(event) {
                event.cropRect;
                var image = event.media;
                var d = new Date();
                var filename = d.getTime() + ".png";
                var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
                f.write(image);
                $.imgAlumno.image = f.nativePath;
                $.imgAlumno.visible = true;
            }
        });
    }
    function TomarAnotacion() {
        var tabAnotacionController = Alloy.createController("notasAlumno", {
            IdAlumno: data.IdAlumno,
            Nombre: data.Nombre
        });
        Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
    }
    function Arrastre(e) {
        void 0 == data.IdAlumno || ("left" == e.direction ? SiguienteAlumno() : AnteriorAlumno());
    }
    function AnteriorAlumno() {
        var modelActual = coleccion_filtrada.getElement();
        var modelPrev = coleccion_filtrada.prev().getElement();
        if (void 0 != modelPrev) {
            var datos = modelPrev.toJSON();
            data.IdAlumno = datos.IdAlumno;
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
            if (void 0 == datos.foto1_url) {
                $.imgAlumno.image = "";
                $.imgAlumno.visible = true;
            } else {
                $.imgAlumno.image = datos.foto1_url;
                $.imgAlumno.visible = true;
            }
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
            data.IdAlumno = datos.IdAlumno;
            $.txtNombre.value = void 0 == datos.Nombre ? "" : datos.Nombre;
            $.txtApellido1.value = void 0 == datos.Apellido1 ? "" : datos.Apellido1;
            $.txtApellido2.value = void 0 == datos.Apellido2 ? "" : datos.Apellido2;
            $.txtDireccion.value = void 0 == datos.Direccion ? "" : datos.Direccion;
            $.txtCodPostal.value = void 0 == datos.CodPostal ? "" : datos.CodPostal;
            $.txtTelefono.value = void 0 == datos.TelContacto ? "" : datos.TelContacto;
            if (void 0 == datos.Email) {
                $.txtEmail.value = "";
                $.imgAlumno.visible = true;
            } else $.txtEmail.value = datos.Email;
            $.txtTelefono2.value = void 0 == datos.TelContacto2 ? "" : datos.TelContacto2;
            $.txtEmail2.value = void 0 == datos.Email2 ? "" : datos.Email2;
            $.txtPadre.value = void 0 == datos.Padre ? "" : datos.Padre;
            $.txtMadre.value = void 0 == datos.Madre ? "" : datos.Madre;
            if (void 0 == datos.foto1_url) $.imgAlumno.image = ""; else {
                $.imgAlumno.image = datos.foto1_url;
                $.imgAlumno.visible = true;
            }
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
    Arrastre ? $.__views.winNuevoAlumno.addEventListener("swipe", Arrastre) : __defers["$.__views.winNuevoAlumno!swipe!Arrastre"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        top: "15%",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false",
        height: "90%",
        width: "100%"
    });
    $.__views.winNuevoAlumno.add($.__views.scrollView);
    $.__views.view = Ti.UI.createView({
        id: "view",
        borderRaduis: "10",
        top: "10",
        height: "600",
        width: "100%"
    });
    $.__views.scrollView.add($.__views.view);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Nombre",
        top: "5%",
        id: "__alloyId83"
    });
    $.__views.view.add($.__views.__alloyId83);
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "5%",
        id: "txtNombre"
    });
    $.__views.view.add($.__views.txtNombre);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "1er Apellido",
        top: "10%",
        id: "__alloyId84"
    });
    $.__views.view.add($.__views.__alloyId84);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "10%",
        id: "txtApellido1"
    });
    $.__views.view.add($.__views.txtApellido1);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "2o Apellido",
        top: "15%",
        id: "__alloyId85"
    });
    $.__views.view.add($.__views.__alloyId85);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "15%",
        id: "txtApellido2"
    });
    $.__views.view.add($.__views.txtApellido2);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Direccion",
        top: "20%",
        id: "__alloyId86"
    });
    $.__views.view.add($.__views.__alloyId86);
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "20%",
        id: "txtDireccion"
    });
    $.__views.view.add($.__views.txtDireccion);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Cod.Postal",
        top: "25%",
        id: "__alloyId87"
    });
    $.__views.view.add($.__views.__alloyId87);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "25%",
        id: "txtCodPostal"
    });
    $.__views.view.add($.__views.txtCodPostal);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Telefono",
        top: "30%",
        id: "__alloyId88"
    });
    $.__views.view.add($.__views.__alloyId88);
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "30%",
        id: "txtTelefono"
    });
    $.__views.view.add($.__views.txtTelefono);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Telefono2",
        top: "35%",
        id: "__alloyId89"
    });
    $.__views.view.add($.__views.__alloyId89);
    $.__views.txtTelefono2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "35%",
        id: "txtTelefono2"
    });
    $.__views.view.add($.__views.txtTelefono2);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Email",
        top: "40%",
        id: "__alloyId90"
    });
    $.__views.view.add($.__views.__alloyId90);
    $.__views.txtEmail = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "40%",
        id: "txtEmail"
    });
    $.__views.view.add($.__views.txtEmail);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Email2",
        top: "45%",
        id: "__alloyId91"
    });
    $.__views.view.add($.__views.__alloyId91);
    $.__views.txtEmail2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "45%",
        id: "txtEmail2"
    });
    $.__views.view.add($.__views.txtEmail2);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Nombre Padre",
        top: "50%",
        id: "__alloyId92"
    });
    $.__views.view.add($.__views.__alloyId92);
    $.__views.txtPadre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "50%",
        id: "txtPadre"
    });
    $.__views.view.add($.__views.txtPadre);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        width: "40%",
        left: "10%",
        font: {
            fontSize: "12dp"
        },
        text: "Nombre Madre",
        top: "55%",
        id: "__alloyId93"
    });
    $.__views.view.add($.__views.__alloyId93);
    $.__views.txtMadre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "50%",
        left: "40%",
        height: "17dp",
        font: {
            fontSize: "12dp"
        },
        top: "55%",
        id: "txtMadre"
    });
    $.__views.view.add($.__views.txtMadre);
    $.__views.imgAlumno = Ti.UI.createImageView({
        left: "10%",
        id: "imgAlumno",
        height: "15%",
        width: "16%",
        top: "2%"
    });
    $.__views.winNuevoAlumno.add($.__views.imgAlumno);
    sacarFoto ? $.__views.imgAlumno.addEventListener("click", sacarFoto) : __defers["$.__views.imgAlumno!click!sacarFoto"] = true;
    $.__views.btnAnotacion = Ti.UI.createButton({
        top: "2%",
        borderRadius: "5dp",
        left: "40%",
        height: "25dp",
        width: "80dp",
        id: "btnAnotacion",
        title: "Notas"
    });
    $.__views.winNuevoAlumno.add($.__views.btnAnotacion);
    TomarAnotacion ? $.__views.btnAnotacion.addEventListener("click", TomarAnotacion) : __defers["$.__views.btnAnotacion!click!TomarAnotacion"] = true;
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "-50dp",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.winNuevoAlumno.add($.__views.btnGuardar);
    GuardarAlumno ? $.__views.btnGuardar.addEventListener("click", GuardarAlumno) : __defers["$.__views.btnGuardar!click!GuardarAlumno"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevoAlumno.title = data.Nombre;
    $.winNuevoAlumno.setRightNavButton($.btnGuardar);
    var alumno = Alloy.Collections.Alumno;
    var coleccion_filtrada = alumno.getAlumnosFromClase(data.IdClase);
    if (void 0 == data.IdAlumno) $.btnAnotacion.visible = "false"; else {
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
        if (void 0 != datos.foto1_url) {
            $.imgAlumno.image = datos.foto1_url;
            $.imgAlumno.visible = true;
        }
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
    __defers["$.__views.winNuevoAlumno!swipe!Arrastre"] && $.__views.winNuevoAlumno.addEventListener("swipe", Arrastre);
    __defers["$.__views.imgAlumno!click!sacarFoto"] && $.__views.imgAlumno.addEventListener("click", sacarFoto);
    __defers["$.__views.btnAnotacion!click!TomarAnotacion"] && $.__views.btnAnotacion.addEventListener("click", TomarAnotacion);
    __defers["$.__views.btnGuardar!click!GuardarAlumno"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;