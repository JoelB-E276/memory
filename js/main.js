// Change card1  test 
// fonction test pour clic sur card1

/* document.getElementById("card1").addEventListener("click", function changeaCard() {
document.getElementById("card1").style.backgroundColor = "black";
}); */


//




// random color 
/* function getRandomColor(color) {
    var colors = ["red","red","black","black","yellow","yellow","blueviolet","blueviolet","aqua","aqua", "coral", "coral","gray","gray"]
    var cardsColor = [];
    for (var i = 0; i < colors.length; i++) {
  //  cardsColor+= colors[Math.floor(Math.random() * colors.length)]; 
    var test = colors[Math.floor(Math.random() * colors.length)];
    //console.log(test);

cardsColor.push(test);
//console.log(test);


    [i].push[cardsColor]

    allcard = test;
    // cardsColor[i].allcar

    //  console.log(cardsColor);
    }
    return test
  } ;
  console.log(test);
 // getRandomColor();
let choiceColor = getRandomColor (); */


var colors = ["red","red","black","black","blueviolet","blueviolet","aqua","aqua", "coral", "coral","gray","gray"];
var cardsColor = [];
let allcard = document.getElementsByClassName("card");
console.log(allcard);
for (let i = 0; i < colors.length; i++){

    allcard[i].onclick = function(){
       // alert("coucou");
     this.style.backgroundColor = colors[i];
        
  }
}


