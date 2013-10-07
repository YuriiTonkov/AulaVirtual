



Cloud.Friends.requests(function (e) {
            if (e.success) {
	            if (e.friend_requests.length == 0) {
		            $.TablaAlumnosCloud.setData([
			            { title: 'No hay solicitantes' }
		            ]);
	            } else {
	                var data = [];
		            data.push({ title: 'Solicitudes de tutoria' });
	                for (var i = 0, l = e.friend_requests.length; i < l; i++) {
	                    var user = e.friend_requests[i].user;
	                    var row = Ti.UI.createTableViewRow({
	                        title: user.first_name + ' ' + user.last_name
	                    });
	                    data.push(row);
	                }
	                $.TablaAlumnosCloud.setData(data);
                }
            }
            else {
                $.TablaAlumnosCloud.setData.setData([
                    { title: (e.error && e.message) || e }
                ]);
                error(e);
            }
        });