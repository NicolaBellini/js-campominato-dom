CAMPO MINATO
===
## description

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
**spunti**
- i quadrati dovranno avere una dimensione del 10% sia in altezza che in larghezza, in modo da avere 10 quadrati per linea e per colonna, oppure usare heigth: calc(100% / 10)

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
**spunti**
- usare width e heigth: calc(100% / 9)

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
- usare width e heigth: calc(100% / 7)

## svolgimento



1. inizio con il creare un contenitore nel quale poi saranno geenrati i miei quadrati 


2. creo l elemento square, con una funzione printSquare()

3. gli do una classe square in modo da renderlo visibile in pagina 
con classList.add o className

4. gli associo un numero(l indice i che ho usato per generarli potrebbe andare bene) e glielo stampo dentro in modo da renderlo visibile in pagina

5. aggiungo un addeventlistener "click" al quadrato

**funzione** toggleClicked()
 cliccando sopra il quadrato con il toggle la classe .clicked, la quale gli farà cambiare colore, verrà messa o tolta. 

**funzione** toggleNumber()
oltre alla classe .clicked dovrò agiungere il numero, questo lo posso fare controllando se il mio square ha la classe .clicked. se non ce l ha il numero sarà sostituito da un astringa vuota. sempre da mettere dentro al click

<!-- parte per fare il gioco -->

play()
-leggo il livello selezionato(il numero di celle è un elemento globale)
-reset
-genero il playground
-genero le bombe


click della cella()
-verifico se è una bomba(vedo se l id della cella cliccata è presente nell array delle bomve)
-se è una bombaSI = finegioco()
NO = coloro la cella, incremento il contatore se non è stata già cliccata,
  verifico se il contatoree è inferiore a numerototale celle-arraybombs-SI=fine gioco()

reset() va fatto all inizio 
-cancella la griglia
-azzero il contatore (elemento globale)
-svuoto l array delle bombe


finegioco()
-accendere tutte le celle
-accendere tutte le bombe, aggiungendo la classe bomba a tutti gli elementi presenti nell arraybombs
-congelo la griglia forse rimuovendo l eventlistener al click della cella
-stampo il messaggio finale con punteggio = a contatore, messaggio diverso se vince o perde.


