const pets = [
  {
    name: "Charlie🎉",
    type: "Dog🐕",
    age: 1,
    img: "dog.jpg",
    note: "Loves to play fetch and is great with kids."
  },
  {
    name: "Milo💤",
    type: "Cat🐈",
    age: 2,
    img: "cat.jpg",
    note: "Enjoys long naps and head scratches."
  },
  {
    name: "Mr.Corn🌽",
    type: "Dog🐕",
    age: 3,
    img: "image/dogs/dog01.jpeg",
    note: "Very friendly energetic and love corn."
  },
  {
    name: "Whiskers🔪",
    type: "Cat🐈",
    age: 2,
    img: "image/cats/cat01.jpeg",
    note: "Very cute, but might kill you!"
  },
  {
    name: "Mittens🧶",
    type: "Cat🐈",
    age: 2,
    img: "image/cats/cat02.jpeg",
    note: "Loves to play with yarn and chase laser dots."
  },
  {
    name: "Plato🐟",
    type: "Cat🐈",
    age: 1.5,
    img: "image/cats/Mycat.jpg",
    note: "My own cat :)"
  },

  // 🐦 Birds
  {
    name: "Sunny🌞",
    type: "Bird🐦",
    age: 1,
    img: "image/birds/bird01.jpeg",
    note: "Chirps beautifully every morning."
  },
  {
    name: "Sky🌈",
    type: "Bird🐦",
    age: 2,
    img: "image/birds/bird02.jpeg",
    note: "Loves to mimic words and fly in circles."
  },

  // 🦫 Capybaras
  {
    name: "Chillax🛁",
    type: "Capybara🦫",
    age: 4,
    img: "image/capybaras/Capybara01.jpeg",
    note: "So relaxed it lowers your blood pressure."
  },
  {
    name: "Bubble🫧",
    type: "Capybara🦫",
    age: 3,
    img: "image/capybaras/Capybara02.jpeg",
    note: "Likes to soak in warm water and snack."
  }
];


  
function renderPets(filteredPets) {
  const petList = document.getElementById('pet-list');
  petList.innerHTML = ''; // Clear current pets

  filteredPets.forEach(pet => {
    const petItem = document.createElement('div');
    petItem.className = 'pet';
    petItem.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <p><em>${pet.note}</em></p>
      <button onclick="adoptPet()">Adopt Now 🏠</button>
    `;
    petList.appendChild(petItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const petList = document.getElementById('pet-list');
  const filterInputs = document.querySelectorAll('.type-filter');

  function applyFilters() {
    const selectedTypes = Array.from(filterInputs)
      .filter(input => input.checked)
      .map(input => input.value.toLowerCase());

    const filteredPets = selectedTypes.length === 0
      ? pets
      : pets.filter(pet => selectedTypes.includes(pet.type.toLowerCase().replace(/[^a-z]/gi, '')));

    renderPets(filteredPets);
  }

  // Initial render
  renderPets(pets);

  // Attach event listeners to checkboxes
  filterInputs.forEach(input => {
    input.addEventListener('change', applyFilters);
  });
});

  console.log('Pets loaded successfully.');
  