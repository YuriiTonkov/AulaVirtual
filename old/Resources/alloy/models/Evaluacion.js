exports.definition = {
    config: {
        columns: {
            IdEvaluacion: "int",
            Nombre: "string",
            AlumnoAsignatura: "int",
            Calificacion: "float",
            FechaInicio: "date"
        },
        adapter: {
            type: "sql",
            collection_name: "Evaluacion",
            db_file: "/AulaVirtual_v" + require("Alloy").CFG.databaseversion + ".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdEvaluacion",
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

model = Alloy.M("Evaluacion", exports.definition, []);

collection = Alloy.C("Evaluacion", exports.definition, model);

exports.Model = model;

exports.Collection = collection;