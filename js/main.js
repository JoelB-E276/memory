

var colors = ["chocolate", "chocolate", "brown", "brown", "blueviolet", "blueviolet", "aqua", "aqua", "coral", "coral", "gray", "gray"];
var cardsColor = [];
let allcards = document.getElementsByClassName("card");
console.log(allcards)
let stockcards = [];
let cardschoice = [];
var cardsId = [];




for (let i = 0; i <allcards.length; i++) {
allcards[i].addEventListener("click", function(){
  cardsId.push(this.id);
  console.log(cardsId);
  if (cardsId.length == 2){
    for (let i = 0; i < cardsId.length; i++) {
        cardsId[i].onclick = function()  {
            this.style.backgroundColor = "red";
            alert("loop")
        }

    


  //   for (i = 0; i < cardsId.length; i++) {
  //    cardsId.item(i).style.backgroundColor = "red";
  //  } 
    console.log(cardsId[0]);

    // cardsId[0].style.backgroundColor="red"
    
    let allcards = document.getElementsByClassName("card");
    // cc.style.backgroundColor = "red";
  
    }
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
  stockcards=[];

   console.log(cardsId);
};

  }}

}






  // ----  récupérer deuxème click sur card puis les retouner
  // ----  settimeout pour afficher les deux cartes même tps avant qu'elle ne retournent
  // ----  Bloquer les clics supplémentaires

///////// div.classList.replace pour remplacer une class 
///////// shuffle pour mélanger un tableau 
///////// removeEventListener() pour supprimer un événement
/*  var list = document.querySelectorAll( 'input[type=checkbox]' );
for (var item of list) {
  item.checked = true;
}

var allcards = document.querySelectorAll("card");
for (var card of allcards) {
  allcards.onclick = function() {
    console.log(this.style.backgroundColor.value) 
  }
}  */


//console.log(cardschoice);

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
let choiceColor = getRandomColor ();
}*/