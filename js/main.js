

var colors = ["red","red","black","black","blueviolet","blueviolet","aqua","aqua", "coral", "coral","gray","gray"];
var cardsColor = [];
let allcards = document.getElementsByClassName("card");
let stockcards=[];
let cardschoice=[];
//console.log(allcards);

/* var list = document.querySelectorAll( 'input[type=checkbox]' );
for (var item of list) {
  item.checked = true;
}

var allcards = document.querySelectorAll("card");
for (var card of allcards) {
  allcards.onclick = function() {
    console.log(this.style.backgroundColor.value) 
  }
} */
for (let i = 0; i < colors.length; i++){

    allcards[i].onclick = function(){
       //alert("coucou");
     this.style.backgroundColor = colors[i];
     stockcards.push(this.style.backgroundColor);
     console.log(stockcards);
 if(stockcards.length == 2 && stockcards[0] != stockcards[1]){
 alert("2")
 //setTimeout(function(){.style.backgroundColor ="black"; }, 1000);
    
     console.log(stockcards);
  }
}
}
function cptCards() {
    alert ("ok");
} 
  



//console.log(cardschoice);
  


/////////// removeEventListener() pour supprimer un événement







/* allcards.addEventListener("click", function changeaCard() {
 console.log(this.style.backgroundColor.value) 
  }); */



    


/* if (card.style.backgroundColor.value != card.value.backgroundColor.value){
  setTimeout(function(){ this.style.backgroundColor = "white"; alert("couleur diff"); }, 3000);

} */
















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
function getRandomColor(color) {
    
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