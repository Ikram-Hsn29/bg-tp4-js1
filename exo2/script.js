
"use strict";

// f1 : Afficher un tableau d'étudiants
// Concept : tableau et boucle
function f1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// f2 : Afficher un objet étudiant
// Concept : objet et propriétés
function f2() {
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant);
}

// f3 : Afficher un tableau d'objets étudiants
// Concept : tableau d'objets et boucle
function f3() {
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    for (let i = 0; i < etudiants.length; i++) {
        console.log(
            etudiants[i].nom + "-" +
            etudiants[i].prenom + "-" +
            etudiants[i].age
        );
    }
}
