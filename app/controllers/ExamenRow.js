$.tblExamenRow.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");

if (e.source.id == "tblExamenRow") {
        var tabAlumnosController = Alloy.createController("NuevoExamen", {"IdExamen":e.source.data});
        Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
   }
   else{
   	    var tabAlumnosController = Alloy.createController("NuevoExamen", {"IdExamen":e.source.textid});
        Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
   	
   }
  
});