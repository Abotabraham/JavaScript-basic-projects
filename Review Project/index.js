// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    img:
       "people.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    img:
      "person.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img:
      "person (1).png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "the boss",
    img:
      "user.png",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
   // select the items
var img = document.querySelector(".person-img");
var author = document.querySelector(".author");
var job = document.querySelector( ".job-title");
var text = document.querySelector(".info");

// select the prev and next button

var nextBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");
var btnRandom = document.querySelector(".btn-random");


// select item from the array of objects
var currentItem = 0;


window.addEventListener("DOMContentLoaded", function(){
  getPerson(currentItem);
})
// select person function
function getPerson (currentItem){
  var item = reviews[currentItem];
  author.textContent = item.name;
  img.src = item.img;
  job.textContent = item.job;
  text.textContent = item.text;
}
// next button

nextBtn.addEventListener("click", function(){
  currentItem++;

  if (currentItem > reviews.length-1){
    currentItem = 0;
    getPerson(currentItem);

  }
getPerson(currentItem);

})
// prev button

prevBtn.addEventListener("click", function(){
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length-1;
    getPerson(currentItem);
  }
  getPerson(currentItem);
})

// generate random // REVIEW:

function randomNum(){
  return Math.floor(Math.random()*reviews.length);;
}


 btnRandom.addEventListener("click", function(){
   getPerson(randomNum());

 })
