// fonction pour choisir les mots ou les phrases
function choisirPhrasesOuMots() {
    let choixUtilisateur = prompt("Voulez vous des 'mots' ou des 'phrases' ?")
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    // si l'utilisateur ne donne pas le choix mots ou phrases alors on repose la question
    choixUtilisateur = prompt("Désolé, je n'ai pas compris. Voulez vous des 'mots' ou des 'phrases' ?")
    }
    return choixUtilisateur
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    return score
}

function afficherResultat (score, nbMots) {
    console.log("Votre score est de " + score + " sur " + nbMots)
}

function lancerJeu() {
    let choixUtilisateur = choisirPhrasesOuMots()
    let score = 0
    let nbMots = 0

    if (choixUtilisateur === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMots = listeMots.length
    } 
    else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMots = listePhrases.length
    }
    afficherResultat(score, nbMots)
}