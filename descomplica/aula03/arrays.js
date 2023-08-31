var valores = [5, 1, 7, 2, 9];

console.log(valores[4]);
console.log("Array completo: " + valores);
console.log("Array invertido: " + valores.reverse());
console.log("");

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

var arr1 = [1, 2, 3, 4, 5, 6]

console.log("");
console.log(arr1.join('|'));
console.log("");

var retirado = arr1.shift();
console.log("Numero removido: " + retirado);
console.log("\nNovo array: " + arr1);


arr1.push(7);
console.log("\nAcrescendo valor 7 no final do array: " + arr1)

console.log(`\nA soma de todos os valores da sua lista foi de ${soma}\n`)