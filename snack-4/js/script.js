//Genera un numero casuale per il pc poi chiedi all’utente di inserire un numero con un prompt infine stampa la somma dei due numeri

// Genera un numero casuale
var numeroCasuale = Math.floor(Math.random() * 100);

// Chiedere all'utente un numero
var numeroUtente = parseInt(prompt("Inserisci un numero"));

// Stampare la somma
if (!isNaN(numeroUtente)) {
  var somma = numeroUtente + numeroCasuale;
  console.log("Il totale è: " + somma);
}
else {
  alert("Non hai inserito un numero")
}
