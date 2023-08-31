function criaarFuncionario(nome, sobrenome,a, p){
    return{
        nome,
        sobrenome,
        altura : a,
        peso : p,
        calculoImc(){
            const indice = this.peso/(this.altura**2).toFixed(1)
            if(indice < 18.5){
                console.log("Você está abaixo do peso.")

            } else if(indice >= 18.5 && indice <= 24.9){
                console.log("Você está com peso normal.")

            } else if(indice >= 25 && indice <= 29.9){
                console.log("Você está acima do peso.")

            } else if(indice >= 30 && indice <= 34.9){
                console.log("Você está com obesidade 1.")

            } else if(indice >= 35 && indice <= 39.9){
                console.log("Você está com obesidade 2.")

            } else if(indice > 40){
                console.log("Você está com obesidade mórbida.")  
            
        }
    }
}
}

const p1= criaarFuncionario("Guilherme", "Urben", 1.75, 84);
p1.calculoImc();