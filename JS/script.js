
// elemets
const canva = document.querySelector(".canva")
const btnStart = document.querySelector(".btn1")
const btnReset = document.querySelector(".btn2")
const output = document.getElementById("output")
let counter= 0;

// DATA
let selectInput = document.querySelector(".my-select").value
// in quest array metto qaunti devono essere i quadrati e la richiamo con il value della select
const sqaurenumber = [100, 81, 49]
// array bombe
const bombs = []

// Aggiorna il valore di selectInput quando viene selezionata una nuova opzione, quando l'utente seleziona un'opzione differente nel menu a discesa, l'evento change verrà attivato. 
document.querySelector(".my-select").addEventListener("change", function(){
  selectInput = this.value;
});


// Aggiunge un listener al pulsante btnStart per generare i quadrati
btnStart.addEventListener("click", function() {
  reset();
  createbombs(limit(), bombs)
  getHundredSq();
  console.log(bombs)
});

// Aggiunge un listener al pulsante btnReset per resettare la tela
btnReset.addEventListener("click", reset);




// functions/////

function init(){
  reset();
  output.innerHTML = ""
  getHundredSq()
  square100()
}


// funzione per resettare la tela
function reset(){
  canva.innerHTML = ""
  bombs.length = 0
  counter = 0
}


// funzione per creare 100 quadrati e stamparli in pagina dentro a canva
function getHundredSq(){
  for(let i = 1; i <= limit(); i++){
    const square = square100(i)

    canva.append(square);
  }
}


// funzione per generare i quadrati all interno della canva, e al click applica la classe .clicked, in più aggiungendo una costante(squareText) scrivendola nel sq., poi controllo quali indici sono dentro la array bombs e quali no, se sono dentro l array bombs gli metto la classe .bomb, se no gli metto la classe clicked
function square100(indice){


  const sq = document.createElement("div");
  sq.className = setHowManySquare();

  // gli do una custom property
  sq._sqID = indice

  // aggiungo il numero nel data attribute
  sq.dataset.sqid = indice

  // aggiungo la funzione che al click mi scive nel quadrato il valore dell' indice
  sq.addEventListener("click", function(){
// do il valore di _sqID ad una costante
    const squareText = this._sqID

//  scrivo dentro al quadrato il valore di _sqID
    this.innerHTML = squareText

    // al click del mouse aggiungo otolgo la classe .clicked, però non ho ancora tolto squaretext messo con il primo click
    // MODIFICATO ho tolto toggle e messo add
    // al click del mouse aggiungo .clicked
    if (!this.classList.contains("clicked")) {
      this.classList.add("clicked");
      counter++;
    } 
    console.log(counter)

    // se l'indice è presente nell'array delle bombe, aggiungo la classe "bomb"
    if (bombs.includes(indice)) {
      this.classList.add("bomb");
      endgame();
    }
  })
  
//  return sq molto importante alrimenti non sa cosa deve ritornare
  return sq
}



// se lka difficoltà è easy metto la classe 100, medium metto 81 quadrati e se è hard 49, gestendoli con le classi css
function setHowManySquare(){
  let setteddifficult = "";

  if(selectInput == "0"){
    return setteddifficult = "square100"
  }else if(selectInput == "1"){
    return setteddifficult = "square81";
  }else if(selectInput == "2"){
    return setteddifficult = "square49";
  }

  return setteddifficult = "square100"

}


// con questa funzione metto un limite al ciclo for per generare un tot di quadrati
function limit(){
  let limit = "";
  limit = sqaurenumber[selectInput]
  return limit
}

// con questa funzione creo 16 bomb con indice casuae e se non sono presenti nell array bombs le pusho dentro
function createbombs(limitSq, bombs) {
  while (bombs.length < 16) {
    let randomIndex = Math.floor(Math.random() * limitSq) + 1;

    if (!bombs.includes(randomIndex)) {
      bombs.push(randomIndex);
    }
  }
}

function endgame() {
  const squares = document.querySelectorAll(".canva > div");
  
  // Aggiungo la classe "endgamecolor" a tutti gli sq
  squares.forEach(square => {
    square.classList.add("endgamecolor");

  });
  // Aggiungo la classe "bomb" agli elementi presenti nell'array bombs
  bombs.forEach(index => {
    const bombElement = document.querySelector(`[data-sqid="${index}"]`);
    bombElement.classList.add("bomb");
    if(!(bombElement.innerHTML="")){
      bombElement.innerHTML += index

    }
  });
  output.innerHTML+=`Hai totalizzato: ${counter} punti`;

  reset()
}




