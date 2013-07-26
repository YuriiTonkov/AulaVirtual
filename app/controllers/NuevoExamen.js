var arg1 = arguments[0] || {};
var data = [];
data = arg1;


function GuardarExamen(){
    if ($.DtExamen.value == undefined) 
        {
            alert("Tiene que introducir la fecha del examen.")
        }
    else
        {
            var Examen = Alloy.createModel('Examen',{FechaExamen:$.DtExamen.value, Evaluacion:data.Evaluacion});
            var coleccionExamenes = Alloy.Collections.Examen;
            coleccionExamenes.add(Examen);
            Examen.save();
            coleccionExamenes.fetch();
            $.NuevoExamen.close();
    }
}