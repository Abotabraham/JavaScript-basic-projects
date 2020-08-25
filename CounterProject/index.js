// initial value

var count = 0;

// select value and buttons
var btn1 = document.querySelector(".decrease");
var btn2 = document.querySelector(".reset");
var btn3 = document.querySelector(".increase");

// value selection

var value = document.querySelector(".value");
// decrease buton event listener

btn1.addEventListener('click', function() {

  count--;
  if (count < 0){
       value.style.color = "red";
  }
  value.textContent = count;
})

/// reset button addEventListener

btn2.addEventListener('click', function() {
  count = 0;
  if (count === 0){
    value.style.color = "#000";
  }
  value.textContent = count;
})
// increase button event listener

btn3.addEventListener('click', function() {
  count++;
  if (count > 0) {
    value.style.color = "green";
  }

  value.textContent = count;
})
