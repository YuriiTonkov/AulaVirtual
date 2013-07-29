//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevaAsignatura.setRightNavButton($.btnGuardar);

//-----------------------------------------

//var query1 = 'SELECT * FROM VW_ASIGNATURA_ALUMNO_LEFT WHERE IdAlumno=' + data.IdAlumno + ' AND  IdAsignatura NOT IN (SELECT Asignatura FROM VW_ALUMNO_ASIGNATURA_ASIGNATURA WHERE Alumno=' + data.IdAlumno+')'
//console.info("recogemos: "+query1);
//var Asignaturas = Alloy.createCollection('VW_Asignatura_Alumno_Left');
var Asignaturas = Alloy.Collections.VW_Asignatura_Alumno_Left;
//Asignaturas.fetch({query:query1});
//Asignaturas.fetch();
Asignaturas.filtraAsignatura(data.IdAlumno);
//Funciones--------------------------



function GuardarAsignatura(){}

//--------------------------------