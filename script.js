// Initialisation du score à 0
let score = 0
let nbMots
let choixUtilisateur

// fonction pour choisir les mots ou les phrases
function choisirPhrasesOuMots() {
    choixUtilisateur = prompt("Voulez vous des 'mots' ou des 'phrases' ?")
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    // si l'utilisateur ne donne pas le choix mots ou phrases alors on repose la question
    choixUtilisateur = prompt("Désolé, je n'ai pas compris. Voulez vous des 'mots' ou des 'phrases' ?")
    }
}

function lancerBoucleDeJeu(choixUtilisateur) {
    if (choixUtilisateur === "mots") {
        nbMots = listeMots.length
        for (let i = 0; i < listeMots.length; i++ ) {
            let motUtilisateur = prompt("entre une le mot : " + listeMots[i])
            if (motUtilisateur === listeMots[i]) {
            score++ }
            }
    }
    else {
        //Si l'utilisateur choisi des phrases
        if (choixUtilisateur === "phrases") {
            nbMots = listePhrases.length
            for (let i = 0; i < listePhrases.length; i++ ) {
                let motUtilisateur = prompt("entre une le mot : " + listePhrases[i])
                if (motUtilisateur === listePhrases[i]) {
                score++ }
                }
        }
    }
}

function afficherResultat (score, nbMots) {
    let résultat = "Votre score est de " + score + " sur " + nbMots
    return résultat
}

function lancerJeu() {
    choisirPhrasesOuMots()
    lancerBoucleDeJeu(choixUtilisateur)
}

lancerJeu()
let scoreFinal = afficherResultat(score, nbMots)
console.log(scoreFinal)


// restitution du score
// console.log("Score : " + score)