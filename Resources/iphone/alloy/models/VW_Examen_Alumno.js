var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            IdExamen: "integer",
            IdAlumno: "integer",
            IdAsignatura: "integer",
            Nombre: "string",
            Apellido1: "string",
            Apellido2: "string",
            Email: "string",
            EVALUACION: "string",
            FechaExamen: "string",
            Nota: "int",
            Peso: "integer",
            Descripcion: "string",
            ASIGNATURA: "string",
            UsuarioCloud: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "VW_Examen_Alumno",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdExamen",
            remoteBackup: "false"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("VW_Examen_Alumno", exports.definition, []);

collection = Alloy.C("VW_Examen_Alumno", exports.definition, model);

exports.Model = model;

exports.Collection = collection;