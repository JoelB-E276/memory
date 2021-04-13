// Change card1  test 
document.getElementById("card1").addEventListener("click", function changeaCard() {
document.getElementById("card1").style.backgroundColor = "black";
}); 

// random color 

function getRandomColor(color) {
    var colors = ["red","red","black","black","yellow","yellow","blueviolet","blueviolet","aqua","aqua", "coral", "coral","gray","gray"]
    var cardsColor = [];
    for (var i = 0; i < colors.length; i++) {
    cardsColor+= colors[Math.floor(Math.random() * colors.length)]; 
   
    [i].push[cardsColor]
      
      console.log(cardsColor);
    }
    return cardsColor
  } ;
  getRandomColor();
let choiceColor = getRandomColor (color);

let allcard=document.querySelectorAll("card");
allcard.color
