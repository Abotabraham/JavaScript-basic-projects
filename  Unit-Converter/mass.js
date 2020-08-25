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

// mass conversion logic and functionality

const kilogram = document.getElementById("kilogram");
const gram = document.getElementById("gram");
const pound = document.getElementById("pound");
const ounce = document.getElementById("ounce");


kilogram.addEventListener("input", function(){
    const kg = Number(kilogram.value);
    gram.value = kg * 1000;
     pound.value = kg * 2.20462;
     ounce.value = kg * 35.274;
})
pound.addEventListener("input", function(){
    const lb = Number(pound.value);
    kilogram.value = lb /2.20462;
     ounce.value = lb * 16;
      gram.value = lb * 453.592;

})
ounce.addEventListener("input", function(){
    const oz = Number(ounce.value);
    kilogram.value = oz / 35.274;
     pound.value = oz / 16;
     gram.value = oz  * 28.3495;
})


gram.addEventListener("input", function(){
    const g = Number(gram.value);
    kilogram.value = g / 1000;
     pound.value = g / 453.592;
     ounce.value = g / 28.3495;
})
