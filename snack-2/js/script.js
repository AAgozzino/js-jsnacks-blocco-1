// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente la primaParola
var primaParola = prompt("Inserisci la prima parola");

// Chiedo all'utente la secondaParola
var secondaParola = prompt("Inserisci la seconda parola");

/*  Se primaParola < secondaParola stampo primaParola + secondaParola
    Se secondaParola < primaParola stampo secondaParola + primaParola
    Altrimenti stampo primaParola = secondaParola
*/
if (!isNaN(primaParola) || !isNaN(secondaParola) || primaParola === null || secondaParola === null || primaParola === "" || secondaParola === "") {
  alert("Errore: inserisci parole");
} else if (primaParola.length < secondaParola.length) {
  console.log(primaParola + " " + secondaParola);
} else if (secondaParola.length < primaParola.length) {
  console.log(secondaParola + " " + primaParola);
}else {
  console.log(primaParola + "=" + secondaParola);
}
