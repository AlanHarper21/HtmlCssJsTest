"use strict";

// Écrire un programme qui affiche les nombres de 1 à 199 (compris) dans la console. (Version MOI)
for (var leNombre = 1; leNombre < 200; leNombre++) {

    if (leNombre % 3 == 0) { // Pour les multiples de 3, afficher Fizz au lieu du nombre.
        console.log('Fizz')
    }
      else if (leNombre % 5 == 0) { // Pour les multiples de 5, afficher Buzz au lieu du nombre.
        console.log('Buzz')
      }
      else if (leNombre % 3 == 0 && leNombre % 5 == 0) { // Pour les nombres multiples de 3 et 5, afficher uniquement FizzBuzz.
        console.log ('FizzBuzz')
      }
    else {
    console.log(leNombre); 
    }
}

////////////////////////////////////////////
// version DEVELOPPEZ /////////////////////
function estMultipleDeTrois (nombre) {
  return nombre % 3 === 0 ;
}

function estMultipleDeCinq (nombre) {
  return nombre % 5 === 0 ;
}


for(var i = 1; i < 200; i++) {
  if (estMultipleDeCinq(i) && estMultipleDeTrois(i)) {
    console.log('FizzBuzz');
  } else if (estMultipleDeTrois(i)) {
    console.log('Fizz');
  } else if (estMultipleDeCinq(i)) {
    console.log('Buzz')
  } else {
    console.log(i);
  }
}