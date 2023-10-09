// Initialisation du score à 0
let score = 0

// Choix de l'utilisateur des phrases ou des mots
let choixUtilisateur = prompt("Voulez vous des 'mots' ou des 'phrases' ?")
while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    // si l'utilisateur ne donne pas le choix mots ou phrases alors on repose la question
    choixUtilisateur = prompt("Désolé, je n'ai pas compris. Voulez vous des 'mots' ou des 'phrases' ?")
}

//Si l'utilisateur choisi des mots
if (choixUtilisateur === "mots") {
    for (let i = 0; i < listeMots.length; i++ ) {
        let motUtilisateur = prompt("entre une le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
        score++ }
        }
}
else {
    //Si l'utilisateur choisi des phrases
    if (choixUtilisateur === "phrases") {
        for (let i = 0; i < listePhrases.length; i++ ) {
            let motUtilisateur = prompt("entre une le mot : " + listePhrases[i])
            if (motUtilisateur === listePhrases[i]) {
            score++ }
            }
    }
}

// restitution du score
console.log("Score : " + score)