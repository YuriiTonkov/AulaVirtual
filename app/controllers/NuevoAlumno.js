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
    if (data.IdAlumno == undefined){
        var alumno = Alloy.createModel('Alumno',{Nombre:$.txtNombre.value, 
                                            Apellido1:$.txtApellido1.value,   
                                            Apellido2:$.txtApellido2.value, 
                                            Direccion:$.txtDireccion.value, 
                                            CodPostal:$.txtCodPostal.value,
                                            TelContacto:$.txtTelefono.value,
                                            Email:$.txtEmail.value,
                                            Clase:data.IdClase});
        var coleccionAlumnos = Alloy.Collections.Alumno;
        coleccionAlumnos.add(alumno);
        alumno.save();
 
        coleccionAlumnos.fetch();
        $.winNuevoAlumno.close();
    }else{
    
    }
}