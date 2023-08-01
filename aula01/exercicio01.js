const readline = require('readline-sync');

const nome = readline.question('Digite seu nome: ');

const sobrenome = readline.question('Digite seu sobrenome: ');

const nomeCompleto =  `${nome} ${sobrenome}`;
console.log('Nome Completo:', nomeCompleto);
