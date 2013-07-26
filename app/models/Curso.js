exports.definition = {
	config: {
		columns: {
		    "IdCurso": "int",
		    "Nombre": "string",
		    "Duracion": "int",
		    "Grado": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "Curso",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdCurso",
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

