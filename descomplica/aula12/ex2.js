class MinhaClasse{

    constructor(valor){
        this.valor = valor;
    }

    operacaoAssicrona(){
        return new Promise((resolve, reject) =>{

            const resultado = this.valor * 2;

            if(resultado >= 10){
                resolve(resultado)
            }else{
                reject("O resultado é negativo")
            }
        })
    }
}


const mihhaClasse = new MinhaClasse(5);
mihhaClasse.operacaoAssicrona()
.then((reusltado) =>{
    console.log("O resultado da operação é: ",reusltado)
})
.catch((erro) =>{
    console.log("Ocorreu um problema: ",erro)
})