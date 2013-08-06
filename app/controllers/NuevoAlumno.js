var arg1 = arguments[0] || {};
var data = [];
data = arg1;

$.winNuevoAlumno.title = data.Nombre;
$.winNuevoAlumno.setRightNavButton($.btnGuardar);

if (data.IdAlumno == undefined){
    
}else{
    //Si viene un idalumno, la pantalla debe ser de actualizacion, se deben mostrar los datos
    var alumno = Alloy.createCollection("Alumno");
    alumno.fetch();
    var model = alumno.get(data.IdAlumno);
    var datos = model.toJSON();
    $.txtNombre.value = datos.Nombre;
    $.txtApellido1.value = datos.Apellido1;
    $.txtApellido2.value = datos.Apellido2;
    $.txtDireccion.value = datos.Direccion;
    $.txtCodPostal.value = datos.CodPostal;
    $.txtTelefono.value = datos.TelContacto;
    $.txtEmail.value = datos.Email
    }

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
                                            Email:$.txtEmail.value,
                                            Clase:data.IdClase});
       
        coleccionAlumnos.add(alumno);
        alumno.save();     
    }else{
    //Al venir idAlumno con un valor quiere decir que es una actualizacion
        coleccionAlumnos.updateAlumno(data.IdAlumno, $.txtNombre.value, $.txtApellido1.value,$.txtApellido2.value, $.txtDireccion.value,$.txtCodPostal.value,$.txtTelefono.value, $.txtEmail.value);
        coleccionAlumnos.fetch();
    }
    coleccionAlumnos.fetch();
    $.winNuevoAlumno.close();
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
