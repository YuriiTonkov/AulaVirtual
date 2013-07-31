var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevoExamen.setRightNavButton($.btnGuardar);

function GuardarExamen(){
    if ($.dateTextField.text == "Pulse aqui") 
        {
            alert("Tiene que introducir la fecha del examen.")
        }
    else 
        {
            var Examen = Alloy.createModel('Examen',{FechaExamen:$.dateTextField.text, Evaluacion:data.Evaluacion, Nota:$.txtNota.value});
            var coleccionExamenes = Alloy.Collections.Examen;
            coleccionExamenes.add(Examen);
            Examen.save();
            coleccionExamenes.fetch();
            $.winNuevoExamen.close();
    }
}
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

$.dateTextField.addEventListener('click',function(){
    $.txtNota.blur();
    $.winNuevoExamen.add(picker_view);
    picker_view.animate(slide_in);

});

$.txtNota.addEventListener('click', function(){picker_view.animate(slide_out);})



//CANCEL BUTTON
$.cancel.addEventListener("click", function() {
    picker_view.animate(slide_out);
});


//SET TEXTFIELD VALUE AND CLOSE PICKER

$.done.addEventListener("click", function() {
    var dateValue = picker.value;
    $.dateTextField.text =  (dateValue.getMonth() + 1) + "/"+ dateValue.getDate() + "/"+ dateValue.getFullYear();
    picker_view.animate(slide_out);});