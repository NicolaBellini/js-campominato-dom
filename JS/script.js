const canva = document.querySelector(".canva")
let selectInput = document.querySelector(".my-select").value

const btnStart = document.querySelector(".btn1")
const btnReset = document.querySelector(".btn2")
// faccio il reset della mia tela eliminando qualsiasi cosa abbia messo nell html
// reset();




// Aggiorna il valore di selectInput quando viene selezionata una nuova opzione, quando l'utente seleziona un'opzione differente nel menu a discesa, l'evento change verrà attivato. 
document.querySelector(".my-select").addEventListener("change", function(){
  selectInput = this.value;
});


// Aggiunge un listener al pulsante btnStart per generare i quadrati
btnStart.addEventListener("click", function() {
  reset();
  getHundredSq();
});

// Aggiunge un listener al pulsante btnReset per resettare la tela
btnReset.addEventListener("click", reset);

// Inizializza l'applicazione
reset();
getHundredSq();


// functions/////

// funzione per creare 100 quadrati e stamparli in pagina dentro a canva
function getHundredSq(){
  for(let i = 1; i <= setlimit(); i++){
    const square = square100(i)

    canva.append(square);
  }
}
// funzione per generare i quadrati all interno della canva, e al click applica la classe .clicked, in più aggiungendo una costante(squareText) scrivendola nel sq.
function square100(indice){


  const sq = document.createElement("div");
  sq.className= setHowManySquare();

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
    sq.classList.toggle("clicked")

    // usando un fattore ternario applico un blocco if
    this.innerHTML = (this.classList.contains("clicked"))?
                    this.innerhtml = squareText:
                    this.innerHTML = ""                  

    console.log(squareText);

    
  })
//  return sq molto importante alrimenti non sa cosa deve ritornare
  return sq
}



// se lka difficoltà è easy metto la classe 100, medium metto 81 quadrati e se è hard 49, gestendoli con le classi css
function setHowManySquare(){
  let setteddifficult = "";

  if(selectInput == "Noob"){
    return setteddifficult = "square100"
  }else if(selectInput == "Normal"){
    return setteddifficult = "square81";
  }else if(selectInput == "Master"){
    return setteddifficult = "square49";
  }

  return setteddifficult = "square100"

}

// in base alla difficoltà impostata con la select mette un limite numerico al quale i dovrà essere <=
function setlimit(){
  let limit = "";

  if(selectInput == "Noob"){
    return limit = 100;
  }else if(selectInput == "Normal"){
    return limit = 81;
  }else if(selectInput == "Master"){
    return limit = 49;
  }

  return limit = 100

}



function init(){
  reset();
  getHundredSq()
  square100()
}


// funzione per resettare la tela
function reset(){
  canva.innerHTML = ""
}