// Mode strict : oblige à déclarer les variables avec let/const/var (vu dans le slide 52)
"use strict";

// Exercice 2 : Tableaux et objets
// Chaque fonction est appelée par un événement onclick placé sur un bouton dans index.html (vu dans les slides 18 et 19)
// Ce script est dans un fichier externe script.js (vu dans le slide 25, Méthode 3)
// Les commentaires utilisent // pour une ligne (vu dans le slide 37)

// f1 : Afficher un tableau d'étudiants
// Ici on déclare une fonction sans paramètres (vu dans le slide 46)
function f1() {
    // Ici on utilise un tableau de chaînes de caractères (vu dans le slide 39)
    // Déclaration d'une variable locale avec let (vu dans le slide 52)
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Ici on utilise une boucle for pour parcourir le tableau (vu dans le slide 45)
    // etudiants.length donne la taille du tableau, i++ incrémente de 1 (vu dans le slide 42)
    for (let i = 0; i < etudiants.length; i++) {
        // Accès à un élément du tableau par son indice (vu dans le slide 39)
        // Affichage dans la console avec console.log() (vu dans le slide 34)
        console.log(etudiants[i]);
    }
}

// f2 : Afficher un objet étudiant
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f2() {
    // Ici on utilise un objet avec des propriétés nom, prenom, age (vu dans le slide 40)
    // Variable locale déclarée avec let (vu dans le slide 52)
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    // Affichage de l'objet dans la console avec console.log() (vu dans les slides 34 et 40)
    console.log(etudiant);
}

// f3 : Afficher un tableau d'objets étudiants
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f3() {
    // Ici on utilise un tableau d'objets (vu dans le slide 41)
    // Variable locale déclarée avec let (vu dans le slide 52)
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Ici on utilise une boucle for pour parcourir le tableau d'objets (vu dans le slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        // Accès aux propriétés d'un objet avec la notation point (vu dans le slide 40)
        // Concaténation de chaînes avec l'opérateur + (affichage élaboré, vu dans le slide 38)
        console.log(
            etudiants[i].nom + "-" +
            etudiants[i].prenom + "-" +
            etudiants[i].age
        );
    }
}