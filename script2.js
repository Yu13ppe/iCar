fetchCar();

//Apartado de busqueda de la pagina
$('#datosResult').hide();
let edit = false;

$('#search').keyup(function () {
    if ($('#search').val()) {
        let search = $('#search').val();

        var objt = new XMLHttpRequest();
        objt.open('POST', 'taskSearch.php', true);
        objt.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        objt.onreadystatechange = function () {
            if (objt.readyState == 4 && objt.status == 200) {
                let datos = JSON.parse(objt.response);
                let template = '';
                datos.forEach(dato => {
                    template += `<li>
                    ${datos[0].modelo}
                    </li>`
                });
                document.querySelector('#container').innerHTML = template;
                $('#datosResult').show();
            }
        }
        var data = 'search=' + encodeURIComponent(search);
        objt.send(data);
    }
});

//Apartado de ingresar datos a la base de datos

$('#carForm').submit(function (e) {
    e.preventDefault();

    var modeloCar = document.getElementById('modelo').value;
    var modeloCarS = modeloCar.replace(/ /g, "");
    var markCar = document.getElementById('mark').value;
    var markCarS = markCar.replace(/ /g, "");
    var typeCar = document.getElementById('type').value;
    var typeCarS = typeCar.replace(/ /g, "");

    let urlAddEdit = edit === false ? 'carAdd.php' : 'carEdit.php';

    if (modeloCarS == "") {
        alert("El modelo del registro esta vacio")
    }
    else if (markCarS == "") {
        alert("La marca esta vacia")
    }
    else if (typeCarS == "") {
        alert("El tipo esta vacio")
    } else {
        postDate = {
            modelo: modeloCarS,
            ano: document.getElementById('carAno').value,
            marca: markCarS,
            tipo: typeCarS,
            imagen: document.getElementById('image').value,
            descripcion: document.getElementById('description').value,
            id: document.getElementById('carId').value
        }
        console.log(postDate)

        const xhr = new XMLHttpRequest();
        const url = urlAddEdit;
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        console.log(url)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    fetchCar();
                    document.getElementById('modelo').value = "";
                    document.getElementById('carAno').value = "";
                    document.getElementById('mark').value = "";
                    document.getElementById('type').value = "";
                    document.getElementById('image').value = "";
                    document.getElementById('description').value = "";
                } else {
                    console.error('Hubo un error en la solicitud:', xhr.status);
                }
            }
        };
        xhr.send(JSON.stringify(postDate));
        edit = false;
    }
});

function fetchCar() {
    const carList = new XMLHttpRequest();
    const url = 'carList.php';
    carList.open('GET', url, true);
    carList.onreadystatechange = function () {
        if (carList.readyState === XMLHttpRequest.DONE) {
            if (carList.status === 200) {
                let carListBody = JSON.parse(carList.response);
                let template = '';

                carListBody.forEach(carListBody => {
                    template += `<tr>
                    <td>${carListBody.id}</td>
                    
                    <td>${carListBody.modelo}</td>
                    <td>${carListBody.ano}</td>
                    <td>${carListBody.marca}</td>
                    <td>${carListBody.tipo}</td>
                    <td> <img width="300px" src="${carListBody.imagen}" alt="Car"> </td>
                    <td>${carListBody.descripcion}</td>
                    <td>
                    <button class="btn btn-danger" onclick="prueba(${carListBody.id})">
                    Eliminar
                   </button>
                   <button class="btn btn-warning" onclick="clickCar(${carListBody.id})">
                    Editar
                   </button>
                    </td>
                    </tr>`
                });
                document.querySelector('#carBody').innerHTML = template;
            } else {
                console.error('Hubo un error en la solicitud:', carList.status);
            }
        }
    };
    carList.send();
};

function prueba(id) {
    if (confirm("Estas seguro que quieres eliminar la tarea?")) {
        $.post('carDelete.php', { id }, function () {
            fetchCar()
        });
    };
};

//Funcion para darle al nombre y modificar

function clickCar(id) {
    let element = id;
    $.post('carSingle.php', { element }, function (response) {
        const car = JSON.parse(response);
        document.getElementById('modelo').value = `${car.modelo}`;
        document.getElementById('carAno').value = `${car.ano}`;
        document.getElementById('mark').value = `${car.marca}`;
        document.getElementById('type').value = `${car.tipo}`;
        document.getElementById('image').value = `${car.imagen}`;
        document.getElementById('description').value = `${car.descripcion}`;
        document.getElementById('carId').value = `${car.id}`;
        edit = true;
    });
}