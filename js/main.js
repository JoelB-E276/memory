

var cardsColor = ["chocolate", "chocolate", "brown", "brown", "blueviolet", "blueviolet", "aqua", "aqua", "coral", "coral", "gray", "gray"];
let stockcards = [];
var cardsId = [];
let allcards = document.getElementsByClassName("card");

for (let i = 0; i < allcards.length; i++) {
  allcards[i].addEventListener("click", cardsChoice)
}
 
function cardsChoice() {
  if (stockcards.length < 2) {
    stockcards.push(this.id);
    this.style.backgroundColor = cardsColor[this.id.substring(4)-1];
    console.log(stockcards);
  }
  if (stockcards.length == 2) {
    let card1 = document.getElementById(stockcards[0]);
    let card2 = document.getElementById(stockcards[1]);

    color1 = cardsColor[stockcards[0].substring(4)-1];
    color2 = cardsColor[stockcards[1].substring(4)-1];
    
      if (color1 !== color2) {
      color1 = "black";
      color2 = "black";
    }
    setTimeout(function () {
      card1.style.backgroundColor = color1;
      card2.style.backgroundColor = color2;
      stockcards = [];
    }, 1000)
  }
}







/* for (let i = 0; i < allcards.length; i++) {
  allcards[i].addEventListener("click", function () {
    cardsId.push(this.id);
    console.log(cardsId);
    if (cardsId.length == 2) {
      for (let i = 0; i < cardsId.length; i++) {
        cardsId[i].onclick = function () {
          this.style.backgroundColor = "red";
          alert("loop")
        }
      }
    }

  })
};

for (let i = 0; i < colors.length; i++) {
  allcards[i].onclick = function () {

    console.log(cardsId);

    //alert("coucou");
    this.style.backgroundColor = colors[i];
    stockcards.push(this.style.backgroundColor);
    console.log(stockcards);


    if (stockcards.length == 2 && stockcards[0] != stockcards[1]) {
      alert("2")
      console.log(cardsId);
      setTimeout
      stockcards = [];

      console.log(cardsId);
    }
  }
} 

 if (stockcards.length == 2 && stockcards[0] == stockcards[1]){
  style.display = "block";
  stockcards=[];*/
  

