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
    $.__views.__alloyId45 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Nombre",
        top: "2%",
        id: "__alloyId45"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId45);
    $.__views.txtNombre = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "2%",
        id: "txtNombre"
    });
    $.__views.winNuevoAlumno.add($.__views.txtNombre);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "1er Apellido",
        top: "10%",
        id: "__alloyId46"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId46);
    $.__views.txtApellido1 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "10%",
        id: "txtApellido1"
    });
    $.__views.winNuevoAlumno.add($.__views.txtApellido1);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "2o Apellido",
        top: "18%",
        id: "__alloyId47"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId47);
    $.__views.txtApellido2 = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "18%",
        id: "txtApellido2"
    });
    $.__views.winNuevoAlumno.add($.__views.txtApellido2);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Direccion",
        top: "26%",
        id: "__alloyId48"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId48);
    $.__views.txtDireccion = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "26%",
        id: "txtDireccion"
    });
    $.__views.winNuevoAlumno.add($.__views.txtDireccion);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Cod.Postal",
        top: "34%",
        id: "__alloyId49"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId49);
    $.__views.txtCodPostal = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "34%",
        id: "txtCodPostal"
    });
    $.__views.winNuevoAlumno.add($.__views.txtCodPostal);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Telefono",
        top: "42%",
        id: "__alloyId50"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId50);
    $.__views.txtTelefono = Ti.UI.createTextField({
        borderColor: "#000",
        width: "60%",
        left: "35%",
        top: "42%",
        id: "txtTelefono"
    });
    $.__views.winNuevoAlumno.add($.__views.txtTelefono);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        width: "20%",
        left: "2%",
        font: {
            fontSize: "11dp"
        },
        text: "Email",
        top: "50%",
        id: "__alloyId51"
    });
    $.__views.winNuevoAlumno.add($.__views.__alloyId51);
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
    __defers["$.__views.btnGuardar!click!GuardarAlumno"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumno);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;