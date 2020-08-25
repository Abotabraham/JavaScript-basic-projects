
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



//Length conversion logic and functionality

// select units

     const kilo = document.getElementById("kilometer");
     const mile = document.getElementById("mile");
     const yard = document.getElementById("yard");
     const foot = document.getElementById("foot");
     const inch = document.getElementById("inch");
     const meter = document.getElementById("meter");


     kilo.addEventListener("input", function(){
         const ki = Number(kilo.value);
          mile.value = ki / 1.60934;
          meter.value = ki * 1000;
          yard.value = ki * 1093.61;
          foot.value = ki * 3280.84;
          inch.value = ki * 39370.1;

     })
     mile.addEventListener("input", function(){
         const mi = Number(mile.value);
          kilo.value = mi * 1.60934;
          meter.value = mi * 1609.34;
          yard.value = mi * 1760;
          foot.value = mi * 5280;
          inch.value = mi * 63360;
     })
     meter.addEventListener("input", function(){
         const m = Number(meter.value);
          kilo.value = m * 1000;
          mile.value = m / 1609.34;
          yard.value = m * 1.09361;
          foot.value = m * 3.28084;
          inch.value = m * 39.3701;
     })
     yard.addEventListener("input", function(){
         const ya = Number(yard.value);
          kilo.value = ya / 1093.61;
          mile.value = ya / 1760;
          meter.value = ya / 1.09361;
          foot.value = ya * 3;
          inch.value = ya * 36;
     })
     foot.addEventListener("input", function(){
         const ft = Number(foot.value);
          kilo.value = ft / 3280.84;
          mile.value = ft / 5280;
          meter.value = ft / 3.28084;
          yard.value = ft / 3;
          inch.value = ft * 12;
     })
     inch.addEventListener("input", function(){
         const inc = Number(inch.value);
          kilo.value = inc / 39370.1;
          mile.value = inc / 63360;
          meter.value = inc / 39.3701;
          yard.value = inc / 36;
          foot.value = inc / 12;
     })
