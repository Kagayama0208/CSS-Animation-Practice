// Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Movement Animation to happen

// Items
const title = document.querySelector(".title");
const cat = document.querySelector(".cat img");
const colors = document.querySelector(".colors");
const cute = document.querySelector(".cute button");
const description = document.querySelector(".description");
const circle = document.querySelector(".circle");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //   Popout
  title.style.transform = "translateZ(130px)";
  description.style.transform = "translateZ(130px)";
  cat.style.transform = "translateZ(170px)";
  cute.style.transform = "translateZ(170px)";
  colors.style.transform = "translateZ(170px)";
  circle.style.transform = "scale(1.4)"
});
// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = `all 0.5s ease`;
  description.style.transition = `all 0.5s ease`;
  cat.style.transition = `all 0.5s ease`;
  cute.style.transition = `all 0.5s ease`;
  colors.style.transition = `all 0.5s ease`;
  circle.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  cat.style.transform = "translateZ(0px)";
  cute.style.transform = "translateZ(0px)";
  colors.style.transform = "translateZ(0px)";
  circle.style.transform = "scale(1)"
});
