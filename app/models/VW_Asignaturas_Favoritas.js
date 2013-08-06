exports.definition = {
	config: {
		columns: {
		    "IdAsignatura": "integer",
		    "NombreGrado": "string",
		    "NombreCurso": "string",
		    "NombreAsignatura": "string",
		    "Favorita": "string"
		},
		adapter: {
            type: "sql",
            collection_name: "VW_Asignaturas_Favoritas",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAsignatura",
            remoteBackup:"false"
        }
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

