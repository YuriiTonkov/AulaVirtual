function Controller() {
    function __alloyId52() {
        var models = __alloyId51.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId48 = models[i];
            __alloyId48.__transform = {};
            var __alloyId49 = Ti.UI.createTableViewRow({
                editable: "true",
                data: "undefined" != typeof __alloyId48.__transform["IdAsignatura"] ? __alloyId48.__transform["IdAsignatura"] : __alloyId48.get("IdAsignatura")
            });
            rows.push(__alloyId49);
            var __alloyId50 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "center",
                text: "undefined" != typeof __alloyId48.__transform["Nombre"] ? __alloyId48.__transform["Nombre"] : __alloyId48.get("Nombre"),
                textid: "undefined" != typeof __alloyId48.__transform["IdAsignatura"] ? __alloyId48.__transform["IdAsignatura"] : __alloyId48.get("IdAsignatura")
            });
            __alloyId49.add(__alloyId50);
        }
        $.__views.TablaAsignaturas.setData(rows);
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
    function GuardarAsignatura() {
        for (var i = 0; $.TablaAsignaturas.data[0].rows.length > i; i++) if ($.TablaAsignaturas.data[0].rows[i].selected) {
            var AlumnoAsignatura = Alloy.createModel("Alumno_Asignatura", {
                Alumno: data.IdAlumno,
                Asignatura: $.TablaAsignaturas.data[0].rows[i].data,
                FechaInicio: getDate()
            });
            var coleccionAlumnoAsignatura = Alloy.Collections.Alumno_Asignatura;
            coleccionAlumnoAsignatura.add(AlumnoAsignatura);
            AlumnoAsignatura.save();
        }
        coleccionAlumnoAsignatura.fetch();
        var AsignaturasAlumno = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
        AsignaturasAlumno.fetch();
        $.winNuevaAsignatura.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaAsignatura = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevaAsignatura"
    });
    $.__views.winNuevaAsignatura && $.addTopLevelView($.__views.winNuevaAsignatura);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "Seleccione la asignatura",
        top: "5%",
        id: "__alloyId47"
    });
    $.__views.winNuevaAsignatura.add($.__views.__alloyId47);
    $.__views.TablaAsignaturas = Ti.UI.createTableView({
        id: "TablaAsignaturas",
        allowsSelection: "true"
    });
    $.__views.winNuevaAsignatura.add($.__views.TablaAsignaturas);
    var __alloyId51 = Alloy.Collections["VW_Asignatura_Alumno_Left"] || VW_Asignatura_Alumno_Left;
    __alloyId51.on("fetch destroy change add remove reset", __alloyId52);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.winNuevaAsignatura.add($.__views.btnGuardar);
    GuardarAsignatura ? $.__views.btnGuardar.addEventListener("click", GuardarAsignatura) : __defers["$.__views.btnGuardar!click!GuardarAsignatura"] = true;
    exports.destroy = function() {
        __alloyId51.off("fetch destroy change add remove reset", __alloyId52);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevaAsignatura.setRightNavButton($.btnGuardar);
    var Asignaturas = Alloy.Collections.VW_Asignatura_Alumno_Left;
    Asignaturas.filtraAsignatura(data.IdAlumno);
    $.TablaAsignaturas.addEventListener("click", function(e) {
        if (e.row.selected) {
            e.row.backgroundColor = "#fff";
            e.row.selected = 0;
        } else {
            e.row.backgroundColor = "#003b6f";
            e.row.selected = 1;
        }
    });
    __defers["$.__views.btnGuardar!click!GuardarAsignatura"] && $.__views.btnGuardar.addEventListener("click", GuardarAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;