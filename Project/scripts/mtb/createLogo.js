const brandLogos = [
  {
    brand: "Specialized",
    image: "../img/mtb/Specialized.png",
  },
  {
    brand: "Cannondale",
    image: "../img/mtb/Cannondale.png",
  },
  {
    brand: "Giant",
    image: "../img/mtb/Giant.png",
  },
  {
    brand: "Ghost",
    image: "../img/mtb/Ghost.png",
  },
  {
    brand: "CUBE",
    image: "../img/mtb/Cube.png",
  },
  {
    brand: "Trek",
    image: "../img/mtb/Trek.png",
  },
];

for (let i = 0; i <= brandLogos.length; i++) {
  let logoElement = `
    <li>
      <img  src="${brandLogos[i].image}" alt="${brandLogos[i].brand} logo" />
    </li>`;
  createLogos();
  function createLogos() {
    document
      .getElementById("brandLogos")
      .insertAdjacentHTML("beforeend", logoElement);
  }
}
