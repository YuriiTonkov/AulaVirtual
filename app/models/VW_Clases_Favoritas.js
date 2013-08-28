exports.definition = {
	config: {
		columns: {
		    "IdClase": "int",
		    "NombreClase": "string",
		    "NombreCurso": "string",
		    "NombreGrado": "string"
		},
		adapter: {
			type: "sql",
            collection_name: "VW_Clases_Favoritas",
            db_file: "/Aula_Virtual.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdClase",
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

