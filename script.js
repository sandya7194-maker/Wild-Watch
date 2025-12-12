const species = [
  {
    name: "Amur Leopard",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Amur_leopard.jpg/640px-Amur_leopard.jpg",
    status: "Critically Endangered"
  },
  {
    name: "African Forest Elephant",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/African_forest_elephant.jpg",
    status: "Endangered"
  },
  {
    name: "Blue Whale",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Blue_Whale.jpg",
    status: "Endangered"
  }
];

const list = document.getElementById("speciesList");

function display(data) {
  list.innerHTML = "";
  data.forEach(s => {
    list.innerHTML += `
      <div class="card">
        <img src="${s.img}" alt="${s.name}">
        <h3>${s.name}</h3>
        <p>Status: ${s.status}</p>
      </div>`;
  });
}

display(species);

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = species.filter(s => 
    s.name.toLowerCase().includes(value)
  );
  display(filtered);
});
