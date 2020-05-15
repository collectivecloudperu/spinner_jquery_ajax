$('#obtenerDatos').click(function(e) {

    e.preventDefault();

    $.ajax({
            url: "json/postres.json",
            type: "get",
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function() {
                $('#datos').html("<img src='img/spinner.gif' />");
            },
        })

        .done(function(data) {

            console.log(data);
            let datos = "<ul class='list-group'>";
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].nombre);
                datos += "<li class='list-group-item'>" + data[i].nombre + "</li>";
            }
            datos += "</ul>"
            $('#datos').html(datos);

        })

        .fail(function(data) {
            //
        });

});
