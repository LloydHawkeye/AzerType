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
    let divError = document.querySelector(".zone-saisie__error")
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
            score++
            i++
            saisiUtilisateur.setAttribute("style", "border:none")
            divError.setAttribute("style", "display:none")
        }
        else { if (saisiUtilisateur.value === "") {
                saisiUtilisateur.setAttribute("style", "border:red solid 1px")
                divError.setAttribute("style", "display:inherit")
            } else {
                i++
                saisiUtilisateur.setAttribute("style", "border:none")
                divError.setAttribute("style", "display:none")
            }
        }
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