var colorPallet = ["black", "silver", "purple", "cyan","lightseagreen", "orchid", "#663399"];
  //selecting the DOM ELEMENT
var colorDisplay = document.querySelector(".btn");
var colorInnerText = document.querySelector(".color");


 // Adding the event list the selected object

colorDisplay.addEventListener('click', function(){
  // generating random numbers to random colors from the array

  var randomNumber = getRandomNumber();
  
  document.body.style.backgroundColor = colorPallet[randomNumber];

  colorInnerText.textContent = colorPallet[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random()*colorPallet.length);
}
