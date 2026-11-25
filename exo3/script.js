// Mode strict : oblige à déclarer les variables avec let/const/var (vu dans le slide 52)
"use strict";

// Exercice 3 : Délibération
// La fonction A est appelée par un événement onclick placé sur le bouton dans index.html (vu dans les slides 18 et 19)
// Ce script est dans un fichier externe script.js (vu dans le slide 25, Méthode 3)
// Les commentaires utilisent // pour une ligne (vu dans le slide 37)

// Fonction B : vérifie si la note est supérieure ou égale à 10
// Ici on déclare une fonction avec un paramètre et un retour (vu dans le slide 46)
function B(note) {
    // Opérateur relationnel >= qui donne un booléen true/false (vu dans le slide 42)
    // Le type booléen est un type primitif (vu dans le slide 38)
    return note >= 10;
}

// Fonction A : parcourt les étudiants et affiche leur résultat
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function A() {
    // Ici on utilise un tableau de tableaux : chaque ligne contient les données d'un étudiant (vu dans le slide 39)
    // Variable locale déclarée avec let (vu dans le slide 52)
    let Students = [
        [1000, "JOHN", "DOE", 14, 5],
        [2000, "BOB", "CARLTON", 7, 1],
        [3000, "RAYANE", "SMITH", 13, 3]
    ];

    // Ici on utilise une boucle for pour parcourir les étudiants (vu dans le slide 45)
    for (let i = 0; i < Students.length; i++) {
        // Ici on utilise une condition if...else (vu dans le slide 43)
        // Appel de la fonction B avec la note (indice 3) en paramètre (vu dans le slide 46)
        // Accès à un élément du tableau par son indice (vu dans le slide 39)
        if (B(Students[i][3])) {
            // Affichage dans la console avec console.log() (vu dans le slide 34)
            // Concaténation avec l'opérateur + (vu dans le slide 38)
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}