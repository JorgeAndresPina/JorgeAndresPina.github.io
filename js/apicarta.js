const urlCartas = 'https://bdr-api-rq3w.onrender.com/cartas';


async function getCartas() {
    try {
        const respuesta = await fetch(urlCartas);
        return await respuesta.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

function showCartas(datos) {
    let body = '';

    for (let i = 0; i < datos.length; i++) {
        body += '<div class="card cardBodyColor m-3">' +
                '  <div class="card-body ">' +
                '    <p class="contenidoCarta">' + datos[i].contenido + '</p>' +
                '  </div>' +
                '</div>';
    }
    document.getElementById('cartas').innerHTML = body;
}

// Obtener los datos y mostrarlos
getCartas().then(datos => showCartas(datos));