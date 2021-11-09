const container = document.querySelector(".container");
const box = document.querySelector(".box");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageX) / 25;
  box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  box.style.transform = "none";
});

container.addEventListener("mouseleave", (e) => {
  box.style.transform = "all .5s ease";
  box.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
