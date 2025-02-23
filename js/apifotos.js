const urlFotos = 'https://bdr-api-rq3w.onrender.com/fotos';


function getFotos() {
    return fetch(urlFotos)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.log(error);
            return [];
        }
    );
}

function showFotos(datos) {
    let body = '';

    for (let i = 0; i < datos.length; i++) {
        body += '<div class="col-md-3 p-2">' +
                '   <div class="card" style="background-color: #E3ACF2;">'+ 
                '       <div class="card-body m-3 shadow" style="background-color: white;">'+
                '           <img src="'+ datos[i].ruta +'" class="img-fluid card-img rounded-3" alt="nombre">' +
                '       </div>'+
                '   </div>' + 
                '</div>';
    }
    document.getElementById('contenido-fotos').innerHTML = body;
}

// Obtener los datos y mostrarlos
getFotos().then(datos => showFotos(datos));
