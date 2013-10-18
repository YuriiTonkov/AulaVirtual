function Controller() {
    function GuardarAlumnos() {
        for (var i = 0; $.TablaAlumnosCloud.data[0].rows.length > i; i++) $.TablaAlumnosCloud.data[0].rows[i].selected && Cloud.Users.query({
            page: 1,
            per_page: 1,
            where: {
                id: $.TablaAlumnosCloud.data[0].rows[i].id
            }
        }, function(e) {
            if (e.success) {
                Cloud.Friends.approve({
                    user_ids: e.users[0].id
                }, function(o) {
                    o.success ? alert("Alumno aceptado") : error(o);
                });
                var AlumnoCloud = Alloy.createModel("Alumno", {
                    Nombre: e.users[0].first_name,
                    Apellido1: e.users[0].last_name,
                    Apellido2: e.users[0].custom_fields.Apellido2,
                    Direccion: e.users[0].custom_fields.Direccion,
                    CodPostal: e.users[0].custom_fields.CodPostal,
                    TelContacto: e.users[0].custom_fields.Telefono1,
                    TelContacto2: e.users[0].custom_fields.Telefono2,
                    Email: e.users[0].email,
                    Email2: e.users[0].custom_fields.Email2,
                    Padre: e.users[0].custom_fields.Padre,
                    Madre: e.users[0].custom_fields.Madre,
                    foto1_url: "",
                    Clase: data.IdClase,
                    UsuarioCloud: e.users[0].id
                });
                var coleccionAlumno = Alloy.Collections.Alumno;
                coleccionAlumno.add(AlumnoCloud);
                AlumnoCloud.save();
                coleccionAlumno.fetch();
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
        $.NuevoAlumnoCloud.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevoAlumnoCloud";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.NuevoAlumnoCloud = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "NuevoAlumnoCloud",
        title: "Solicitantes"
    });
    $.__views.NuevoAlumnoCloud && $.addTopLevelView($.__views.NuevoAlumnoCloud);
    $.__views.TablaAlumnosCloud = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        id: "TablaAlumnosCloud",
        allowsSelection: "true"
    });
    $.__views.NuevoAlumnoCloud.add($.__views.TablaAlumnosCloud);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.NuevoAlumnoCloud.add($.__views.btnGuardar);
    GuardarAlumnos ? $.__views.btnGuardar.addEventListener("click", GuardarAlumnos) : __defers["$.__views.btnGuardar!click!GuardarAlumnos"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.NuevoAlumnoCloud.title = "Solicitudes de tutoría";
    $.NuevoAlumnoCloud.setRightNavButton($.btnGuardar);
    Cloud.Friends.requests(function(e) {
        if (e.success) if (0 == e.friend_requests.length) $.TablaAlumnosCloud.setData([ {
            title: "No hay solicitantes"
        } ]); else {
            var dato = [];
            for (var i = 0, l = e.friend_requests.length; l > i; i++) {
                var user = e.friend_requests[i].user;
                var row = Ti.UI.createTableViewRow({
                    title: user.first_name + " " + user.last_name,
                    id: user.id
                });
                dato.push(row);
            }
            $.TablaAlumnosCloud.setData(dato);
        } else {
            $.TablaAlumnosCloud.setData.setData([ {
                title: e.error && e.message || e
            } ]);
            error(e);
        }
    });
    $.TablaAlumnosCloud.addEventListener("click", function(e) {
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