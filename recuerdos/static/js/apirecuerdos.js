const urlRecuerdos = 'https://bdr-api-rq3w.onrender.com/recuerdos';


function getRecuerdos() {
    return fetch(urlRecuerdos)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.log(error);
            return [];
        }
    );
}

function showRecuerdos(datos) {
    let body = '';

    for (let i = 0; i < datos.length; i++) {
        body += `<div class="col-md-3 p-2">
            <div class="card" style="background-color: #E3ACF2;">
            <div class="card-header m-3 shadow">
                <img src="{% static '${datos[i].ruta}'%}" class="img-fluid card-img rounded-3" alt="${datos[i].titulo}">
                <p class="lora p-1 m-1" style="font-size:21px;">${datos[i].titulo}</p>
            </div>
            <div class="card">
                <div class="card-body r-3" style="background-color: whitesmoke;">
                <p class="sora paddingInadorRecuerdos text-center" style="font-size: 19px;">${datos[i].descripcion}</p>
                </div>
            </div>
            </div>
        </div>`;
    }
    document.getElementById('contenido-recuerdos').innerHTML = body;
}

// Obtener los datos y mostrarlos
getRecuerdos().then(datos => showRecuerdos(datos));







