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
    note: "Very cute,but might kill you!"
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
  }
];

  
  function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
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
  document.addEventListener('DOMContentLoaded', loadPets);
  console.log('Pets loaded successfully.');
  