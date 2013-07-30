var arg1 = arguments[0] || {};
var data = [];
data = arg1;

$.winNuevoAlumno.title = data.Nombre;
$.winNuevoAlumno.setRightNavButton($.btnGuardar);

function GuardarAlumno(){
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
}