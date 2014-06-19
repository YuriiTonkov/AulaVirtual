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
       		{image:'/library/images/iphone/icons/iconoAddAlumno.png', width:24, enabled:true},
   			{image:'/library/images/iphone/icons/iconoAddFavorito.png', width:24, enabled:false},
    		{image:'/library/images/iphone/icons/iconoAddAlumnoCloud.png', width:24, enabled:true},
    		{image:'/library/images/iphone/icons/iconoMandarNotaClase.png', width:24, enabled:true}
    		/*{title:'+', enabled:true},
        	{title:'*', enabled:false},
        	{title:'@', enabled:true},
        	{title:'$', enabled:true}];*/
    		];
    $.btnBar.labels=buttons;
}


//Funciones--------------------------
$.btnBar.addEventListener("click", function(e){
	 switch (e.index){
    	case 0:
    		var tabAlumnosController = Alloy.createController("addAlumno", {"IdAsignatura":data.IdAsignatura});
    		Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());  
    		break;
    	case 1:
    		colAsignatura.updateFavorito(data.IdAsignatura, 1);
	        var buttons = [
        			{image:'/library/images/iphone/icons/iconoAddAlumno.png', width:24, enabled:true},
   					{image:'/library/images/iphone/icons/iconoAddFavorito.png', width:24, enabled:false},
    				{image:'/library/images/iphone/icons/iconoAddAlumnoCloud.png', width:24, enabled:true},
    				{image:'/library/images/iphone/icons/iconoMandarNotaClase.png', width:24, enabled:true}
    				];
	        $.btnBar.labels=buttons;
	        //Creamos aviso de que se ha guardado en favoritos
	        var alertDialog = Ti.UI.createAlertDialog({
	        title: "Aviso",
	        message: "La Asignatura se ha guardado en favoritos. Podrá acceder a través de la pestaña Mis Asignaturas",
	        buttonNames: ['OK'],
	        cancel:0
	    });
	    alertDialog.show();
    		break;
     	case 2:
			var tabAlumnosController = Alloy.createController("examenesAsignatura", {"IdAsignatura":data.IdAsignatura});
    		Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
    		break;
       	case 3:
        	var tabAlumnosController = Alloy.createController("notasAlumno", {"IdAsignatura":data.IdAsignatura});
    		Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());  
    		break;

    }
});

