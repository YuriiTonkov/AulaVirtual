$.lblClases.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    
    var tabAlumnosController = Alloy.createController("WinAlumnos", {"IdClase":e.source.textid, "Nombre":e.source.text});
    
    Alloy.Globals.tabGroup.open(tabAlumnosController.getView());
    
});