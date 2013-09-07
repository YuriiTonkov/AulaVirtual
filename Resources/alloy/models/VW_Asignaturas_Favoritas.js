exports.definition = {
    config: {
        columns: {
            IdAsignatura: "integer",
            NombreGrado: "string",
            NombreCurso: "string",
            NombreAsignatura: "string",
            Favorita: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "VW_Asignaturas_Favoritas",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAsignatura",
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

model = Alloy.M("VW_Asignaturas_Favoritas", exports.definition, []);

collection = Alloy.C("VW_Asignaturas_Favoritas", exports.definition, model);

exports.Model = model;

exports.Collection = collection;