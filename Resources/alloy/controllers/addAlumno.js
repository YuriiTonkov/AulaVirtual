function Controller() {
    function __alloyId144() {
        __alloyId144.opts || {};
        var models = __alloyId143.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId140 = models[i];
            __alloyId140.__transform = nombrecompleto(__alloyId140);
            var __alloyId141 = Ti.UI.createTableViewRow({
                backgroundColor: "white",
                height: "40dp",
                editable: "true",
                data: "undefined" != typeof __alloyId140.__transform["IdAlumno"] ? __alloyId140.__transform["IdAlumno"] : __alloyId140.get("IdAlumno")
            });
            rows.push(__alloyId141);
            var __alloyId142 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "left",
                left: "16dp",
                font: {
                    fontSize: 16,
                    fontFamily: "HelveticaNeue-UltraLight"
                },
                text: "undefined" != typeof __alloyId140.__transform["nombrecompleto"] ? __alloyId140.__transform["nombrecompleto"] : __alloyId140.get("nombrecompleto"),
                textid: "undefined" != typeof __alloyId140.__transform["IdAlumno"] ? __alloyId140.__transform["IdAlumno"] : __alloyId140.get("IdAlumno")
            });
            __alloyId141.add(__alloyId142);
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
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "white",
        id: "addAlumno"
    });
    $.__views.addAlumno && $.addTopLevelView($.__views.addAlumno);
    $.__views.__alloyId139 = Ti.UI.createLabel({
        text: "Seleccione la asignatura",
        top: "5%",
        id: "__alloyId139"
    });
    $.__views.addAlumno.add($.__views.__alloyId139);
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaAlumnos",
        allowsSelection: "true"
    });
    $.__views.addAlumno.add($.__views.TablaAlumnos);
    var __alloyId143 = Alloy.Collections["VW_Asignatura_Alumno_Left"] || VW_Asignatura_Alumno_Left;
    __alloyId143.on("fetch destroy change add remove reset", __alloyId144);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.addAlumno.add($.__views.btnGuardar);
    GuardarAlumnos ? $.__views.btnGuardar.addEventListener("click", GuardarAlumnos) : __defers["$.__views.btnGuardar!click!GuardarAlumnos"] = true;
    exports.destroy = function() {
        __alloyId143.off("fetch destroy change add remove reset", __alloyId144);
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