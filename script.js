const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases  = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
let score = 0

let choixUtilisateur = prompt("Voulez vous des 'mots' ou des 'phrases' ?")
while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur = prompt("Désolé, je n'ai pas compris. Voulez vous des 'mots' ou des 'phrases' ?")
}

if (choixUtilisateur === "mots") {
    for (let i = 0; i < listeMots.length; i++ ) {
        let motUtilisateur = prompt("entre une le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
        score++ }
        }
}
else {
    if (choixUtilisateur === "phrases") {
        for (let i = 0; i < listePhrases.length; i++ ) {
            let motUtilisateur = prompt("entre une le mot : " + listePhrases[i])
            if (motUtilisateur === listePhrases[i]) {
            score++ }
            }
    }
}

console.log("Score : " + score)