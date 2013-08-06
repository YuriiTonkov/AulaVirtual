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
            coleccionAlumnos.updateAlumno(data.IdAlumno, $.txtNombre.value, $.txtApellido1.value, $.txtApellido2.value, $.txtDireccion.value, $.txtCodPostal.value, $.txtTelefono.value, $.txtEmail.value);
            coleccionAlumnos.fetch();
        }
        coleccionAlumnos.fetch();
        $.winNuevoAlumno.close();
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
        top: "2%",
        id: "__alloyId70"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId70);
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "2%",
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
        top: "10%",
        id: "__alloyId71"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId71);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "10%",
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
        top: "18%",
        id: "__alloyId72"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId72);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "18%",
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
        top: "26%",
        id: "__alloyId73"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId73);
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "26%",
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
        top: "34%",
        id: "__alloyId74"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId74);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "34%",
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
        top: "42%",
        id: "__alloyId75"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId75);
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "42%",
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
        top: "50%",
        id: "__alloyId76"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId76);
    $.__views.txtEmail = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "50%",
        id: "txtEmail"
    });
    $.__views.winNuevoAlumno.add($.__views.txtEmail);
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
    if (void 0 == data.IdAlumno) ; else {
        var alumno = Alloy.createCollection("Alumno");
        alumno.fetch();
        var model = alumno.get(data.IdAlumno);
        var datos = model.toJSON();
        $.txtNombre.value = datos.Nombre;
        $.txtApellido1.value = datos.Apellido1;
        $.txtApellido2.value = datos.Apellido2;
        $.txtDireccion.value = datos.Direccion;
        $.txtCodPostal.value = datos.CodPostal;
        $.txtTelefono.value = datos.TelContacto;
        $.txtEmail.value = datos.Email;
    }
    __defers["$.__views.btnGuardar!click!GuardarAlumno"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;