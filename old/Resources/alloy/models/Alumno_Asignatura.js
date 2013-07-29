exports.definition = {
    config: {
        columns: {
            IdAlumnoAsignatura: "int",
            Alumno: "int",
            Asignatura: "int",
            FechaInicio: "date"
        },
        adapter: {
            type: "sql",
            collection_name: "Alumno_Asignatura",
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

model = Alloy.M("Alumno_Asignatura", exports.definition, []);

collection = Alloy.C("Alumno_Asignatura", exports.definition, model);

exports.Model = model;

exports.Collection = collection;