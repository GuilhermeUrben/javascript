// forma de criar objetos

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Urben'
}

console.log(pessoa)

// 2 -  forma de criar objetos 

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log(funcionario.nome)

function criarPessoa(nome,sobrenome){
    return{nome, sobrenome}
}

const p1 = criarPessoa("Arthur", "Silva", 32)
const p2 = criarPessoa("João", "Silva", 23)

console.log(p1.nomeCompleto)
console.log(p2.nomeCompleto)

// 3 - forma de criar objetos

function criarPessoa(nome, sobrenome, i){
    return{
        nome,
        sobrenome,
        idade : i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

console.log(p1.nomeCompleto)
console.log(p2)
