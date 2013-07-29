function Controller() {
    function GuardarAlumno() {
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
        var coleccionAlumnos = Alloy.Collections.Alumno;
        coleccionAlumnos.add(alumno);
        alumno.save();
        coleccionAlumnos.fetch();
        $.NuevoAlumno.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NuevoAlumno = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "NuevoAlumno"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno && $.addTopLevelView($.__views.NuevoAlumno);
    $.__views.__alloyId31 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno && $.addTopLevelView($.__views.winNuevoAlumno);
    $.__views.__alloyId38 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Nombre",
        top: "2%",
<<<<<<< HEAD
        id: "__alloyId31"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId31);
=======
        id: "__alloyId38"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId38);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "2%",
        id: "txtNombre"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno.add($.__views.txtNombre);
    $.__views.__alloyId32 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno.add($.__views.txtNombre);
    $.__views.__alloyId39 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "1er Apellido",
        top: "10%",
<<<<<<< HEAD
        id: "__alloyId32"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId32);
=======
        id: "__alloyId39"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId39);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "10%",
        id: "txtApellido1"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno.add($.__views.txtApellido1);
    $.__views.__alloyId33 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno.add($.__views.txtApellido1);
    $.__views.__alloyId40 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "2o Apellido",
        top: "18%",
<<<<<<< HEAD
        id: "__alloyId33"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId33);
=======
        id: "__alloyId40"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId40);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "18%",
        id: "txtApellido2"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno.add($.__views.txtApellido2);
    $.__views.__alloyId34 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno.add($.__views.txtApellido2);
    $.__views.__alloyId41 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Direccion",
        top: "26%",
<<<<<<< HEAD
        id: "__alloyId34"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId34);
=======
        id: "__alloyId41"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId41);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "26%",
        id: "txtDireccion"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno.add($.__views.txtDireccion);
    $.__views.__alloyId35 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno.add($.__views.txtDireccion);
    $.__views.__alloyId42 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Cod.Postal",
        top: "34%",
<<<<<<< HEAD
        id: "__alloyId35"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId35);
=======
        id: "__alloyId42"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId42);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "34%",
        id: "txtCodPostal"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno.add($.__views.txtCodPostal);
    $.__views.__alloyId36 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno.add($.__views.txtCodPostal);
    $.__views.__alloyId43 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Telefono",
        top: "42%",
<<<<<<< HEAD
        id: "__alloyId36"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId36);
=======
        id: "__alloyId43"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId43);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "42%",
        id: "txtTelefono"
    });
<<<<<<< HEAD
    $.__views.NuevoAlumno.add($.__views.txtTelefono);
    $.__views.__alloyId37 = Ti.UI.createLabel({
=======
    $.__views.winNuevoAlumno.add($.__views.txtTelefono);
    $.__views.__alloyId44 = Ti.UI.createLabel({
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Email",
        top: "50%",
<<<<<<< HEAD
        id: "__alloyId37"
    });
    $.__views.NuevoAlumno.add($.__views.__alloyId37);
=======
        id: "__alloyId44"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId44);
>>>>>>> parent of 0504347... Task #199990: Pantalla Nueva Asignatura
    $.__views.txtEmail = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "50%",
        id: "txtEmail"
    });
    $.__views.NuevoAlumno.add($.__views.txtEmail);
    $.__views.btnGuardar = Ti.UI.createButton({
        top: "60%",
        id: "btnGuardar",
        title: "Guardar"
    });
    $.__views.NuevoAlumno.add($.__views.btnGuardar);
    GuardarAlumno ? $.__views.btnGuardar.addEventListener("click", GuardarAlumno) : __defers["$.__views.btnGuardar!click!GuardarAlumno"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.NuevoAlumno.title = data.Nombre;
    __defers["$.__views.btnGuardar!click!GuardarAlumno"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;