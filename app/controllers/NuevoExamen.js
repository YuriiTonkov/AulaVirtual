var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevoExamen.setRightNavButton($.btnGuardar);

if (data.IdExamen==undefined){
	
} else {
	var colExamenes = Alloy.Collections.Examen;
    colExamenes.fetch();
    var modelExamen = colExamenes.get(data.IdExamen);
    var ArrayExamen = modelExamen.toJSON();
    $.txtNota.value = ArrayExamen.Nota;
    $.dateTextField.value = ArrayExamen.FechaExamen;
    $.txtPeso.value = ArrayExamen.Peso;
    
    var colExamenAlumno = Alloy.Collections.VW_Examen_Alumno;
    colExamenAlumno.fetch();
    var modelExamenAlumno = colExamenAlumno.get(data.IdExamen);
    var ArrayExamenAlumno = modelExamenAlumno.toJSON();
    
    var colAlumno = Alloy.Collections.Alumno;
    var modelAlumno = colAlumno.get(ArrayExamenAlumno.IdAlumno);
    var ArrayAlumno = modelAlumno.toJSON();
    
}



function GuardarExamen(){
	  var coleccionExamenes = Alloy.Collections.Examen;
    if (data.IdExamen==undefined){
            var Examen = Alloy.createModel('Examen',{FechaExamen:$.dateTextField.value,Peso:$.txtPeso.value, Evaluacion:data.Evaluacion, Nota:$.txtNota.value});
            coleccionExamenes.add(Examen);
            Examen.save();
            coleccionExamenes.fetch();
            $.winNuevoExamen.close();
     } else {
            coleccionExamenes.fetch();
        	var modelExamen= coleccionExamenes.get(data.IdExamen);
       	    modelExamen.set({Nota:$.txtNota.value, Peso:$.txtPeso.value, FechaExamen:$.dateTextField.value});
       	    modelExamen.save();
       	    coleccionExamenes.fetch();	
     }
    
}

function Enviar(){
	if (ArrayAlumno.UsuarioCloud!=undefined){
		EnviarAsync(ArrayAlumno.IdAlumno, function(err){
			if (err) {alert("Ups, hubo un problema en el envío del mensaje: "+ err.message);}
			else {alert("El mensaje se ha enviado con éxito.");}
		});
	} else{
		EnviarMailAsync(ArrayAlumno.IdAlumno, function(err){
			if (err) {alert("Ups, hubo un problema en el envío del mensaje: "+ err.message);}
			else {alert("El mensaje se ha enviado con éxito.");}
		});
	}
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

//---------------Listeners

$.txtNota.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca la nota del examen',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtNota.value = e.text;
            }
        });
        dialog.show();
});

$.txtPeso.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el segundo apellido',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtPeso.value = e.text;
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

$.dateTextField.addEventListener('click',function(){
    $.txtNota.blur();
    $.txtPeso.blur();
    $.winNuevoExamen.add(picker_view);
    picker_view.animate(slide_in);

});

$.txtNota.addEventListener('click', function(){picker_view.animate(slide_out);});



//CANCEL BUTTON
$.cancel.addEventListener("click", function() {
    picker_view.animate(slide_out);
});


//SET TEXTFIELD VALUE AND CLOSE PICKER

$.done.addEventListener("click", function() {
    var dateValue = picker.value;
    $.dateTextField.value =  (dateValue.getMonth() + 1) + "/"+ dateValue.getDate() + "/"+ dateValue.getFullYear();
    picker_view.animate(slide_out);});
    

//-----------PRUEBAS DE VALIDACION-----------------------



var validationCallback = function(errors) {
        if(errors.length > 0) {
                for (var i = 0; i < errors.length; i++) {
                        Ti.API.debug(errors[i].message);
                }
                alert(errors[0].message);
        } else {
               GuardarExamen();
        }
};


var returnCallback = function() {
        validator.run([
                                {
                                        id: 'dateField',
                                    value: $.dateTextField.value,
                                    display: 'Fecha',    
                                    rules: 'required'
                                },
                                {
                                        id: 'notaField',
                                    value: $.txtNota.value,
                                    display: 'Nota',    
                                    rules: 'required|numeric'
                                },
                                {
                                        id: 'pesoField',
                                    value: $.txtPeso.value,
                                    display: 'Peso',    
                                    rules: 'numeric'
                                }
                        ], validationCallback);        
};

$.btnGuardar.addEventListener('click', returnCallback);
