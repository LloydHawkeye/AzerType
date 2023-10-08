const listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let motUtilisateur = prompt("entre une le mot : " + listeMots[0])

if (motUtilisateur === listeMots[0]) {
    score++
    console.log("GG bro, tu gagnes un pountos.")
    console.log("Score : " + score)  }
else {
    console.log("Dommage ! Tu feras mieux au prochain mot.")
    console.log("Score : " + score) }

motUtilisateur = prompt("entre une le mot : " + listeMots[1])

if (motUtilisateur === listeMots[1]) {
    score +=1
    console.log("GG bro, tu gagnes un pountos.")
    console.log("Score : " + score)  }
else {
    console.log("Dommage ! Tu feras mieux au prochain mot.")
    console.log("Score : " + score) }

    motUtilisateur = prompt("entre une le mot : " + listeMots[2])

if (motUtilisateur === listeMots[2]) {
    score +=1
    console.log("GG bro, tu gagnes un pountos.")
    console.log("Score : " + score)  }
else {
    console.log("Dommage ! Tu feras mieux au prochain mot.")
    console.log("Score : " + score) }