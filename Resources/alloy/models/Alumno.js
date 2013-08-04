exports.definition = {
    config: {
        columns: {
            IdAlumno: "int",
            Nombre: "string",
            Apellido1: "string",
            Apellido2: "string",
            Direccion: "string",
            CodPostal: "int",
            TelContacto: "integer",
            Email: "string",
            Clase: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "Alumno",
            db_file: "/AulaVirtual_v" + require("Alloy").CFG.databaseversion + ".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAlumno",
            remoteBackup: "false"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            updateAlumno: function(idAlumno, Nombre, Apellido1, Apellido2, Direccion, CodPostal, TelContacto, Email) {
                try {
                    var query1 = "UPDATE ALUMNO SET Nombre ='" + Nombre + "', Apellido1 = '" + Apellido1 + "', Apellido2 = '" + Apellido2 + "', Direccion = '" + Direccion + "', CodPostal=" + CodPostal + ", TelContacto=" + TelContacto + ", Email='" + Email + "' WHERE IdAlumno= " + idAlumno;
                    this.fetch({
                        query: query1
                    });
                } catch (err) {}
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Alumno", exports.definition, []);

collection = Alloy.C("Alumno", exports.definition, model);

exports.Model = model;

exports.Collection = collection;