//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;



$.btnBar.style = Titanium.UI.iPhone.SystemButtonStyle.BAR;
var colAsignatura = Alloy.createCollection("Asignatura");
colAsignatura.fetch();
var model = colAsignatura.get(data.IdAsignatura);
var datos = model.toJSON();
if (datos.Favorita==1){
    var buttons = [
        {title:'+', enabled:true},
        {title:'*', enabled:false}];
    $.btnBar.labels=buttons;
}


//Funciones--------------------------
$.btnBar.addEventListener("click", function(e){
    if (e.index==0){
    var tabAlumnosController = Alloy.createController("addAlumno", {"IdAsignatura":data.IdAsignatura});
    Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());  
    }
    else{
        colAsignatura.updateFavorito(data.IdAsignatura, 1);
        var buttons = [
        {title:'+', enabled:true},
        {title:'*', enabled:false}];
        $.btnBar.labels=buttons;
        //Creamos aviso de que se ha guardado en favoritos
        var alertDialog = Ti.UI.createAlertDialog({
        title: "Aviso",
        message: "La Asignatura se ha guardado en favoritos. Podrá acceder a través de la pestaña FAVORITOS",
        buttonNames: ['OK'],
        cancel:0
    });
    alertDialog.show();
    }
});