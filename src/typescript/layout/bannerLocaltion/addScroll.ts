const allLocationCard: HTMLElement =
  document.querySelector(".all-location-card");
const locationsCards = document.querySelector(".locations-card");

const izquiera = document.querySelector("#left");
const derecha = document.querySelector("#right");

console.log(allLocationCard);

izquiera.addEventListener("click", () => {
  allLocationCard.scrollLeft += 300;
});

derecha.addEventListener("click", () => {
  allLocationCard.scrollLeft -= 300;
});
