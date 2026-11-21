
"use strict";

// Fonction B : vérifie si la note est supérieure ou égale à 10
// Concept : fonction avec paramètre et valeur de retour booléenne
function B(note) {
    return note >= 10;
}

// Fonction A : parcourt les étudiants et affiche leur résultat
// Concept : tableau, boucle et appel de fonction
function A() {
    let Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

    for (let i = 0; i < Students.length; i++) {
        if (B(Students[i][3])) {
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}
