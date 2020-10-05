const readlineSync = require("readline-sync")

var sujeto = ["Juan", "Pedro", "Josefa", "Laura", "Hideo Kojima", "Ramón", "Un grupo de vietnamitas", "El cuerpo de estudiantes", "El equipo directivo", "Ese de ahí", "Esa de ahí"]
var verbo = ["come", "salta", "baila", "canta", "saltaba", "comía", "bailaba", "estudia", "estudiará", "estudiaba", "saltará", "bailará", "cantará"]
var cc = ["en el parque", "en su casa", "a la tarde", "al caer el sol", "en el tren", "en la sala de reuniones", "en vietnam", "en Cataluña", "en su país", "porque sí", "porque aprobó", "porque le dejan"]

var frases = []
var repeticiones = 100

console.log("Categorías:")
console.log("1. sujeto")
console.log("2. verbo")
console.log("3. cc")
var categ = readlineSync.question(">")
console.log("Palabra:")
var palabra = readlineSync.question(">")
console.log("Veces:")
console.log("(max 1. " + (verbo.length*cc.length) + "  2. " + (sujeto.length*cc.length) + "  3. " + (sujeto.length*verbo.length) + " )")
var i = readlineSync.question(">")

switch (categ) {
    case "1":
        while (i > 0) {
            var verbR = randomItem(verbo)
            var ccR = randomItem(cc)
            var frase = (palabra + " " + verbR + " " + ccR + ".")
            if(!(frase in frases)){
                frases.push(frase)
                console.log(frase)
            }
            else{
                repeticiones++
                console.log("repe jaja")
                break
            }
            i--
        }
        break;
    case "2":
         while (i > 0) {
            var sujetoR = randomItem(sujeto)
            var ccR = randomItem(cc)
            var frase = (sujetoR + " " + palabra + " " + ccR + ".")
            if(!(frase in frases)){
                frases.push(frase)
                console.log(frase)
            }
            else{
                repeticiones++
                break
            }
            i--
         }
        break;
    case "3":
        while (i > 0) {
            var verbR = randomItem(verbo)
            var sujetoR = randomItem(sujeto)
            var frase = (sujetoR + " " + verbR + " " + palabra + ".")
            if(!(frase in frases)){
                frases.push(frase)
                console.log(frase)
            }
            else{
                repeticiones++
                break
            }
            i--
        }
        break;
    default:
        console.log("Error: caregoría no definida")
        break;
}
console.log(repeticiones)

function randomItem(list) {
    return list[Math.floor((Math.random()*list.length))];
  } 