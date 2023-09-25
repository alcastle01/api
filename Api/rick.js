
const apiRick = async (pagina)=>{
  let url="https://rickandmortyapi.com/api/character/?page="+pagina;
  const api = await fetch(url);
  const data =await api.json();
  console.log(data);
  divRes = document.querySelector("#resultado");
  divRes.innerHTML=""
  data.results.map(item=>{
    divItem = document.createElement('div')
    divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.status}</p>
                <p class="card-text">${item.species}</p>
                <p class="card-text">${item.gender}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    divRes.appendChild(divItem);

    
  });

}
async function crearTarjeta() {
  try {
    const nuevaTarjeta = {
      name: 'Nuevo Personaje',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    };

    const response = await fetch('https://rickandmortyapi.com/api/character', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaTarjeta),
    });

    if (response.status === 201) {
      console.log('Nueva tarjeta creada con éxito.');
      // Puedes agregar aquí código para actualizar la vista con la nueva tarjeta si es necesario
    } else {
      console.error('Error al crear la tarjeta.');
    }
  } catch (error) {
    console.error('Error en la solicitud: ', error);
  }
}

async function editarTarjeta() {
try {
  const tarjetaId = 1; // Cambia esto por el ID de la tarjeta que deseas editar
  const tarjetaEditada = {
    name: 'Nuevo Nombre', // Cambia esto por el nuevo nombre
    status: 'Dead', // Cambia esto por el nuevo estado
  };

  const response = await fetch(`https://rickandmortyapi.com/api/character/${tarjetaId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarjetaEditada),
  });

  if (response.status === 200) {
    console.log('Tarjeta editada con éxito.');
    // Actualizar la vista con la tarjeta editada si es necesario
  } else {
    console.error('Error al editar la tarjeta.');
  }
} catch (error) {
  console.error('Error en la solicitud: ', error);
}
}
async function eliminarTarjeta() {
try {
  const tarjetaId = 1; // Cambia esto por el ID de la tarjeta que deseas eliminar

  const response = await fetch(`https://rickandmortyapi.com/api/character/${tarjetaId}`, {
    method: 'DELETE',
  });

  if (response.status === 204) {
    console.log('Tarjeta eliminada con éxito.');
    // Eliminar la tarjeta de la vista si es necesario
  } else {
    console.error('Error al eliminar la tarjeta.');
  }
} catch (error) {
  console.error('Error en la solicitud: ', error);
}
}
async function buscarTarjeta() {
try {
  const tarjetaId = 1; // Cambia esto por el ID de la tarjeta que deseas buscar

  const response = await fetch(`https://rickandmortyapi.com/api/character/${tarjetaId}`);

  if (response.status === 200) {
    const tarjeta = await response.json();
    console.log('Tarjeta encontrada: ', tarjeta);
    // Actualizar la vista con la tarjeta encontrada si es necesario
  } else {
    console.error('Tarjeta no encontrada.');
  }
} catch (error) {
  console.error('Error en la solicitud: ', error);
}
}

apiRick(1)
