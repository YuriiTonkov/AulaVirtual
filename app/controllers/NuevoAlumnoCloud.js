//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;

$.NuevoAlumnoCloud.title = "Solicitudes de tutoría";
$.NuevoAlumnoCloud.setRightNavButton($.btnGuardar);


Cloud.Friends.requests(function (e) {
            if (e.success) {
	            if (e.friend_requests.length == 0) {
		            $.TablaAlumnosCloud.setData([
			            { title: 'No hay solicitantes' }
		            ]);
	            } else {
	                var dato = [];
		            
	                for (var i = 0, l = e.friend_requests.length; i < l; i++) {
	                    var user = e.friend_requests[i].user;
	                    var row = Ti.UI.createTableViewRow({
		                        title: user.first_name + ' ' + user.last_name,
		                        id: user.id,
	                    	});
	                    dato.push(row);
	                   
	                }
	                $.TablaAlumnosCloud.setData(dato);
                }
            }
            else {
                $.TablaAlumnosCloud.setData.setData([
                    { title: (e.error && e.message) || e }
                ]);
                error(e);
            }
        });
        
function GuardarAlumnos(){
 
   for (var i=0;i<$.TablaAlumnosCloud.data[0].rows.length;i++){
       if ($.TablaAlumnosCloud.data[0].rows[i].selected){
       	
       	Cloud.Users.query({
		    page: 1,
		    per_page: 1,
		    where: {
		        id: $.TablaAlumnosCloud.data[0].rows[i].id
		    }
				}, function (e) {
				    if (e.success) {
				    	Cloud.Friends.approve({
							user_ids: e.users[0].id
						}, function(o) {
					        if (o.success) {
						        alert('Alumno aceptado');
					        } else {
						        error(o);
					        }
				        });
				    	 var AlumnoCloud = Alloy.createModel('Alumno',{Nombre:e.users[0].first_name, 
                                            Apellido1:e.users[0].last_name,   
                                            Apellido2:e.users[0].custom_fields.Apellido2, 
                                            Direccion:e.users[0].custom_fields.Direccion, 
                                            CodPostal:e.users[0].custom_fields.CodPostal,
                                            TelContacto:e.users[0].custom_fields.Telefono1,
                                            TelContacto2:e.users[0].custom_fields.Telefono2,
                                            Email:e.users[0].email,
                                            Email2:e.users[0].custom_fields.Email2,
                                            Padre:e.users[0].custom_fields.Padre,
                                            Madre:e.users[0].custom_fields.Madre,
                                            foto1_url:"",
                                            Clase:data.IdClase,
                                            UsuarioCloud:e.users[0].id});
           				 var coleccionAlumno = Alloy.Collections.Alumno;
            			 coleccionAlumno.add(AlumnoCloud);
            			 AlumnoCloud.save();
				        
						coleccionAlumno.fetch();
				      } else {
				      	
				        alert('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				            
				    }
				    
			});
       		
           
       }
   } 
    //cerramos esta ventana
    $.NuevoAlumnoCloud.close(); 
    
}


//-Listeners-------------------------------

$.TablaAlumnosCloud.addEventListener('click',function(e){

   if(!e.row.selected) {
      e.row.backgroundColor = '#003b6f';
      e.row.selected = 1;
   }
   else{
      e.row.backgroundColor = '#fff';
      e.row.selected = 0;
   }
});