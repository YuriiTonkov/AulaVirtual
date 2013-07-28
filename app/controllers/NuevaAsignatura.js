//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevaAsignatura.setRightNavButton($.btnGuardar);

//-----------------------------------------


var Asignaturas = Alloy.Collections.Asignatura;
Asignaturas.fetch();

//Funciones--------------------------


function GuardarAsignatura(){}

//--------------------------------