var nome = "Guilherme Urben"
var x = nome.length;
console.log(x);

resultado = x > 13? "Obrigado" : "Por favor preencha seu nome completo";

console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Jogo do Sport vs Ituano";
var posicao = jogo.indexOf("Sport");
console.log(posicao);

var cortado = jogo.slice(8);
console.log(cortado);

var val = jogo.includes("Sport")
console.log(val);

var str1 = "Hello";
var str2 = " Turma";

var str3 = str1.concat(str2);
console.log(str3);

var frase = "   Olá você está aprendendo JavaScript     ";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr);