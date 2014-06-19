//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.addAlumno.setRightNavButton($.btnGuardar);

//-----------------------------------------


var Asignaturas = Alloy.Collections.VW_Asignatura_Alumno_Left;
Asignaturas.filtraAlumno(data.IdAsignatura);


function nombrecompleto(model){
    var transform = model.toJSON();
    transform.nombrecompleto = transform.NombreAlumno + " " + transform.Apellido1 + " " + transform.Apellido2;
    return transform;
}

//Funciones--------------------------
function getDate() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
 
    if (hours < 10) { hours = "0" + hours}; 
    if (minutes < 10) { minutes = "0" + minutes};
    if (seconds < 10) { seconds = "0" + seconds};
 
    return month + "/" + day + "/" + year + " -  " + hours + ":" + minutes + ":" + seconds;
 
    }


function GuardarAlumnos(){
 
   for (var i=0;i<$.TablaAlumnos.data[0].rows.length;i++){
       if ($.TablaAlumnos.data[0].rows[i].selected){
            var AlumnoAsignatura = Alloy.createModel('Alumno_Asignatura',{Asignatura:data.IdAsignatura, 
                                            Alumno:$.TablaAlumnos.data[0].rows[i].data,   
                                            FechaInicio: getDate()});
            var coleccionAlumnoAsignatura = Alloy.Collections.Alumno_Asignatura;
            coleccionAlumnoAsignatura.add(AlumnoAsignatura);
            AlumnoAsignatura.save();
       }
   } 
   
 
    coleccionAlumnoAsignatura.fetch();
    //refrescamos la colección de la vista.
    var AsignaturasAlumno = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
    AsignaturasAlumno.fetch();
    //cerramos esta ventana
    $.addAlumno.close(); 
    
}

//-Listeners-------------------------------

$.TablaAlumnos.addEventListener('click',function(e){

   if(!e.row.selected) {
      e.row.backgroundColor = '#79b7d9';
      e.row.selected = 1;
   }
   else{
      e.row.backgroundColor = '#fff';
      e.row.selected = 0;
   }
});