// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// Chiedo all'utente il primo numero
var primoNumero = parseInt(prompt("Inserisci il primo numero"))

// Chiedo all'utente il secondo primoNumero
var secondoNumero = parseInt(prompt("Inserisci il secondo numero"))

/*  Se primoNumero oppure secondoNumero non è un numero alert errore
    Se primoNumero > secondoNumero stampo primoNumero
    Se secondoNumero > primoNumero stampo secondoNumero
    Altrimenti stampo primoNumero = secondoNumero
*/
if (isNaN(primoNumero) || isNaN(secondoNumero)) {
  alert("Errore: non hai inserito un numero")
} else if (primoNumero > secondoNumero) {
  console.log(primoNumero);
} else if (secondoNumero > primoNumero) {
  console.log(secondoNumero);
} else {
  console.log("I due numeri sono uguali");
}
