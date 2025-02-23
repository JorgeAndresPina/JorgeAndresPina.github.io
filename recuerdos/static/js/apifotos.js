function showFotos() {
    let url = 'https://bdr-api-rq3w.onrender.com/fotos';
    fetch(url)
    .then(response => response.json())
    .then(data => recuerdos(data))
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const recuerdos = (datos) => {
    let body = '';
    const staticUrl = document.getElementById('staticUrl').value;
    for(var i=0; i<datos.length; i++){
        body += `
        <div class="col-md-3 p-2">
            <div class="card" style="background-color: #E3ACF2;">
                <div class="card-body m-3 shadow" style="background-color: white;">
                    <img src="{% static '${datos[i].ruta}'%}" class="img-fluid card-img rounded-3" alt="nombre">
                </div>
            </div>
        </div>
        `
    }
    const galeriaFotos = document.getElementById('fotos');
    if (galeriaFotos) {
        galeriaFotos.innerHTML = body;
    } else {
        console.error("Element with id 'fotos' not found.");
    }
}

// Obtener los datos y mostrarlos
document.addEventListener('DOMContentLoaded', () => {
    const galeriaFotos = document.getElementById('fotos');
    if (galeriaFotos) {
        showFotos();
    } else {
        console.error("Element with id 'fotos' not found.");
    }
});