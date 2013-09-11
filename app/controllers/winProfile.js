$.winUsuario.setRightNavButton($.btnGuardar);


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
      } else {
            $.lblError.text = "Contraseña incorrecta";
            $.lblError.visible= true;
    }   
}

$.winUsuario.addEventListener('focus',function(e){
    
     refreshScreen();
});

// Free model-view data binding resources when this view-controller closes
$.winUsuario.addEventListener('close', function() {
    $.destroy();
});
