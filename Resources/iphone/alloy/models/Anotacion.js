var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            IdAnotacion: "integer",
            IdAlumno: "integer",
            IdClase: "integer",
            IdAsignatura: "integer",
            Fecha: "date",
            Comentario: "string",
            Titulo: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "Anotacion",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAnotacion",
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

model = Alloy.M("Anotacion", exports.definition, []);

collection = Alloy.C("Anotacion", exports.definition, model);

exports.Model = model;

exports.Collection = collection;