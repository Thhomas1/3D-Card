// animacion para que pase

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// declaramos los const elementos para luego animarlos uwu

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");



// animacion para que evente (evento ahora) 19:52

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25; // efecto mas fuerte o mas tranqui
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; // cambiamos los rotate para hacer el cursor modo manejo de avion como en  lo jueguito'
});

// Animacion de dentro
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    // animacion popout
   title.style.transform = "translateZ(150px)";
   sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
   description.style.transform = "translateZ(125px)";
   sizes.style.transform = "translateZ(100px)";
   purchase.style.transform = "translateZ(75px)";


});
// Animacion de fora para que no siga animando al dope
container.addEventListener("mouseleave", (e) => { 
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 

      // animacion popback pa q vuelva a la normalida'
      title.style.transform = "translateZ(0px)";
      sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
      description.style.transform = "translateZ(0px)";
      sizes.style.transform = "translateZ(0px)";
      purchase.style.transform = "translateZ(0px)";
});