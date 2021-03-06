exports.definition = {
	config: {
		columns: {
		    "IdGrado": "int",
		    "NombreGrado": "string",
		    "Duracion": "int",
		    "PlanEdu": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "Grado",
            db_file: "/Aula_VirtualDB.sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdGrado",
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
};

