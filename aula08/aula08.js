function multiplicar(x, y){
    return x * y
}

var produto = multiplicar(4, 2);
console.log(produto)


function somaValores(a,b,c){
    var total = a + b + c
    return total;
}

var f = somaValores(8,2,3)
console.log(f);


var infoCal = function(a, b, c){
    return a + b + c;
}

console.log(infoCal(2,5,7))


const soma = (num1, num2) =>{
    return num1 + num2
}

console.log(soma(3,9))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num )
console.log(valores)

var listaProdutos = ["geladeira","fogão","air Fryer"];
var listaEmMaiuscula = listaProdutos.map(primeriaEmMaiuscula);

function primeriaEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaEmMaiuscula)