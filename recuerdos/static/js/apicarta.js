function showCartas() {
    let url = 'https://bdr-api-rq3w.onrender.com/cartas';
    fetch(url)
    .then(response => response.json())
    .then(data => recuerdos(data))
    .catch(error => console.log(error))

    const recuerdos = (datos) => {
        let body = '';
        for(var i=0; i<datos.length; i++){
            body += `
            <div class="card cardBodyColor m-3">
                <div class="card-body ">
                    <p class="contenidoCarta">${datos[i].contenido}</p>
                </div>
            </div>
            `
        }
        document.getElementById('cartas').innerHTML = body;
    }
}

document.addEventListener('DOMContentLoaded', showCartas);
