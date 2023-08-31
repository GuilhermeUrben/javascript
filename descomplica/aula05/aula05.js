//removendo uma posição dentro da array com o comando splice

var arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.splice(2, 2);

console.log(arr1);

//removendo nomes da lista e adicionando outros no lugar

var nomes = ["Maria", " João", " Lucas", " Pedro"];
console.log(`\nLista de nomes: ${nomes}`);

var novos = nomes.splice(1, 1, "Luiz");

console.log(`\nRemovendo o ${novos} e adicionando o "Luiz" na lista.`);
console.log(`\nLista com novo nome adicionado: ${nomes}\n`);

//removendo uma posição dentro da array com o comando splice

var arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.splice(2, 2);

console.log(arr1);

//removendo nomes da lista e adicionando outros no lugar

var nomes = ["Maria", " João", " Lucas", " Pedro"];
console.log(`\nLista de nomes: ${nomes}`);

var novos = nomes.splice(1, 1, "Luiz");

console.log(`\nRemovendo o ${novos} e adicionando o "Luiz" na lista.`);
console.log(`\nLista com novo nome adicionado: ${nomes}\n`);