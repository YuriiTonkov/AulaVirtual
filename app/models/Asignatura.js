exports.definition = {
	config: {
		columns: {
		    "IdAsignatura": "int",
		    "Nombre": "string",
		    "Descripcion": "string",
		    "Optativa": "boolean",
		    "Curso": "int"
		},
		adapter: {
			type: "sql",
			collection_name: "Asignatura",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdAsignatura",
			remoteBackup:"false"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
			 Klass : function() {
                return Collection;
            }
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			 Klass : function() {
                return Collection;
            },
            /**
             * cleanup function to remove all of the objects.
             * 
             * added this for testing purposes
             */
            cleanup : function() {
                var regex = new RegExp("^(" + this.config.adapter.collection_name + ")\\-(.+)$");
                var TAP = Ti.App.Properties;
                _.each(TAP.listProperties(), function(prop) {
                    var match = prop.match(regex);
                    if (match) {
                        TAP.removeProperty(prop);
                        Ti.API.info('deleting old model ' + prop);
                    }
                });
 
            }
        });
		
		
		return Collection;
	}
}

