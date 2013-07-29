exports.definition = {
    config: {
        columns: {
            IdAlumnoAsignatura: "integer",
            Alumno: "integer",
            Asignatura: "integer",
            Nombre: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "VW_Alumno_Asignatura_Asignatura",
            db_file: "/AulaVirtual_v" + require("Alloy").CFG.databaseversion + ".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAlumnoAsignatura",
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

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("VW_Alumno_Asignatura_Asignatura", exports.definition, []);

collection = Alloy.C("VW_Alumno_Asignatura_Asignatura", exports.definition, model);

exports.Model = model;

exports.Collection = collection;