var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, "A","B","C","E", "F"];

var btn = document.querySelector(".btn");
var color = document.querySelector(".color");

btn.addEventListener('click', function(){
var hexColor = "#";
for (var i = 0; i < 6; i++){
  hexColor = hexColor + hexValues[getRandomNumber()];
}
document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
})

function getRandomNumber(){
  return Math.floor(Math.random()*hexValues.length);
}
