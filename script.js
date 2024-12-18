document.getElementById('info-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const imageInput = document.getElementById('image').files[0];
    const name = document.getElementById('name').value;
    const career = document.getElementById('career').value;
    const carnet = document.getElementById('carnet').value;

    // Actualizar el carnet
    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('card-image').src = e.target.result;
        };
        reader.readAsDataURL(imageInput);
    }

    document.getElementById('card-name').textContent = name;
    document.getElementById('card-career').textContent = career;
    document.getElementById('card-carnet').textContent = carnet;

    // Mostrar el carnet y ocultar el formulario
    document.getElementById('card').style.display = 'flex';
    document.getElementById('info-form').style.display = 'none';
    document.getElementById('new-card-btn').style.display = 'block';
});

// Botón para generar un nuevo carnet
document.getElementById('new-card-btn').addEventListener('click', function () {
    // Reiniciar el formulario y la tarjeta
    document.getElementById('info-form').reset();
    document.getElementById('card').style.display = 'none';
    document.getElementById('info-form').style.display = 'block';
    this.style.display = 'none';
});
