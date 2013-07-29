exports.definition = {
	config: {
		columns: {
		    "IdEvaluacion": "int",
		    "Nombre":"string",
		    "AlumnoAsignatura": "int",
		    "Calificacion": "float",
		    "FechaInicio": "date"
		},
		adapter: {
			type: "sql",
			collection_name: "Evaluacion",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdEvaluacion",
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

