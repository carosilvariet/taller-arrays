const URL = "data.json";
const listContainer = document.getElementById("list");

function showData(data) {
  let htmlContentToAppend = "";

  for (const pepe of data) {
    htmlContentToAppend += `<li>${pepe.title}</li>`;
  }

  listContainer.innerHTML = htmlContentToAppend;
}

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    // Filtrar elementos con precio menor a 100
    const filteredData = data.filter(element => element.price < 100);

    // Ordenar elementos por precio de mayor a menor
    filteredData.sort((a, b) => b.price - a.price);

    showData(filteredData);
  } catch (error) {
    alert("¡Hubo un error al cargar los datos!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});