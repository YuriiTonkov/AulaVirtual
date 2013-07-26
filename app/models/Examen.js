exports.definition = {
	config: {
		columns: {
		    "IdExamen": "int",
		    "Evaluacion": "int",
		    "Nota": "float",
		    "FechaExamen": "date"
		},
		adapter: {
			type: "sql",
			collection_name: "Examen",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdExamen",
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

