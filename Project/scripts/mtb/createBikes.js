const bikes = [
  {
    brand: "Specialized",
    name: `Specialized STUMPJUMPER EVO - 29" Carbon Mountainbike - cast battleship`,
    price: "5.461,34 €",
    image: "../img/mtb/Stumpjumper.jpg",
  },
  {
    brand: "Cannondale",
    name: `Cannondale SCALPEL HT Hi-MOD 1 - 29" Carbon Mountainbike - white`,
    price: "4.200,84 €",
    image: "../img/mtb/Scalpel.jpg",
  },
  {
    brand: "Specialized",
    name: `Specialized S-WORKS EPIC EVO - Carbon 29" Mountainbike - gloss sand`,
    price: "8.823,53 €",
    image: "../img/mtb/EpicEvo.jpg",
  },
  {
    brand: "Giant",
    name: `Giant TRANCE X ADVANCED PRO 1 - 29" Mountainbike - starry night`,
    price: "4.856,30 €",
    image: "../img/mtb/TranceX.jpg",
  },
  {
    brand: "Ghost",
    name: `Ghost Kato FS Universal - Mountainbike - blue green / monarch orange`,
    price: "1.343,70 €",
    image: "../img/mtb/KatoFS.jpg",
  },
  {
    brand: "CUBE",
    name: `CUBE ANALOG - Mountainbike - 2023 - flashgrey / red A00`,
    price: "755,46 €",
    image: "../img/mtb/Analog.jpg",
  },
  {
    brand: "Trek",
    name: `Trek SUPERCALIBER 9.6 SLX/Deore Mountain Bike - Radioactive Red`,
    price: "2.940,34 €",
    image: "../img/mtb/Supercaliber.jpg",
  },
  {
    brand: "Specialized",
    name: `Specialized EPIC HT - 29" Carbon Mountainbike - gloss tarmac black`,
    price: "2.100,00 €",
    image: "../img/mtb/EpicHT.jpg",
  },
  {
    brand: "CUBE",
    name: `CUBE REACTION Pro - Mountainbike - switchblue / black A00`,
    price: "1.595,80 €",
    image: "../img/mtb/Reaction.jpg",
  },
];

for (let i = 0; i < bikes.length; i++) {
  let bikeElement = `
    <div class="card">
      <p class="brand">${bikes[i].brand}</p>
      <img
        src="${bikes[i].image}"
        alt="${bikes[i].name} picture"
        style="width: 100%"
      />
      <p class="price">${bikes[i].price}</p>
      <p>
        ${bikes[i].name}
      </p>
      <p><button onclick="alert('Product added to cart!')">Add to Cart</button></p>
    </div>`;
  createBikes();
  function createBikes() {
    document
      .getElementById("container")
      .insertAdjacentHTML("beforeend", bikeElement);
  }
}
