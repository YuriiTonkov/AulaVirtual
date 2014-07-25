function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId166(e) {
        if (e && e.fromAdapter) return;
        __alloyId166.opts || {};
        var models = __alloyId165.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId160 = models[i];
            __alloyId160.__transform = nombrecompleto(__alloyId160);
            var __alloyId161 = Ti.UI.createTableViewRow({
                backgroundColor: "white",
                height: "40dp",
                editable: "true",
                data: "undefined" != typeof __alloyId160.__transform["IdAlumno"] ? __alloyId160.__transform["IdAlumno"] : __alloyId160.get("IdAlumno")
            });
            rows.push(__alloyId161);
            var __alloyId162 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "left",
                left: "16dp",
                font: {
                    fontSize: 16,
                    fontFamily: "HelveticaNeue-UltraLight"
                },
                text: "undefined" != typeof __alloyId160.__transform["nombrecompleto"] ? __alloyId160.__transform["nombrecompleto"] : __alloyId160.get("nombrecompleto"),
                textid: "undefined" != typeof __alloyId160.__transform["IdAlumno"] ? __alloyId160.__transform["IdAlumno"] : __alloyId160.get("IdAlumno")
            });
            __alloyId161.add(__alloyId162);
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
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "addAlumno"
    });
    $.__views.addAlumno && $.addTopLevelView($.__views.addAlumno);
    $.__views.__alloyId159 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/1.1.19.AddAlumno.png",
        height: "70dp",
        id: "__alloyId159"
    });
    $.__views.__alloyId164 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/1.1.19.AddAlumnoFooter.png",
        id: "__alloyId164"
    });
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        headerView: $.__views.__alloyId159,
        footerView: $.__views.__alloyId164,
        id: "TablaAlumnos",
        allowsSelection: "true"
    });
    $.__views.addAlumno.add($.__views.TablaAlumnos);
    var __alloyId165 = Alloy.Collections["VW_Asignatura_Alumno_Left"] || VW_Asignatura_Alumno_Left;
    __alloyId165.on("fetch destroy change add remove reset", __alloyId166);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.addAlumno.add($.__views.btnGuardar);
    GuardarAlumnos ? $.__views.btnGuardar.addEventListener("click", GuardarAlumnos) : __defers["$.__views.btnGuardar!click!GuardarAlumnos"] = true;
    exports.destroy = function() {
        __alloyId165.off("fetch destroy change add remove reset", __alloyId166);
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
            e.row.backgroundColor = "#79b7d9";
            e.row.selected = 1;
        }
    });
    __defers["$.__views.btnGuardar!click!GuardarAlumnos"] && $.__views.btnGuardar.addEventListener("click", GuardarAlumnos);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;