// Mode strict : oblige à déclarer les variables avec let/const/var (vu dans le slide 52)
"use strict";

// Exercice 1 : Définition des six fonctions
// Chaque fonction est appelée par un événement onclick placé sur un bouton dans index.html (vu dans les slides 18 et 19)
// Ce script est dans un fichier externe script.js, chargé avec <script src="..."> (vu dans le slide 25, Méthode 3)
// Les commentaires utilisent // pour une ligne (vu dans le slide 37)

// F1 : Afficher le nom
// Ici on déclare une fonction sans paramètres (vu dans le slide 46)
function f1() {
    // Ici on affiche dans la console avec console.log() (vu dans le slide 34)
    // "John" est une chaîne de caractères, type primitif String (vu dans le slide 38)
    console.log("John");
}

// F2 : Afficher le prénom
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f2() {
    // Affichage dans la console (vu dans le slide 34), chaîne de caractères (vu dans le slide 38)
    console.log("Doe");
}

// F3 : Afficher le nom et le prénom
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f3() {
    // Affichage dans la console (vu dans le slide 34), chaîne de caractères (vu dans le slide 38)
    console.log("John-Doe");
}

// F4 : Afficher l'âge
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f4() {
    // Ici on affiche un nombre : type primitif number (vu dans le slide 38)
    console.log(30);
}

// F5 : Afficher la note
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f5() {
    // Type primitif number (vu dans le slide 38), affichage avec console.log() (vu dans le slide 34)
    console.log(15);
}

// F6 : Afficher la valeur de Pi
// Déclaration d'une fonction sans paramètres (vu dans le slide 46)
function f6() {
    // Nombre réel : type primitif number (vu dans le slide 38)
    console.log(3.14);
}