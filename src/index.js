import { listAnimals } from "./server.js";

const container = document.getElementById('cards')

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await listAnimals()

    container.innerHTML = ""

    querySnapshot.forEach(doc =>{
        const especie = doc.data()

        console.log(especie.imageUrl)
        console.log(especie.name)
        container.innerHTML += `
        <div class="card " style="width: 18rem;">
        <img class="card-img-top" src="${especie.imageUrl}" alt="Especie en peligro de extincion ${especie.name}">
        <div class="card-body">
          <h5 class="card-title">${especie.name}</h5>
          <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Se encuentra en:</li>
          <p class="card-text">${especie.location}</p>
          <li class="list-group-item">Motivo de extinción</li>
          <p class="card-text">${especie.reason}</p>
        </ul>
      </div>
        `
    })
    
})