var arg1 = arguments[0] || {};
var data = [];
data = arg1;


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
            $.NuevaEvaluacion.close();
    }
}