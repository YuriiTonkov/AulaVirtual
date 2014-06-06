//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.examenesAsignaturas.setRightNavButton($.btnEnviar);

//-----------------------------------------


var Examenes = Alloy.Collections.VW_Examen_Alumno;
Examenes.fetch();

function filtrado (collection){
    var coleccion_filtrada = collection.where({IdAsignatura:data.IdAsignatura});
    return coleccion_filtrada;
}

function EnviarExamen(){
	for (var i=0;i<$.TablaExamenes.data[0].rows.length;i++){
       if ($.TablaExamenes.data[0].rows[i].selected){
       	data.IdExamen = $.TablaExamenes.data[0].rows[i].IdExamen;
       }
      }
	
	var alumno = Alloy.Collections.VW_Examen_Alumno;
	var alumnos =[];
	var alumnosMail = [];
	alumno.fetch();
	var datos,model;
	model = alumno.where({Asignatura:data.IdAsignatura});
	
	//preparamos el array que se le pasará a la funcion async.each
	for (var i=0;i<model.length;i++){
		datos = model[i].toJSON();
		if (datos.UsuarioCloud!=undefined)
			alumnos.push(datos.IdAlumno);
		else alumnosMail.push(datos.IdAlumno);
   }
   if (alumnos!=[])
   		async.each(alumnos,EnviarAsync,function (err){
				if (err) alert("Ups, algo ha fallado en el envío: " + err.message);
				else alert("El mensaje se ha enviado correctamente a los alumnos");
				
				});
	if (alumnosMail!=[])
		async.each(alumnosMail,EnviarMailAsync,function (err){
				if (err) alert("Ups, algo ha fallado en el envío del mail: " + err.message);
				else alert("El mensaje se ha enviado correctamente los alumnos por Mail");
				
				});
	//Cerramos la pantalla al terminar y volvemos a la de asignaturas
	$.examenesAsignaturas.close();
	
}


function EnviarAsync(idAlumno, callback2){
	
		async.waterfall([
			function (callback) {
			        var examen = Alloy.Collections.VW_Examen_Alumno;
					examen.fetch();
					var alumno = examen.get(data.IdExamen);
					var dato = alumno.toJSON();
			      callback(null, dato);
			   },
			function (arg1, callback){
				
				Cloud.Users.query({
			    where: {
			        email: arg1.Email
			    }}, function (e) {
			            if (e.success) {
			            	callback(null, e.users[0],arg1);
			            	}
			            else {callback(e.error);}
			     });
			},
			function (arg2,arg3, callback){
				if (arg2!=undefined){
				Cloud.Messages.create({
	        			to_ids: arg2.id,
				        body: "El examen se ha evaluado con la calificacion de " + arg3.Nota.toString() + ". " + arg3.Descripcion,
				        subject: "Calificación del examen de " + arg3.Asignatura + " del" + arg3.FechaExamen,
				        custom_fields:{IdTipo:1, Fecha:arg3.FechaExamen, Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") +" "+ Ti.App.Properties.getString("Apellido2")}
			       },function (e) {
			            if (e.success) {callback(null,null);}
			            else {callback(e.error);}
			     });
			   } else{
			   	
			   	callback({name : "AlumnoNoEncontrado", message : "El alumno "+arg3.Email+" no existe en la nube"});
			   }
			}],
			function (err){
				if (err) callback2(err);
				else callback2(null);
				
			}
		);
	
}


function EnviarMailAsync(idAlumno, callback2){
	
		async.waterfall([
			function (callback) {
			         var examen = Alloy.Collections.VW_Examen_Alumno;
					examen.fetch();
					var alumno = examen.get(data.IdExamen);
					var dato = alumno.toJSON();
			      callback(null, dato);
			   },
			function (arg1, callback){
				
				Cloud.Users.query({
			    where: {
			        email: arg1.Email
			    }}, function (e) {
			            if (e.success) {
			            	callback(null, e.users[0],arg1);
			            	}
			            else {callback(e.error);}
			     });
			},
			function (arg2,arg3, callback){
				if (arg2!=undefined){
					if (arg3 != undefined){
						if (arg3.Descripcion == undefined) arg3.Descripcion ="";
						Cloud.Emails.send({
	            		template: "Note",
	            		recipients: arg3.Email,
	            		titulo: "Calificación del examen de " + arg3.ASIGNATURA + " del " + arg3.FechaExamen,
	            		texto: "El examen se ha evaluado con la calificacion de " + arg3.Nota.toString() + ". " + arg3.Descripcion
	        		}, function (e) {
	            		if (e.success) {
	                		alert("Se ha enviado la nota por correo a " + arg3.Email);
	            		}
	            		else {
	                 		alert("Ups, algo ha fallado en el envío a " + arg3.Email + ":\n" + ((e.error && e.message) || JSON.stringify(e)));
	            		}
	        			});
					}
			   } else{
			   	
			   	callback({name : "AlumnoNoEncontrado", message : "El alumno "+arg3+" no existe en la nube"});
			   }
			}],
			function (err){
				if (err) callback2(err);
				else callback2(null);
				
			}
		);
	
}
