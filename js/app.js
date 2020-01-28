
$('#obtenerDatos').click(function() {
                       
	$.ajax({
	    type: "GET",
	    url: "json/postres.json", // Archivo con los datos 
	    dataType: 'json',
	    beforeSend: function() {
	        $('#spinner').removeClass('ocultar') // Le quito la clase que oculta mi animación 
	    },
	    success: function(data){
	        console.log(data); // Imprimo los datos obtenidos en la consola de Google Chrome Dev Tools
	        let datos = "<ul class='list-group'>"; // Creo una lista '<ul>' y dentro de ella cargo elemento por elemento 
	        for (let i = 0; i < data.length; i++) {
	          console.log(data[i].nombre);
	          datos += "<li class='list-group-item'>"+data[i].nombre+"</li>";
	        }
	      datos += "</ul>"
	      $('#datos').html(datos); // Envío los datos obtenidos al div 'datos' que se encuentra en la vista 
	    },
	  complete: function(){
	        $('#spinner').addClass('ocultar') // Oculto la animación (Spinner) de la vista para que pase a mostrarse los datos
	    },
	});
  
});