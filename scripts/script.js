// fonction pour choisir les mots ou les phrases
/* function choisirPhrasesOuMots() {
    let choixUtilisateur = prompt("Voulez vous des 'mots' ou des 'phrases' ?")
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    // si l'utilisateur ne donne pas le choix mots ou phrases alors on repose la question
    choixUtilisateur = prompt("Désolé, je n'ai pas compris. Voulez vous des 'mots' ou des 'phrases' ?")
    }
    return choixUtilisateur
} */

/* function lancerBoucleDeJeu(listePropositions) {
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
} */

function afficherResultat (score, nbMots) {
    let spanScore = document.querySelector(".zone-score span")
    let affichageScore = `${score} / ${nbMots}`
    spanScore.innerHTML = affichageScore
}

function lancerJeu() {
    let score = 0
    let i = 0
    let btn__valider = document.getElementById("btn__valider")
    let saisiUtilisateur = document.getElementById("reponse")
    let listOptionInput = document.querySelectorAll(".option input")
let listeProposition = listeMots
for (let x = 0; x < listOptionInput.length; x++) {
    listOptionInput[x].addEventListener("change", (event) =>  {
        if (event.target.value === "mots") {
            listeProposition = listeMots
        } else { 
            if (event.target.value === "phrase") {
                listeProposition = listePhrases
            }
        }
        afficherProposition(listeProposition[i])
        if (listeProposition[i] === undefined) {
            let div__zonetxt = document.querySelector(".zone-txt")
            div__zonetxt.innerHTML = "Fin du jeu"}
    })}
    afficherProposition(listeProposition[i])
    btn__valider.addEventListener('click', () => {
        if (saisiUtilisateur.value === listeProposition[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++}
        i++
        afficherResultat(score, i)
        saisiUtilisateur.value = ""
        if (listeProposition[i] === undefined) {
            let div__zonetxt = document.querySelector(".zone-txt")
            div__zonetxt.innerHTML = "Fin du jeu"
            btn__valider.disabled = true }
            else {
                afficherProposition(listeProposition[i])
            }

    });
    afficherResultat(score, i)
}

function afficherProposition (motnuméro) {
    let div__zonetxt = document.querySelector(".zone-txt")
    div__zonetxt.innerHTML = motnuméro
    
}