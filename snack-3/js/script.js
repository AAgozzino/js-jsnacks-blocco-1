// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// Chiedere all'utente di inserire un numero
var numero = parseInt(prompt("Inserisci un numero"));

/*  Se numero % 2 == 0 stampo numero
    Altrimenti stampo (numero + 1)
*/
if (isNaN(numero) || numero === null || numero === "") {
  alert("Errore: inserisci un numero")
}
else if (numero % 2 == 0) {
  console.log(numero);
}else {
  console.log(numero + 1);
}
