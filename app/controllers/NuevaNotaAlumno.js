
var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevaNota.setRightNavButton($.btnGuardar);

function refreshScreen(){
	if (data.IdClase == undefined){
			if (data.IdAsignatura == undefined){
				
			} else {
				$.btnEnviarTodos.visible=true;
				$.btnEnviar.visible = false;
			}
	} else {
		$.btnEnviarTodos.visible=true;
		$.btnEnviar.visible = false;
	}
		
	if (data.IdAnotacion == undefined){
		
	}else{
		
		var anotacion = Alloy.Collections.Anotacion;
		anotacion.fetch();
		var model = anotacion.get(data.IdAnotacion);
		var datos = model.toJSON();
		$.dateTextField.text = datos.Fecha;
		$.txtTitulo.value = datos.Titulo;
		$.txtObservaciones.value = datos.Comentario;
		
	}
}

function Guardar(){
	if (data.IdAnotacion == undefined){
		if (data.IdClase == undefined){
			if (data.IdAsignatura == undefined){
			var Anotacion = Alloy.createModel("Anotacion",{Fecha:$.dateTextField.text, IdAlumno:data.IdAlumno, Comentario:$.txtObservaciones.value, Titulo:$.txtTitulo.value});
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
            data.IdAnotacion = Anotacion.get("IdAnotacion");
            alert("Se ha creado la anotacion.");
          } else {
          	var Anotacion = Alloy.createModel("Anotacion",{Fecha:$.dateTextField.text, IdAsignatura:data.IdAsignatura, Comentario:$.txtObservaciones.value, Titulo:$.txtTitulo.value});
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
            data.IdAnotacion = Anotacion.get("IdAnotacion");
           alert("Se ha creado la anotacion.");
          }
		}
		else{
			var Anotacion = Alloy.createModel("Anotacion",{Fecha:$.dateTextField.text, IdClase:data.IdClase, Comentario:$.txtObservaciones.value, Titulo:$.txtTitulo.value});
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
            data.IdAnotacion = Anotacion.get("IdAnotacion");
            alert("Se ha creado la anotacion.");
            
		}
    //$.btnAnterior.visible="false";
   // $.btnSiguiente.visible="false";
  
            
		
}else{
	var anotacion = Alloy.Collections.Anotacion;
	anotacion.fetch();
	var model = anotacion.get(data.IdAnotacion);
	model.set({
			Fecha:$.dateTextField.text, 
			Comentario:$.txtObservaciones.value, 
			Titulo:$.txtTitulo.value
	});
	model.save();
	alert("Se ha actualizado la anotacion.");
}
    
           
    
}

function EnviarAnotacion(){
	if (datos.UsuarioCloud!=undefined){
		EnviarAsync(data.IdAlumno, function(err){
			if (err) {alert("Ups, hubo un problema en el envío del mensaje: "+ err.message);}
			else {alert("El mensaje se ha enviado con éxito.");}
		});
	} else {
		EnviarMailAsync(data.IdAlumno, function(err){
			if (err) {alert("Ups, hubo un problema en el envío del mensaje: "+ err.message);}
			else {alert("El mensaje se ha enviado con éxito.");}
		});
	}
}

