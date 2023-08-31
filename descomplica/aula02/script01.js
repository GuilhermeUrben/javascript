let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n")
let idade = rlSync.question("Qual a sua idade?\n")
console.log(`\nOlá, ${nome}, Você tem ${idade} anos.`)

