var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevaEvaluacion.setRightNavButton($.btnGuardar);

if (data.IdEvaluacion == undefined){
    
    
} else {
    var colEvaluaciones = Alloy.Collections.Evaluacion;
    colEvaluaciones.fetch();
    var model = colEvaluaciones.get(data.IdEvaluacion);
    var modelArray = model.toJSON();
    $.txtNombreEvaluacion.value = modelArray.Nombre;
    
    
}

function GuardarEvaluacion(){
    if ($.txtNombreEvaluacion.value == "") 
        {
            alert("Tiene que introducir un nombre de la evaluacion.")
        }
    else
        {
            var Evaluacion = Alloy.createModel('Evaluacion',{Nombre:$.txtNombreEvaluacion.value, AlumnoAsignatura:data.AlumnoAsignatura});
            var coleccionEvaluaciones = Alloy.Collections.Evaluacion;
            coleccionEvaluaciones.add(Evaluacion);
            Evaluacion.save();
            coleccionEvaluaciones.fetch();
            $.winNuevaEvaluacion.close();
    }
}