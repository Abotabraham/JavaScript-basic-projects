 const randomBtn = document.querySelector(".randombtn");


 randomBtn.addEventListener("click", function(){
   const fromNum = document.querySelector(".fromNum").value;
   const toNum = document.querySelector(".toNum").value;

     let randomNum = Math.floor(Math.random()* Number(toNum));
     if (randomNum >= fromNum){

       const innerRandom = document.querySelector("h2");

       innerRandom.innerHTML = randomNum;

       console.log(randomNum);

     }

 })
