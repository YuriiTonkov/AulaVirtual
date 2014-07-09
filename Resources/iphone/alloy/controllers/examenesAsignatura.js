function Controller() {
    function __alloyId172(e) {
        if (e && e.fromAdapter) return;
        __alloyId172.opts || {};
        var models = filtrado(__alloyId171);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId168 = models[i];
            __alloyId168.__transform = {};
            var __alloyId169 = Ti.UI.createTableViewRow({
                backgroundColor: "white",
                height: "40dp",
                editable: "true",
                data: "undefined" != typeof __alloyId168.__transform["IdExamen"] ? __alloyId168.__transform["IdExamen"] : __alloyId168.get("IdExamen")
            });
            rows.push(__alloyId169);
            var __alloyId170 = Ti.UI.createLabel({
                width: "100%",
                height: "40dp",
                textAlign: "left",
                left: "16dp",
                font: {
                    fontSize: 16,
                    fontFamily: "HelveticaNeue-UltraLight"
                },
                text: "undefined" != typeof __alloyId168.__transform["FechaExamen"] ? __alloyId168.__transform["FechaExamen"] : __alloyId168.get("FechaExamen"),
                textid: "undefined" != typeof __alloyId168.__transform["IdExamen"] ? __alloyId168.__transform["IdExamen"] : __alloyId168.get("IdExamen")
            });
            __alloyId169.add(__alloyId170);
        }
        $.__views.TablaExamenes.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            IdAsignatura: data.IdAsignatura
        });
        return coleccion_filtrada;
    }
    function EnviarExamen() {
        for (var i = 0; $.TablaExamenes.data[0].rows.length > i; i++) $.TablaExamenes.data[0].rows[i].selected && (data.IdExamen = $.TablaExamenes.data[0].rows[i].IdExamen);
        var alumno = Alloy.Collections.VW_Examen_Alumno;
        var alumnos = [];
        var alumnosMail = [];
        alumno.fetch();
        var datos, model;
        model = alumno.where({
            Asignatura: data.IdAsignatura
        });
        for (var i = 0; model.length > i; i++) {
            datos = model[i].toJSON();
            void 0 != datos.UsuarioCloud ? alumnos.push(datos.IdAlumno) : alumnosMail.push(datos.IdAlumno);
        }
        alumnos != [] && async.each(alumnos, EnviarAsync, function(err) {
            err ? alert("Ups, algo ha fallado en el envío: " + err.message) : alert("El mensaje se ha enviado correctamente a los alumnos");
        });
        alumnosMail != [] && async.each(alumnosMail, EnviarMailAsync, function(err) {
            err ? alert("Ups, algo ha fallado en el envío del mail: " + err.message) : alert("El mensaje se ha enviado correctamente los alumnos por Mail");
        });
        $.examenesAsignaturas.close();
    }
    function EnviarAsync(idAlumno, callback2) {
        async.waterfall([ function(callback) {
            var examen = Alloy.Collections.VW_Examen_Alumno;
            examen.fetch();
            var alumno = examen.get(data.IdExamen);
            var dato = alumno.toJSON();
            callback(null, dato);
        }, function(arg1, callback) {
            Cloud.Users.query({
                where: {
                    email: arg1.Email
                }
            }, function(e) {
                e.success ? callback(null, e.users[0], arg1) : callback(e.error);
            });
        }, function(arg2, arg3, callback) {
            void 0 != arg2 ? Cloud.Messages.create({
                to_ids: arg2.id,
                body: "El examen se ha evaluado con la calificacion de " + arg3.Nota.toString() + ". " + arg3.Descripcion,
                subject: "Calificación del examen de " + arg3.Asignatura + " del" + arg3.FechaExamen,
                custom_fields: {
                    IdTipo: 1,
                    Fecha: arg3.FechaExamen,
                    Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") + " " + Ti.App.Properties.getString("Apellido2")
                }
            }, function(e) {
                e.success ? callback(null, null) : callback(e.error);
            }) : callback({
                name: "AlumnoNoEncontrado",
                message: "El alumno " + arg3.Email + " no existe en la nube"
            });
        } ], function(err) {
            err ? callback2(err) : callback2(null);
        });
    }
    function EnviarMailAsync(idAlumno, callback2) {
        async.waterfall([ function(callback) {
            var examen = Alloy.Collections.VW_Examen_Alumno;
            examen.fetch();
            var alumno = examen.get(data.IdExamen);
            var dato = alumno.toJSON();
            callback(null, dato);
        }, function(arg1, callback) {
            Cloud.Users.query({
                where: {
                    email: arg1.Email
                }
            }, function(e) {
                e.success ? callback(null, e.users[0], arg1) : callback(e.error);
            });
        }, function(arg2, arg3, callback) {
            if (void 0 != arg2) {
                if (void 0 != arg3) {
                    void 0 == arg3.Descripcion && (arg3.Descripcion = "");
                    Cloud.Emails.send({
                        template: "Note",
                        recipients: arg3.Email,
                        titulo: "Calificación del examen de " + arg3.ASIGNATURA + " del " + arg3.FechaExamen,
                        texto: "El examen se ha evaluado con la calificacion de " + arg3.Nota.toString() + ". " + arg3.Descripcion
                    }, function(e) {
                        e.success ? alert("Se ha enviado la nota por correo a " + arg3.Email) : alert("Ups, algo ha fallado en el envío a " + arg3.Email + ":\n" + (e.error && e.message || JSON.stringify(e)));
                    });
                }
            } else callback({
                name: "AlumnoNoEncontrado",
                message: "El alumno " + arg3 + " no existe en la nube"
            });
        } ], function(err) {
            err ? callback2(err) : callback2(null);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "examenesAsignatura";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.examenesAsignaturas = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "examenesAsignaturas"
    });
    $.__views.examenesAsignaturas && $.addTopLevelView($.__views.examenesAsignaturas);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        text: "Seleccione el examen",
        id: "__alloyId167"
    });
    $.__views.examenesAsignaturas.add($.__views.__alloyId167);
    $.__views.TablaExamenes = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaExamenes",
        allowsSelection: "true"
    });
    $.__views.examenesAsignaturas.add($.__views.TablaExamenes);
    var __alloyId171 = Alloy.Collections["VW_Examen_Alumno"] || VW_Examen_Alumno;
    __alloyId171.on("fetch destroy change add remove reset", __alloyId172);
    $.__views.btnEnviar = Ti.UI.createButton({
        id: "btnEnviar",
        top: "-50dp",
        title: "Enviar"
    });
    $.__views.examenesAsignaturas.add($.__views.btnEnviar);
    EnviarExamen ? $.__views.btnEnviar.addEventListener("click", EnviarExamen) : __defers["$.__views.btnEnviar!click!EnviarExamen"] = true;
    exports.destroy = function() {
        __alloyId171.off("fetch destroy change add remove reset", __alloyId172);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.examenesAsignaturas.setRightNavButton($.btnEnviar);
    var Examenes = Alloy.Collections.VW_Examen_Alumno;
    Examenes.fetch();
    __defers["$.__views.btnEnviar!click!EnviarExamen"] && $.__views.btnEnviar.addEventListener("click", EnviarExamen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;