function EnviarAsync(idAlumno, callback2){
	
		async.waterfall([
			function (callback) {
			        var alumnos = Alloy.Collections.Alumno;
					alumnos.fetch();
					var alumno = alumnos.get(idAlumno);
					var dato = alumno.toJSON();
			      callback(null, dato);
			   },
			function (arg1, callback){
				
				Cloud.Users.query({
			    where: {
			        email: arg1.Email
			    }}, function (e) {
			            if (e.success) {
			            	callback(null, e.users[0],arg1.Email);
			            	}
			            else {callback(e.error);}
			     });
			},
			function (arg2,arg3, callback){
				if (arg2!=undefined){
				Cloud.Messages.create({
	        			to_ids: arg2.id,
				        body: $.txtObservaciones.value,
				        subject: $.txtTitulo.value,
				        custom_fields:{IdTipo:2, Fecha:$.dateTextField.text, Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") +" "+ Ti.App.Properties.getString("Apellido2")}
			       },function (e) {
			            if (e.success) {callback(null,null);}
			            else {callback(e.error);}
			     });
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

function EnviarMailAsync(idAlumno, callback2){
	
		async.waterfall([
			function (callback) {
			        var alumnos = Alloy.Collections.Alumno;
					alumnos.fetch();
					var alumno = alumnos.get(idAlumno);
					var dato = alumno.toJSON();
			      callback(null, dato);
			   },
			function (arg1, callback){
				
				Cloud.Users.query({
			    where: {
			        email: arg1.Email
			    }}, function (e) {
			            if (e.success) {
			            	callback(null, e.users[0],arg1.Email);
			            	}
			            else {callback(e.error);}
			     });
			},
			function (arg2,arg3, callback){
				if (arg2!=undefined){
					if (arg3 != undefined){
						Cloud.Emails.send({
	            		template: "Note",
	            		recipients: arg3,
	            		titulo: $.txtTitulo.value,
	            		texto: $.txtObservaciones.value
	        		}, function (e) {
	            		if (e.success) {
	                		alert("Se ha enviado la nota por correo a " + arg3);
	            		}
	            		else {
	                 		alert("Ups, algo ha fallado en el envío a " + arg3 + ":\n" + ((e.error && e.message) || JSON.stringify(e)));
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

function Enviar(idAlumno){
	var alumnos = Alloy.Collections.Alumno;
	alumnos.fetch();
	var alumno = alumnos.get(idAlumno);
	var datos = alumno.toJSON();
	
	
	if (datos.UsuarioCloud!=undefined){
		Cloud.Users.query({
			    where: {
			        email: datos.Email
			    }
			}, function (e) {
			    if (e.success) {
			    	if (e.users.length > 0){ 
			       Cloud.Messages.create({
	        			to_ids: e.users[0].id,
				        body: $.txtObservaciones.value,
				        subject: $.txtTitulo.value,
				        custom_fields:{IdTipo:2, Fecha:$.dateTextField.text, Profesor: Ti.App.Properties.getString("Nombre") + " " + Ti.App.Properties.getString("Apellido1") +" "+ Ti.App.Properties.getString("Apellido2")}
				        
			        }, function (e) {
			            if (e.success) {
			                 alert("Se ha enviado la anotacion a " + datos.Nombre + " " + datos.Apellido1);
				        
			            } else {
			                alert("Ups, algo ha fallado en el envío a " + datos.Nombre + " " + datos.Apellido1 + ":\n" +
			            	((e.error && e.message) || JSON.stringify(e)));
			            }
			            
			        });
			        } else {
			        	//El alumno no se encuentra en la nube
			        	 alert("El alumno " + datos.Nombre + " " + datos.Apellido1 +  " no esta registrado en la nube");
			        }
			    } else {
			        alert("Ups, algo ha fallado en el envío a " + datos.Nombre + " " + datos.Apellido1 + ":\n" +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		 
	}
	else {
		//Como no tiene usuario cloud se mira si tenemos la direccion de email para mandarle un correo electronico
		if (datos.Email != undefined){
			Cloud.Emails.send({
            template: "Note",
            recipients: datos.Email,
            titulo: $.txtTitulo.value,
            texto: $.txtObservaciones.value
        }, function (e) {
            if (e.success) {
                alert("Se ha enviado la nota por correo a " + datos.Nombre + " " + datos.Apellido1);
            }
            else {
                 alert("Ups, algo ha fallado en el envío a " + datos.Nombre + " " + datos.Apellido1 + ":\n" + ((e.error && e.message) || JSON.stringify(e)));
            }
        });
		}
	}
   
}

function EnviarAnotacionTodos(){
	var alumno = Alloy.Collections.Alumno;
	var alumnos =[];
	var alumnosMail = [];
	alumno.fetch();
	var datos,model;
	if (data.IdAsignatura != undefined){
		
		model = alumno.where({Asignatura:data.IdAsignatura});
	}
	else {
		
		model = alumno.where({Clase:data.IdClase});
		
	}
	
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
}

//Listeners ----------------------------

$.txtTitulo.addEventListener("click", function() {
	var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el titulo",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ["Aceptar", "Cancelar"],
            cancel: 1
             });
        dialog.addEventListener("click", function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtTitulo.value = e.text;
            }
        });
        dialog.show();
});

$.txtObservaciones.addEventListener("click", function() {
	var dialog = Ti.UI.createAlertDialog({
            title: "Introduzca el texto de la observación",
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ["Aceptar", "Cancelar"],
            cancel: 1,
             });
        dialog.addEventListener("click", function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtObservaciones.value = e.text;
            }
        });
        dialog.show();
});

//--------------------CODIGO PARA FUNCIONAMIENTO DEL DATEPICKER
var slide_in =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-251});
var picker_view = Titanium.UI.createView({height:251,bottom:-251});
//CREATE SELECTOR BUTTONS
//var cancel =  Titanium.UI.createButton({title:"Cancelar",style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED});
var cancel = $.cancel;
var done = $.done;
//var done =  Titanium.UI.createButton({title:"Done",style:Titanium.UI.iPhone.SystemButtonStyle.DONE});
var spacer =  Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});
var toolbar =  Ti.UI.iOS.createToolbar({top:0,items:[cancel,spacer,done]});

//Set initial value to today’s date.
var dateValue = new Date();
var minDate = new Date();
minDate.setFullYear(1900);
minDate.setMonth(0);
minDate.setDate(1);

var picker = Ti.UI.createPicker({
type:Ti.UI.PICKER_TYPE_DATE,
value:dateValue,
selectionIndicator:"true"});
picker_view.add(picker);
picker_view.add(toolbar);

$.dateTextField.addEventListener("click",function(){
    $.txtObservaciones.blur();
    $.winNuevaNota.add(picker_view);
    picker_view.animate(slide_in);

});

$.txtObservaciones.addEventListener("click", function(){picker_view.animate(slide_out);});



//CANCEL BUTTON
$.cancel.addEventListener("click", function() {
    picker_view.animate(slide_out);
});


//SET TEXTFIELD VALUE AND CLOSE PICKER

$.done.addEventListener("click", function() {
    var dateValue = picker.value;
    $.dateTextField.text =  (dateValue.getMonth() + 1) + "/"+ dateValue.getDate() + "/"+ dateValue.getFullYear();
    picker_view.animate(slide_out);});
    
$.winNuevaNota.addEventListener("focus",function(e){
    
     refreshScreen();
});


//-----------PRUEBAS DE VALIDACION-----------------------



var validationCallback = function(errors) {
        if(errors.length > 0) {
                for (var i = 0; i < errors.length; i++) {
                        Ti.API.debug(errors[i].message);
                }
                alert(errors[0].message);
        } else {
               Guardar();
        }
};


var returnCallback = function() {
        validator.run([
                                {
                                        id: "nameField",
                                    value: $.dateTextField.value,
                                    display: "Nombre",    
                                    rules: "required"
                                },
                                {
                                        id: "surname1Field",
                                    value: $.txtTitulo.value,
                                    display: "Apellido1",    
                                    rules: "required|max_length[50]"
                                },
                                {
                                        id: "surname2Field",
                                    value: $.txtObservaciones.value,
                                    display: "Apellido2",    
                                    rules: "required|max_length[500]"
                                }
                        ], validationCallback);        
};

$.btnGuardar.addEventListener("click", returnCallback);
