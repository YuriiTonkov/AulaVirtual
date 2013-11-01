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
    var modelEvaluacion = colEvaluaciones.get(data.IdEvaluacion);
    var ArrayEvaluacion = modelEvaluacion.toJSON();
    $.txtNombreEvaluacion.value = ArrayEvaluacion.Nombre;
    $.lblFecha.text = ArrayEvaluacion.FechaInicio;
    $.txtPeso.value = ArrayEvaluacion.Peso;
}
  
    
function Guardar(){
    GuardarEvaluacion();
    $.winNuevaEvaluacion.close();
}   

function GuardarEvaluacion(){
    calcularMedia();
    var coleccionEvaluaciones = Alloy.Collections.Evaluacion;
    if (data.IdEvaluacion == undefined){
        if ($.txtNombreEvaluacion.value == "") 
            {
                alert("Tiene que introducir un nombre de la evaluacion.");
            }
        else
            {
                var Evaluacion = Alloy.createModel('Evaluacion',{Nombre:$.txtNombreEvaluacion.value, AlumnoAsignatura:data.AlumnoAsignatura, Nota:$.txtNota.text, Peso:$.txtPeso.value, FechaInicio:$.lblFecha.text});
                coleccionEvaluaciones.add(Evaluacion);
                Evaluacion.save();
                coleccionEvaluaciones.fetch();
                $.winNuevaEvaluacion.close();
            }
    }else{
        coleccionEvaluaciones.fetch();
        var modelEvaluacion = coleccionEvaluaciones.get(data.IdEvaluacion);
        modelEvaluacion.set({Nombre:$.txtNombreEvaluacion.value, Calificacion:$.txtNota.text, Peso:$.txtPeso.value, FechaInicio:$.lblFecha.text});
        modelEvaluacion.save();
        coleccionEvaluaciones.fetch();
    }

}

function calcularMedia(){
        //Para sacar la nota hay que calcular la media de las notas de los examenes teniendo en cuenta el peso de cada uno
        var colExamenes = Alloy.createCollection("Examen");
        colExamenes.fetch();
        var modelExamen = colExamenes.where({Evaluacion: data.IdEvaluacion});
        var nota=0;
        for (var i=0;i<modelExamen.length;i++){
            var datos = modelExamen[i].toJSON();
            nota = nota + (datos.Nota * datos.Peso/100);
        }
        $.txtNota.text = nota;
        
    }

//--------------------Listeners

$.txtNombreEvaluacion.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el nombre de la Evaluación',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtNombreEvaluacion.value = e.text;
            }
        });
        dialog.show();
});

$.txtPeso.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el peso de la Evaluacion',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                $.txtPeso.value = e.text;
            }
        });
        dialog.show();
});

//--------------------CODIGO PARA FUNCIONAMIENTO DEL DATEPICKER
var slide_in =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-251});
var picker_view = Titanium.UI.createView({height:251,bottom:-251});
//CREATE SELECTOR BUTTONS
//var cancel =  Titanium.UI.createButton({title:"Cancelar",style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED});
var cancel = $.cancel;
var done = $.done;
//var done =  Titanium.UI.createButton({title:"Done",style:Titanium.UI.iPhone.SystemButtonStyle.DONE});
var spacer =  Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});
var toolbar =  Ti.UI.iOS.createToolbar({top:0,items:[cancel,spacer,done]});

//Set initial value to today’s date.
var dateValue = new Date();
var minDate = new Date();
minDate.setFullYear(1900);
minDate.setMonth(0);
minDate.setDate(1);

var picker = Ti.UI.createPicker({
type:Ti.UI.PICKER_TYPE_DATE,
value:dateValue,
selectionIndicator:"true"});
picker_view.add(picker);
picker_view.add(toolbar);

$.lblFecha.addEventListener('click',function(){
    //$.txtNota.blur();
    $.winNuevaEvaluacion.add(picker_view);
    picker_view.animate(slide_in);

});

$.txtNota.addEventListener('click', function(){picker_view.animate(slide_out);});



//CANCEL BUTTON
$.cancel.addEventListener("click", function() {
    picker_view.animate(slide_out);
});


//SET TEXTFIELD VALUE AND CLOSE PICKER

$.done.addEventListener("click", function() {
    var dateValue = picker.value;
    $.lblFecha.value =  (dateValue.getMonth() + 1) + "/"+ dateValue.getDate() + "/"+ dateValue.getFullYear();
    picker_view.animate(slide_out);});
    

//-----------PRUEBAS DE VALIDACION-----------------------



var validationCallback = function(errors) {
        if(errors.length > 0) {
                for (var i = 0; i < errors.length; i++) {
                        Ti.API.debug(errors[i].message);
                }
                alert(errors[0].message);
        } else {
               Guardar();
        }
};


var returnCallback = function() {
        validator.run([
                                {
                                        id: 'dateField',
                                    value: $.lblFecha.value,
                                    display: 'Fecha',    
                                    rules: 'required'
                                },
                                {
                                        id: 'notaField',
                                    value: $.txtNombreEvaluacion.value,
                                    display: 'Nombre',    
                                    rules: 'required'
                                },
                                {
                                        id: 'pesoField',
                                    value: $.txtPeso.value,
                                    display: 'Peso',    
                                    rules: 'required|numeric'
                                }
                        ], validationCallback);        
};

$.btnGuardar.addEventListener('click', returnCallback);
