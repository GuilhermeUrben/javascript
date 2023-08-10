var valores = [9, 1, 7, 2, 9];

console.log(valores[4]);


for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: " + (pos+1) + "º Valor:"  + valores[pos])
}


var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha");

var soma = 0;

for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

console.log(`A soma de todos os valores da sua lista foi de ${soma}`)