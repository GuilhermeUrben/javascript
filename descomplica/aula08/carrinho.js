const carrinhoCompras = [];


function adicionarItem(item){
    carrinhoCompras.push(item)
}

function removerItem(item){
    const index = carrinhoCompras.indexOf(item)
    if(index !== -1){
        carrinhoCompras.splice(index, 1)
    }
}

function visualizarItem(){
    if(carrinhoCompras.length == 0){
        console.log("Seu carrinho de compras está vazio")
    }
    else{
        console.log("Items adicionados ao carrinho:")
        for(let i = 0; i < carrinhoCompras.length; i++){
            console.log(`${i + 1} - ${carrinhoCompras[i]}`)
        }
    }
}

function esvaziarCarrinho(){
    carrinhoCompras.length = 0;
    console.log("Seu carrinho de compras foi esvaziado.")
}

adicionarItem("Tenis")
adicionarItem("Bolsa")
adicionarItem("Calça")
adicionarItem("Sapato")
adicionarItem("Sandalia")

visualizarItem()
removerItem("Bolsa")
visualizarItem()