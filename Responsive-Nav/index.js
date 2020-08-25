
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


 
