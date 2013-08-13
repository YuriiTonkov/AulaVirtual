$.lblEvaluacion.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    if (e.detail==1){

        var tabAlumnosController = Alloy.createController("NuevaEvaluacion", {"IdEvaluacion":e.source.textid});
        Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
    }
    else{
    var tabEvaluacionesController = Alloy.createController("WinExamenes", {"IdEvaluacion":e.source.textid, "Nombre":e.source.text});
    Alloy.Globals.GrupoTab.activeTab.open(tabEvaluacionesController.getView());
    }
});

