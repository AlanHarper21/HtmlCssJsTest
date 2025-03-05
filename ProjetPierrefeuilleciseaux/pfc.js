'use strict';

/// Fonction pierre feuille ciseau win lose ////
function pierreFeuilleCiseaux (choix1, choix2) {
    if (choix1 == 'ciseaux' && choix2 == 'feuille') {
        return "Ciseaux remporte la partie";
    }
    else if (choix1 == 'ciseaux' && choix2 == 'pierre') {
        return "Pierre remporte la partie";
    }
    else if (choix1 == 'feuille' && choix2 == 'ciseaux') {
        return 'Ciseaux remporte la partie';
    }
    else if (choix1 == 'feuille' && choix2 == 'pierre') {
        return 'feuille remporte la partie';
    }
    else if (choix1 == 'pierre' && choix2 == 'ciseaux') {
        return 'Pierre remporte la partie';
    }
    else if (choix1 == 'pierre' && choix2 == 'feuille') {
        return 'feuille remporte la partie';
    }
    else if (choix1 == choix2) {
        return 'égalite à refaire !';
    }
}


//var test = pierreFeuilleCiseaux('ciseaux', 'feuille');
//// console.log(test)

///// Déroulement partie Choix ordinateur + reaction fonction du choix utilisateur  /// 

var choixPossible = ["ciseaux", "feuille", "pierre"];
var indexChoix =  Math.floor(Math.random() * choixPossible.length);
var choixOrdi = choixPossible[indexChoix];
alert("((TESTMODE)) // L'ordinateur a choisi >> " + choixOrdi);
////console.log(choixOrdi);

var choixUtilisateur;
var resultat;

function foncPierre() {
    choixUtilisateur = "pierre";
    resultat = pierreFeuilleCiseaux(choixOrdi, choixUtilisateur);
    alert(resultat);
}

//test getElementById 
document.getElementById('feuille').onclick = function foncFeuille() {
    choixUtilisateur = "feuille";
    resultat = pierreFeuilleCiseaux(choixOrdi, choixUtilisateur);
    alert(resultat);
  };

  function foncCiseaux() {
    choixUtilisateur = "ciseaux";
    resultat = pierreFeuilleCiseaux(choixOrdi, choixUtilisateur);
    alert(resultat);
}
  

// premiere version utilisation prompt
//var choixUtilisateur = prompt('Choisir entre pierre, feuille ou ciseaux.');
//var resultat = pierreFeuilleCiseaux(choixOrdi, choixUtilisateur);
//alert(resultat);


