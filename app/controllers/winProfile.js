$.winUsuario.setRightNavButton($.btnGuardar);
$.winUsuario.title="Información Usuario";


function refreshScreen(){
    if (Ti.App.Properties.getString('Nombre')!=undefined){
        $.txtNombre.value = Ti.App.Properties.getString('Nombre');
    };

    if (Ti.App.Properties.getString('Apellido1')!=undefined){
        $.txtApellido1.value = Ti.App.Properties.getString('Apellido1');
    };

    if (Ti.App.Properties.getString('Apellido2')!=undefined){
        $.txtApellido2.value = Ti.App.Properties.getString('Apellido2');
    };

    if (Ti.App.Properties.getString('Direccion')!=undefined){
        $.txtDireccion.value = Ti.App.Properties.getString('Direccion');
    };

    if (Ti.App.Properties.getString('CP')!=undefined){
        $.txtCodPostal.value = Ti.App.Properties.getString('CP');
    };

    if (Ti.App.Properties.getString('Telefono')!=undefined){
        $.txtTelefono.value = Ti.App.Properties.getString('Telefono');
    };

    if (Ti.App.Properties.getString('Email')!=undefined){
        $.txtEmail.value = Ti.App.Properties.getString('Email');
    };
    
    if (Ti.App.Properties.getString('Ayuda')!=undefined){
        $.chkAyuda.value = Ti.App.Properties.getString('Ayuda');
    };
    if (Ti.App.Properties.getString('UsuarioCloud')!=undefined){
        $.btnAlta.visible = false;
    };
}

function Alta(){
	if (Ti.App.Properties.getString('UsuarioCloud')==undefined){
	Cloud.Users.create({
						    email: Ti.App.Properties.getString('Email'),
						    first_name: Ti.App.Properties.getString('Nombre'),
						    last_name: Ti.App.Properties.getString('Apellido1'),
						    password: 'AulaVirtual',
						    password_confirmation: 'AulaVirtual',
						    role: 'Profesor',
						    custom_fields:{"Direccion": Ti.App.Properties.getString('Direccion'),
						    			   "CodPostal": Ti.App.Properties.getString('CP'),
						    			   "Telefono1": Ti.App.Properties.getString('Telefono'),
						    			   "Apellido2": Ti.App.Properties.getString('Apellido2')
						    			   }
					}, function (e) {
					    if (e.success) {
						  
							//AVISO 
							var user = e.users[0];
					        alert('Success:\n' +
					            'id: ' + user.id + '\n' +
					            'sessionId: ' + Cloud.sessionId + '\n' +
					            'first name: ' + user.first_name + '\n' +
					            'last name: ' + user.last_name);
								Ti.App.Properties.setString("UsuarioCloud",1);
					    } else {
					        alert('Error:\n' +
					            ((e.error && e.message) || JSON.stringify(e)));
					    }
					});
					
					}
					else {}
					
}

function Guardar(){
    if (Ti.App.Properties.getString('Pass')==$.txtPass.value){
            Ti.App.Properties.setString("Nombre",$.txtNombre.value);
            Ti.App.Properties.setString("Apellido1", $.txtApellido1.value);
            Ti.App.Properties.setString("Apellido2", $.txtApellido2.value);
            Ti.App.Properties.setString("Direccion",$.txtDireccion.value);
            Ti.App.Properties.setString("CP", $.txtCodPostal.value);
            Ti.App.Properties.setString("Telefono", $.txtTelefono.value);
            Ti.App.Properties.setString("Email", $.txtEmail.value);
            Ti.App.Properties.setString("Ayuda", $.chkAyuda.value);
            $.lblError.text = "Se han modificado los datos de registro";
            $.lblError.visible= true;
            
			if (Ti.App.Properties.getString('UsuarioCloud')!=undefined){
			    var data = {
					email: $.txtEmail.value,
					first_name:$.txtNombre.value ,
					last_name:  $.txtApellido1.value,
					password: 'AulaVirtual',
					password_confirmation: 'AulaVirtual',
					role: 'Profesor',
					custom_fields:{"Direccion": $.txtDireccion.value,
									"CodPostal": $.txtCodPostal.value,
									"Telefono1": $.txtTelefono.value,
								    "Apellido2": $.txtApellido2.value
								 }
				};
			    Cloud.Users.update(data, function (e) {
			       if (e.success) {
			            alert('Se han modificado los datos de usuario');
			       }
			       else {
			            alert('No se han podido actualizar los datos en la nube');
			       }  
			    });
			       
			}
      } else {
            $.lblError.text = "Contraseña incorrecta";
            $.lblError.visible= true;
    }   
   
}


//Listeners -------------------------------------------------------------------------------------------------

$.txtNombre.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el nombre',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            //Ti.API.info('e.text: ' + e.text);
            if (e.index === e.source.cancel){
     
            }else{
                $.txtNombre.value = e.text;
            }
        });
        dialog.show();
});

$.txtApellido1.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el primer apellido',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtApellido1.value = e.text;
            }
        });
        dialog.show();
});

$.txtApellido2.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el segundo apellido',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtApellido2.value = e.text;
            }
        });
        dialog.show();
});

$.txtDireccion.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca la direccion',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtDireccion.value = e.text;
            }
        });
        dialog.show();
});

$.txtCodPostal.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el código postal',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtCodPostal.value = e.text;
            }
        });
        dialog.show();
});

$.txtTelefono.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el teléfono',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtTelefono.value = e.text;
            }
        });
        dialog.show();
});

$.txtEmail.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el correo electrónico',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtEmail.value = e.text;
            }
        });
        dialog.show();
});

$.txtPass.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el correo electrónico',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtPass.value = e.text;
            }
        });
        dialog.show();
});
$.winUsuario.addEventListener('focus',function(e){
    
     refreshScreen();
});



// Free model-view data binding resources when this view-controller closes
$.winUsuario.addEventListener('close', function() {
    $.destroy();
});
