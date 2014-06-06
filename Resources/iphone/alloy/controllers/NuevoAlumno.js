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
    this.__controllerPath = "NuevoAlumno";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevoAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "winNuevoAlumno"
    });
    $.__views.winNuevoAlumno && $.addTopLevelView($.__views.winNuevoAlumno);
    Arrastre ? $.__views.winNuevoAlumno.addEventListener("swipe", Arrastre) : __defers["$.__views.winNuevoAlumno!swipe!Arrastre"] = true;
    $.__views.__alloyId45 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/06HeaderNuevoAlumno.png",
        height: "70dp",
        id: "__alloyId45"
    });
    var __alloyId46 = [];
    $.__views.TituloSeccionTabla = Ti.UI.createTableViewSection({
        id: "TituloSeccionTabla",
        headerTitle: "Datos Personales",
        height: "10dp"
    });
    __alloyId46.push($.__views.TituloSeccionTabla);
    $.__views.__alloyId47 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId47"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.txtNombre = Ti.UI.createTextField({
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
        id: "txtNombre"
    });
    $.__views.__alloyId47.add($.__views.txtNombre);
    $.__views.__alloyId49 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId49"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "1er Apellido",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.txtApellido1 = Ti.UI.createTextField({
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
        id: "txtApellido1"
    });
    $.__views.__alloyId49.add($.__views.txtApellido1);
    $.__views.__alloyId51 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId51"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "2o Apellido",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.txtApellido2 = Ti.UI.createTextField({
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
        id: "txtApellido2"
    });
    $.__views.__alloyId51.add($.__views.txtApellido2);
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId53"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre Padre",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.txtPadre = Ti.UI.createTextField({
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
        id: "txtPadre"
    });
    $.__views.__alloyId53.add($.__views.txtPadre);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId55"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Nombre Madre",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.txtMadre = Ti.UI.createTextField({
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
        id: "txtMadre"
    });
    $.__views.__alloyId55.add($.__views.txtMadre);
    $.__views.TituloSeccionTabla = Ti.UI.createTableViewSection({
        id: "TituloSeccionTabla",
        headerTitle: "Datos de Contacto"
    });
    __alloyId46.push($.__views.TituloSeccionTabla);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId57"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Email",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.txtEmail = Ti.UI.createTextField({
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
        id: "txtEmail"
    });
    $.__views.__alloyId57.add($.__views.txtEmail);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId59"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Email2",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.txtEmail2 = Ti.UI.createTextField({
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
        id: "txtEmail2"
    });
    $.__views.__alloyId59.add($.__views.txtEmail2);
    $.__views.TituloSeccionTabla = Ti.UI.createTableViewSection({
        id: "TituloSeccionTabla",
        headerTitle: "Localizacion"
    });
    __alloyId46.push($.__views.TituloSeccionTabla);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId61"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Direccion",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.txtDireccion = Ti.UI.createTextField({
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
        id: "txtDireccion"
    });
    $.__views.__alloyId61.add($.__views.txtDireccion);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId63"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Cod.Postal",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.txtCodPostal = Ti.UI.createTextField({
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
        id: "txtCodPostal"
    });
    $.__views.__alloyId63.add($.__views.txtCodPostal);
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId65"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Telefono",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.txtTelefono = Ti.UI.createTextField({
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
        id: "txtTelefono"
    });
    $.__views.__alloyId65.add($.__views.txtTelefono);
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "__alloyId67"
    });
    $.__views.TituloSeccionTabla.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        width: "100%",
        height: "12dp",
        textAlign: "left",
        left: "16dp",
        top: "4dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        text: "Telefono2",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.txtTelefono2 = Ti.UI.createTextField({
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
        id: "txtTelefono2"
    });
    $.__views.__alloyId67.add($.__views.txtTelefono2);
    $.__views.__alloyId70 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/06FooterNuevoAlumno.png",
        id: "__alloyId70"
    });
    $.__views.Marco = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        data: __alloyId46,
        headerView: $.__views.__alloyId45,
        footerView: $.__views.__alloyId70,
        id: "Marco"
    });
    $.__views.winNuevoAlumno.add($.__views.Marco);
    $.__views.imgAlumno = Ti.UI.createImageView({
        left: "10%",
        id: "imgAlumno",
        height: "15%",
        width: "16%",
        top: "2%",
        defaultImage: "library/images/iphone/defaultFotoAlumno.png"
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
    var validationCallback = function(errors) {
        if (errors.length > 0) {
            for (var i = 0; errors.length > i; i++) Ti.API.debug(errors[i].message);
            alert(errors[0].message);
        } else GuardarAlumno();
    };
    var returnCallback = function() {
        validator.run([ {
            id: "nameField",
            value: $.txtNombre.value,
            display: "Nombre",
            rules: "required|max_length[50]"
        }, {
            id: "surname1Field",
            value: $.txtApellido1.value,
            display: "Apellido1",
            rules: "required|max_length[50]"
        }, {
            id: "surname2Field",
            value: $.txtApellido2.value,
            display: "Apellido2",
            rules: "max_length[50]"
        }, {
            id: "emailField",
            value: $.txtEmail.value,
            display: "Email",
            rules: "required|valid_email"
        } ], validationCallback);
    };
    $.btnGuardar.addEventListener("click", returnCallback);
    __defers["$.__views.winNuevoAlumno!swipe!Arrastre"] && $.__views.winNuevoAlumno.addEventListener("swipe", Arrastre);
    __defers["$.__views.imgAlumno!click!sacarFoto"] && $.__views.imgAlumno.addEventListener("click", sacarFoto);
    __defers["$.__views.btnAnotacion!click!TomarAnotacion"] && $.__views.btnAnotacion.addEventListener("click", TomarAnotacion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;