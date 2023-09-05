function checkPositve(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("O argumento deve ser de uma array")
    }

    const allPostive = numeros.every((num) => num > 0);
        if(allPostive){
            throw new Error("O array deve conter apenas números positivos");
        }
        return true;
}

try{
    const numbers = [1,2,3,4,5,6]

    const isPositive = checkPositve(numbers)

    console.log(isPositive)
    
}catch(error){
    console.log("Ocorreu um erro: ", error.message)
}