$.tblAlumnoRow.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    if (e.detail==1){
        var tabAlumnosController = Alloy.createController("DetailAlumno", {"IdAlumno":e.source.textid});
        Alloy.Globals.tabGroup.open(tabAlumnosController.getView());
    }
    else{
    var tabAsignaturasController = Alloy.createController("WinAsignaturas", {"IdAlumno":e.source.textid, "Nombre":e.source.text});
    Alloy.Globals.tabGroup.open(tabAsignaturasController.getView());
    }
    //COmentario para añadir una nueva version al github
});