
var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevaNota.setRightNavButton($.btnGuardar);

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

function GuardarExamen(){
	if (data.IdAnotacion == undefined){
		if (data.IdClase == undefined){
			$.btnEnviarTodos.visible = false;
		}
		else{
			$.btnEnviarTodos.visible = true;
		}
    //$.btnAnterior.visible="false";
   // $.btnSiguiente.visible="false";
  if ($.dateTextField.text == "Pulse aqui") 
        {
            alert("Tiene que introducir la fecha del aviso.");
        }
    else 
        {
            var Anotacion = Alloy.createModel('Anotacion',{Fecha:$.dateTextField.text, IdAlumno:data.IdAlumno, Comentario:$.txtObservaciones.value, Titulo:$.txtTitulo.value});
            var coleccionAnotaciones = Alloy.Collections.Anotacion;
            coleccionAnotaciones.add(Anotacion);
            Anotacion.save();
            coleccionAnotaciones.fetch();
		}
}else{
	model.set({
			Fecha:$.dateTextField.text, 
			IdAlumno:data.IdAlumno, 
			Comentario:$.txtObservaciones.value, 
			Titulo:$.txtTitulo.value
	});
	model.save();
}
    
           
    
}

function EnviarExamen(){
	var alumno = Alloy.Collections.Alumno;
	alumno.fetch();
	var model = alumno.get(data.IdAlumno);
	var datos = model.toJSON();
	
	
	if (datos.UsuarioCloud=1){
		Cloud.Users.query({
			    where: {
			        email: datos.Email
			    }
			}, function (e) {
			    if (e.success) {
			       Cloud.Messages.create({
	        			to_ids: e.users[0].id,
				        body: $.txtObservaciones.value,
				        subject: $.txtTitulo.value,
				        custom_fields:{IdTipo:2, Fecha:$.dateTextField.text, Profesor: Ti.App.Properties.getString('Nombre') + ' ' + Ti.App.Properties.getString('Apellido1') +' '+ Ti.App.Properties.getString('Apellido2')}
				        
			        }, function (e) {
			            if (e.success) {
			                alert('Enviado!');
				        
			            } else {
			                alert('Error:\n' +
			            	((e.error && e.message) || JSON.stringify(e)));
			            }
			            
			        });
			    } else {
			        alert('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		 
	}
   
}

function EnviarExamenTodos(){
	var alumno = Alloy.Collections.Alumno;
	alumno.fetch();
	var model = alumno.get(data.IdAlumno);
	var datos = model.toJSON();
	
	
	if (datos.UsuarioCloud=1){
		Cloud.Users.query({
			    where: {
			        email: datos.Email
			    }
			}, function (e) {
			    if (e.success) {
			       Cloud.Messages.create({
	        			to_ids: e.users[0].id,
				        body: $.txtObservaciones.value,
				        subject: $.txtTitulo.value,
				        custom_fields:{IdTipo:2, Fecha:$.dateTextField.text, Profesor: Ti.App.Properties.getString('Nombre') + ' ' + Ti.App.Properties.getString('Apellido1') +' '+ Ti.App.Properties.getString('Apellido2')}
				        
			        }, function (e) {
			            if (e.success) {
			                alert('Enviado!');
				        
			            } else {
			                alert('Error:\n' +
			            	((e.error && e.message) || JSON.stringify(e)));
			            }
			            
			        });
			    } else {
			        alert('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		 
	}
   
}

//Listeners ----------------------------

$.txtTitulo.addEventListener("click", function() {
	var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el titulo',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtTitulo.value = e.text;
            }
        });
        dialog.show();
});

$.txtObservaciones.addEventListener("click", function() {
	var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el texto de la observación',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
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

$.dateTextField.addEventListener('click',function(){
    $.txtObservaciones.blur();
    $.winNuevaNota.add(picker_view);
    picker_view.animate(slide_in);

});

$.txtObservaciones.addEventListener('click', function(){picker_view.animate(slide_out);});



//CANCEL BUTTON
$.cancel.addEventListener("click", function() {
    picker_view.animate(slide_out);
});


//SET TEXTFIELD VALUE AND CLOSE PICKER

$.done.addEventListener("click", function() {
    var dateValue = picker.value;
    $.dateTextField.text =  (dateValue.getMonth() + 1) + "/"+ dateValue.getDate() + "/"+ dateValue.getFullYear();
    picker_view.animate(slide_out);});