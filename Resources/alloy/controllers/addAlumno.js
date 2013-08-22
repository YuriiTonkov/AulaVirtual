function Controller() {
    function __alloyId90() {
        __alloyId90.opts || {};
        var models = __alloyId89.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId86 = models[i];
            __alloyId86.__transform = nombrecompleto(__alloyId86);
            var __alloyId87 = Ti.UI.createTableViewRow({
                backgroundColor: "white",
                editable: "true",
                data: "undefined" != typeof __alloyId86.__transform["IdAlumno"] ? __alloyId86.__transform["IdAlumno"] : __alloyId86.get("IdAlumno")
            });
            rows.push(__alloyId87);
            var __alloyId88 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "left",
                left: "10dp",
                text: "undefined" != typeof __alloyId86.__transform["nombrecompleto"] ? __alloyId86.__transform["nombrecompleto"] : __alloyId86.get("nombrecompleto"),
                textid: "undefined" != typeof __alloyId86.__transform["IdAlumno"] ? __alloyId86.__transform["IdAlumno"] : __alloyId86.get("IdAlumno")
            });
            __alloyId87.add(__alloyId88);
        }
        $.__views.TablaAlumnos.setData(rows);
    }
    function nombrecompleto(model) {
        var transform = model.toJSON();
        transform.nombrecompleto = transform.NombreAlumno + " " + transform.Apellido1 + " " + transform.Apellido2;
        return transform;
    }
    function getDate() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        10 > hours && (hours = "0" + hours);
        10 > minutes && (minutes = "0" + minutes);
        10 > seconds && (seconds = "0" + seconds);
        return month + "/" + day + "/" + year + " -  " + hours + ":" + minutes + ":" + seconds;
    }
    function GuardarAlumnos() {
        for (var i = 0; $.TablaAlumnos.data[0].rows.length > i; i++) if ($.TablaAlumnos.data[0].rows[i].selected) {
            var AlumnoAsignatura = Alloy.createModel("Alumno_Asignatura", {
                Asignatura: data.IdAsignatura,
                Alumno: $.TablaAlumnos.data[0].rows[i].data,
                FechaInicio: getDate()
            });
            var coleccionAlumnoAsignatura = Alloy.Collections.Alumno_Asignatura;
            coleccionAlumnoAsignatura.add(AlumnoAsignatura);
            AlumnoAsignatura.save();
        }
        coleccionAlumnoAsignatura.fetch();
        var AsignaturasAlumno = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
        AsignaturasAlumno.fetch();
        $.addAlumno.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addAlumno";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addAlumno = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "addAlumno"
    });
    $.__views.addAlumno && $.addTopLevelView($.__views.addAlumno);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        text: "Seleccione la asignatura",
        top: "5%",
        id: "__alloyId85"
    });
    $.__views.addAlumno.add($.__views.__alloyId85);
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        id: "TablaAlumnos",
        allowsSelection: "true"
    });
    $.__views.addAlumno.add($.__views.TablaAlumnos);
    var __alloyId89 = Alloy.Collections["VW_Asignatura_Alumno_Left"] || VW_Asignatura_Alumno_Left;
    __alloyId89.on("fetch destroy change add remove reset", __alloyId90);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.addAlumno.add($.__views.btnGuardar);
    GuardarAlumnos ? $.__views.btnGuardar.addEventListener("click", GuardarAlumnos) : __defers["$.__views.btnGuardar!click!GuardarAlumnos"] = true;
    exports.destroy = function() {
        __alloyId89.off("fetch destroy change add remove reset", __alloyId90);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.addAlumno.setRightNavButton($.btnGuardar);
    var Asignaturas = Alloy.Collections.VW_Asignatura_Alumno_Left;
    Asignaturas.filtraAlumno(data.IdAsignatura);
    $.TablaAlumnos.addEventListener("click", function(e) {
        if (e.row.selected) {
            e.row.backgroundColor = "#fff";
            e.row.selected = 0;
        } else {
            e.row.backgroundColor = "#003b6f";
            e.row.selected = 1;
        }
    });
    __defers["$.__views.btnGuardar!click!GuardarAlumnos"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumnos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;