exports.definition = {
	config: {
		columns: {
		    "IdAlumno": "int",
		    "Nombre": "string",
            "Apellido1": "string",
            "Apellido2": "string",
		    "Direccion": "string",
		    "CodPostal": "int",
		    "TelContacto": "integer",
		    "TelContacto2": "integer",
		    "Email": "string",
		    "Clase": "int",
		    "Padre": "string",
            "Madre": "string",
            "Email2": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "Alumno",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAlumno",
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
			updateAlumno: function(idAlumno, Nombre, Apellido1, Apellido2, Direccion, CodPostal, TelContacto, Email){
                try{
                   var query1 = "UPDATE ALUMNO SET Nombre ='"+Nombre+"', Apellido1 = '"+Apellido1+"', Apellido2 = '"+Apellido2+"', Direccion = '"+ Direccion+"', CodPostal="+CodPostal+", TelContacto="+TelContacto+", Email='"+Email+"' WHERE IdAlumno= " + idAlumno;
                   this.fetch({query: query1});                     
                }catch (err){
                   // Ti.API.info('ERROR: ' + JSON.stringify(err))
                }   
            }
		});
		
		return Collection;
	}
}

