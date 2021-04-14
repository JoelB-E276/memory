// Change card1  test 
document.getElementById("card1").addEventListener("click", function changeaCard() {
document.getElementById("card1").style.backgroundColor = "black";
}); 

// random color 
var colors = ["red","red","black","black","yellow","yellow","blueviolet","blueviolet","aqua","aqua", "coral", "coral","gray","gray"]
    var cardsColor = [];
function getRandomColor(color) {
    
    for (var i = 0; i < colors.length; i++) {
    cardsColor+= colors[Math.floor(Math.random() * colors.length)]; 
   ////////////////////////////////////////
   ///////////////////////////////////////
   ////////////////////////////////////////
   ////////////////////////////////////////

     ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////
      ////// P U L L //////////////  ////// P U L L //////////



      
      //[i].push[cardsColor]
      cardsColor.push(colors);
      console.log(cardsColor);
      console.log(colors);
    }
    return cardsColor
  } ;
  getRandomColor();
let choiceColor = getRandomColor (color);

let allcard=document.querySelectorAll("card");

function assemble (cardsColor,allcard){
  for (allcard = 0; allcard < cardsColor.length; i++)
  allcard.push(cardsColor)
  console.log(allcard);
}

