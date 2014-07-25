function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId32(e) {
        if (e && e.fromAdapter) return;
        __alloyId32.opts || {};
        var models = __alloyId31.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId26 = models[i];
            __alloyId26.__transform = {};
            var __alloyId27 = Ti.UI.createTableViewRow({
                backgroundColor: "white",
                height: "40dp",
                editable: "true",
                data: "undefined" != typeof __alloyId26.__transform["IdAsignatura"] ? __alloyId26.__transform["IdAsignatura"] : __alloyId26.get("IdAsignatura")
            });
            rows.push(__alloyId27);
            var __alloyId28 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "left",
                left: "16dp",
                font: {
                    fontSize: 16,
                    fontFamily: "HelveticaNeue-UltraLight"
                },
                text: "undefined" != typeof __alloyId26.__transform["Nombre"] ? __alloyId26.__transform["Nombre"] : __alloyId26.get("Nombre"),
                textid: "undefined" != typeof __alloyId26.__transform["IdAsignatura"] ? __alloyId26.__transform["IdAsignatura"] : __alloyId26.get("IdAsignatura")
            });
            __alloyId27.add(__alloyId28);
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
    this.__controllerPath = "NuevaAsignatura";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaAsignatura = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "winNuevaAsignatura",
        title: "Seleccione la asignatura"
    });
    $.__views.winNuevaAsignatura && $.addTopLevelView($.__views.winNuevaAsignatura);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/1.1.13NuevaAsignaturaHeader.png",
        height: "70dp",
        id: "__alloyId25"
    });
    $.__views.__alloyId30 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/1.1.13NuevaAsignaturaFooter.png",
        id: "__alloyId30"
    });
    $.__views.TablaAsignaturas = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        headerView: $.__views.__alloyId25,
        footerView: $.__views.__alloyId30,
        id: "TablaAsignaturas",
        allowsSelection: "true"
    });
    $.__views.winNuevaAsignatura.add($.__views.TablaAsignaturas);
    var __alloyId31 = Alloy.Collections["VW_Asignatura_Alumno_Left"] || VW_Asignatura_Alumno_Left;
    __alloyId31.on("fetch destroy change add remove reset", __alloyId32);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.winNuevaAsignatura.add($.__views.btnGuardar);
    GuardarAsignatura ? $.__views.btnGuardar.addEventListener("click", GuardarAsignatura) : __defers["$.__views.btnGuardar!click!GuardarAsignatura"] = true;
    exports.destroy = function() {
        __alloyId31.off("fetch destroy change add remove reset", __alloyId32);
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
            e.row.backgroundColor = "#51b9db";
            e.row.selected = 1;
        }
    });
    __defers["$.__views.btnGuardar!click!GuardarAsignatura"] && $.__views.btnGuardar.addEventListener("click", GuardarAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;