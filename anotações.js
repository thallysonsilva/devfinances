/*//FUNCTION DECLARATION

function sum (number1, number2){
    let total = number1+number2
    return total
}

let number1 = 5
let number2 = 8
console.log(`${number1} + ${number2} = ${sum(number1,number2)}`)

//ARROW FUNCTION

const myName = (name) => {
    console.log(name) 
}

myName('Thallyson')

// CALLBACK FUCTION

function fly (nome){
    console.log(nome() +' está voando')
}

const nome = () =>{
    return 'Thallyson'
}

fly(nome)

//FUNCTION CONSTRUCTOR

function Person (name, age){
    this.name = name,
    this.age = age
}

const thallyson = new Person('Thallyson', 19)

console.log(thallyson)

//DEFINIR CASAS DECIMAIS E TROCAR PONTO POR VÍRGULA

let number = 33.1212

console.log(number.toFixed(2).replace('.',','))

//CONVERSÃO STRING NUMBER

let abc = "123"
let num = 321

console.log(Number(abc))
console.log(String(num))

//COVERSÃO MAIÚSCULO E MINÚSCULO

let word = "programar é legal"

console.log(word.toLocaleUpperCase().toLowerCase())

//SEPARAR STRING EM UM ARRAY

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")

console.log(myArray)

//JUNTAR ARRAY EM UMA STRING

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// VERIFICAR SE O TEXTO CONTÉM A PALAVRA

console.log(phrase.includes("viver"))

//STRING PARA ARRAYS

console.log(Array.from(word))

//ADICIONAR ELEMENTO NO ARRAY
let techs = ['html','css', 'js']

techs.push("nodejs") //add no fim
techs.unshift("sql") //add no inicio

//REMOVER ELEMENTO DO ARRAY
techs.pop() //remove  no fim
techs.shift() //remove no inicio
techs.splice(1,2) // remove um ou mais elemento apartir de um index inicial

//ENCONTRAR POSIÇÃO DO ARRAY
let index = techs.indexOf('css') //retorna o index do elemento

let nota = 77

if(nota >= 90 && nota <= 100){
    nota = "A"
    console.log(nota)
}else if(nota >= 80 && nota < 90){
    nota = "B"
    console.log(nota)
}else if(nota >= 70 && nota < 80){
    nota = "C"
    console.log(nota)
}else if(nota >= 60 && nota < 70){
    nota = "D"
    console.log(nota)
}else if(nota >= 0 && nota < 60){
    nota = "E"
    console.log(nota)
}else{
    console.log('Nota inválida')
}

let familly = {
    despesas: [250, 50, 225],
    receitas: [50, 450]
}

function calculateBalance(familly) {
    let totalDespesas = 0
    let totalReceitas = 0

    for (const key of familly.despesas) {
        totalDespesas += key
    }

    for (const key of familly.receitas) {
        totalReceitas += key
    }

    let saldo = totalReceitas - totalDespesas

    console.log(saldo >= 0 ? `Saldo Positivo\nR$ ${saldo.toFixed(2)}` : `Saldo Negativo\nR$ ${saldo.toFixed(2)}`)
}

calculateBalance(familly)


let temperatura = "0 ºF"
let graus, resultado

if(temperatura.includes("C")){
    console.log("CONVERTENDO CELSIUS PARA FAHRENHEIT")
    
    graus = Number(temperatura.slice(0,2))
    resultado = graus * 9/5 + 32

    console.log(`${resultado} ºF`)

}else if(temperatura.includes("F")){    
    console.log("CONVERTENDO FAHRENHEIT PARA CELSIUS")

    graus = Number(temperatura.slice(0,2))
    resultado = (graus - 32) * 5/9

    console.log(`${resultado} ºC`)
}*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ]
    },

    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ]
    },
]

let numCategories = booksByCategory.length
let numBooksWealth = booksByCategory[0].books.length
let numBooksEmotionalIntelligence = booksByCategory[1].books.length

let bookCury = 
    
        




