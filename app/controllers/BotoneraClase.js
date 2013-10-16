//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;



$.btnBar.style = Titanium.UI.iPhone.SystemButtonStyle.BAR;
var colClase = Alloy.createCollection("Clase");
colClase.fetch();
var model = colClase.get(data.IdClase);
var datos = model.toJSON();
if (datos.Favorita==1){
	if (Ti.App.Properties.getString('UsuarioCloud')==undefined){
    var buttons = [
        {title:'+', enabled:true},
        {title:'(+)', enabled:false},
        {title:'*', enabled:false}];
        
    $.btnBar.labels=buttons;
    
}else{
	var buttons = [
        {title:'+', enabled:true},
        {title:'(+)', enabled:true},
        {title:'*', enabled:false}];
        
    $.btnBar.labels=buttons;
}
} else {
	if (Ti.App.Properties.getString('UsuarioCloud')==undefined){
    var buttons = [
        {title:'+', enabled:true},
        {title:'(+)', enabled:false},
        {title:'*', enabled:true}];
        
    $.btnBar.labels=buttons;
    
}else{
	var buttons = [
        {title:'+', enabled:true},
        {title:'(+)', enabled:true},
        {title:'*', enabled:true}];
        
    $.btnBar.labels=buttons;
}
	
}


//Funciones--------------------------
$.btnBar.addEventListener("click", function(e){
    switch (e.index){
    	case 0:
    		var tabAlumnosController = Alloy.createController("NuevoAlumno", {"IdClase":data.IdClase});
    		Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());  
    		break;
    	case 1:
    		var tabAlumnosCloudController = Alloy.createController("NuevoAlumnoCloud",{"IdClase":data.IdClase});
    		Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosCloudController.getView());
    		break;
    	case 2:
        	colClase.updateFavorito(data.IdClase, 1);
        	var buttons = [
        		{title:'+', enabled:true},
        		{title:'(+)', enabled:true},
        		{title:'*', enabled:false}];
        	$.btnBar.labels=buttons;
        	//Creamos aviso de que se ha guardado en favoritos
        	var alertDialog = Ti.UI.createAlertDialog({
	            title: "Aviso",
	            message: "La clase se ha guardado en favoritos. Podrá acceder a través de la pestaña FAVORITOS",
	            buttonNames: ['OK'],
	            cancel:0
       			 });
    		alertDialog.show();
    		
    		break;
    	
    }
});