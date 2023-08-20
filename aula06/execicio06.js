const prompt = require("prompt-sync")();

// Solicitar a escolha da bebida ao cliente
var bebida = prompt("Escolha uma bebida: cafe, leite ou cha: ");

// Inicializar a variável para armazenar o valor da bebida
var valor;

// Avaliar a opção selecionada
switch (bebida.toLowerCase()) {
    case "cafe":
        valor = 2.50;
        break;
    case "leite":
        valor = 1.50;
        break;
    case "cha":
        valor = 1.00;
        break;
    default:
        // Se a opção for inválida.
        console.log("Escolha inválida. Por favor, escolha entre cafe, leite ou cha.");
}



// Avaliar a opção selecionada
switch (bebida.toLowerCase()) {
    case "cafe":
        valor = 2.50;
        break;
    case "leite":
        valor = 1.50;
        break;
    case "cha":
        valor = 1.00;
        break;
    default:
        // Se a opção for inválida.
        console.log("Escolha inválida. Por favor, escolha entre cafe, leite ou cha.");
}

