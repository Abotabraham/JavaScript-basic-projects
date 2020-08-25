 // nav bar logic and functionality

var navToggle = document.querySelector(".nav-toggle")

var links = document.querySelector(".links");

var num1 = document.querySelector("num1");



navToggle.addEventListener("click", function (){
  // console.log(links.classList.contains("show-links"));
   if (links.classList.contains("show-links")){
     links.classList.remove("show-links");
   } else{
     links.classList.add("show-links");
   }
})


/* Temperature conversion logic and funtionality */

const celsius = document.getElementById("celsius");
const frah = document.getElementById("frahrenheit");
const kel = document.getElementById("kelvin");


celsius.addEventListener("input", celsiusTofrahneitTokelvin);

function celsiusTofrahneitTokelvin() {
  const cel = Number(celsius.value);
  frahrenheit.value = (cel * 9 / 5) + 32;
  kel.value = cel + 273.15;
}


frah.addEventListener("input", frahneitTocelsiusTokelvin);

function frahneitTocelsiusTokelvin() {
  const f1 = Number(frah.value);
  celsius.value = (f1 - 32) * 5 / 9;
  kel.value = (f1 - 32) * 5 / 9 + 273.15;
}


kel.addEventListener("input", kelTocelsiusTofrahneit);

function kelTocelsiusTofrahneit() {
  const k1 = Number(kel.value);
  celsius.value = k1 - 273.15;
  frah.value = (k1 - 273.15) * 5 / 9 + 32;

}
function main() {
  celsiusTofrahneitTokelvin();
  frahneitTocelsiusTokelvin();
  kelTocelsiusTofrahneit();
}

main();
