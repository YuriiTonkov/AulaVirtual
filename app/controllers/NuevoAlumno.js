var arg1 = arguments[0] || {};
var data = [];
data = arg1;

$.winNuevoAlumno.title = data.Nombre;
$.winNuevoAlumno.setRightNavButton($.btnGuardar);
var alumno = Alloy.Collections.Alumno;
var coleccion_filtrada = alumno.getAlumnosFromClase(data.IdClase);


if (data.IdAlumno == undefined){
    
}else{
    //Si viene un idalumno, la pantalla debe ser de actualizacion, se deben mostrar los datos
    
    //alumno.fetch();
    
    var model = coleccion_filtrada.get(data.IdAlumno);
    var datos = model.toJSON();
    coleccion_filtrada.setElement(model);
    
    $.txtNombre.value = datos.Nombre;
    $.txtApellido1.value = datos.Apellido1;
    $.txtApellido2.value = datos.Apellido2;
    $.txtDireccion.value = datos.Direccion;
    $.txtCodPostal.value = datos.CodPostal;
    $.txtTelefono.value = datos.TelContacto;
    $.txtTelefono2.value = datos.TelContacto2;
    $.txtEmail.value = datos.Email;
    $.txtEmail2.value = datos.Email2;
    $.txtPadre.value = datos.Padre;
    $.txtMadre.value = datos.Madre;

    }

//Funciones --------------------------------------------------------------------------------------------------------

function GuardarAlumno(){
    var coleccionAlumnos = Alloy.Collections.Alumno;
    if (data.IdAlumno == undefined){
        
        //Al venir a undefined el IdAlumno quiere decir que es la creación de un nuevo alumno
        var alumno = Alloy.createModel('Alumno',{Nombre:$.txtNombre.value, 
                                            Apellido1:$.txtApellido1.value,   
                                            Apellido2:$.txtApellido2.value, 
                                            Direccion:$.txtDireccion.value, 
                                            CodPostal:$.txtCodPostal.value,
                                            TelContacto:$.txtTelefono.value,
                                            TelContacto2:$.txtTelefono2.value,
                                            Email:$.txtEmail.value,
                                            Email2:$.txtEmail2.value,
                                            Padre:$.txtPadre.value,
                                            Madre:$.txtMadre.value,
                                            Clase:data.IdClase});
       
        coleccionAlumnos.add(alumno);
        alumno.save();
        coleccionAlumnos.fetch();     
    }else{
    //Al venir idAlumno con un valor quiere decir que es una actualizacion
        var modelActual = coleccion_filtrada.getElement();
        modelActual.set({Nombre:$.txtNombre.value, 
                       Apellido1:$.txtApellido1.value,   
                       Apellido2:$.txtApellido2.value, 
                       Direccion:$.txtDireccion.value, 
                       CodPostal:$.txtCodPostal.value,
                       TelContacto:$.txtTelefono.value,
                       TelContacto2:$.txtTelefono2.value,
                       Email:$.txtEmail.value,
                       Email2:$.txtEmail2.value,
                       Padre:$.txtPadre.value,
                       Madre:$.txtMadre.value,
                       Clase:data.IdClase});
        modelActual.save();
        
        var dialog = Ti.UI.createAlertDialog({
            title: 'La información del alumno se ha almacenado correctamente.',
            style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
            buttonNames: ['Aceptar'],
             });
            dialog.show();
    }
    
    
    
}

function sacarFoto(){
    Titanium.Media.showCamera({
      success:function(event)
      {
            var cropRect = event.cropRect;
            var image = event.media;
            var d=new Date();
            var filename = d.getTime() + pictype + ".png";
            var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,filename);
            f.write(image);
         
            Titanium.API.info('taken picture.. path is;-');
            Titanium.API.info(f.nativePath);
    }
});
}

function TomarAnotacion(){
    
}

function AnteriorAlumno(){
    var modelActual = coleccion_filtrada.getElement();
    var modelPrev = coleccion_filtrada.prev().getElement();
    
    if (modelPrev != undefined){
        var datos = modelPrev.toJSON();
       //coleccion_filtrada.setElement(modelPrev);
        $.txtNombre.value = datos.Nombre;
        $.txtApellido1.value = datos.Apellido1;
        $.txtApellido2.value = datos.Apellido2;
        $.txtDireccion.value = datos.Direccion;
        $.txtCodPostal.value = datos.CodPostal;
        $.txtTelefono.value = datos.TelContacto;
        $.txtEmail.value = datos.Email; 
    }else{
        coleccion_filtrada.setElement(modelActual);
        var dialog2 = Ti.UI.createAlertDialog({
            title: 'Ha llegado al principio de la lista de alumnos',
            style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
            buttonNames: ['Aceptar'],
             });
            dialog2.show();
    }
}

function SiguienteAlumno(){
    var modelActual = coleccion_filtrada.getElement();
    var modelNext = coleccion_filtrada.next().getElement();
   
    if (modelNext != undefined){
        var datos = modelNext.toJSON();
        //coleccion_filtrada.setElement(modelNext);
        $.txtNombre.value = datos.Nombre;
        $.txtApellido1.value = datos.Apellido1;
        $.txtApellido2.value = datos.Apellido2;
        $.txtDireccion.value = datos.Direccion;
        $.txtCodPostal.value = datos.CodPostal;
        $.txtTelefono.value = datos.TelContacto;
        $.txtEmail.value = datos.Email; 
    }
    else {
        coleccion_filtrada.setElement(modelActual);
        var dialog = Ti.UI.createAlertDialog({
            title: 'Ha llegado al final de la lista de alumnos',
            style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
            buttonNames: ['Aceptar'],
             });
            dialog.show();
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

$.txtTelefono2.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el teléfono',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtTelefono2.value = e.text;
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

$.txtEmail2.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el correo electrónico',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtEmail2.value = e.text;
            }
        });
        dialog.show();
});

$.txtPadre.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el nombre del padre',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtPadre.value = e.text;
            }
        });
        dialog.show();
});

$.txtMadre.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el nombre de la madre',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtMadre.value = e.text;
            }
        });
        dialog.show();
});