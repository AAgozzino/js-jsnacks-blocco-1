//genera un numero casuale e poi stampalo se è pari nel box rosso altrimenti in nel box verde

// Generare un unmero casuale
var numero = Math.floor(Math.random() * 100);

/*  Se è pari stampa .red
    Se dispari stampa .green
*/
if (numero % 2 == 0) {
  document.getElementById('numero-pari').innerHTML = numero;
  console.log(numero);
}
else {
  document.getElementById('numero-dispari').innerHTML = numero;
  console.log(numero);
}
