exports.definition = {
	config: {
		columns: {
		    "IdClase": "int",
		    "Nombre": "string",
		    "NumAlumnos": "int",
		    "Curso": "int"
		},
		adapter: {
			type: "sql",
			collection_name: "Clase",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
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

