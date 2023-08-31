class Funcionario{

    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e sou ${this.cargo}.`)
        return;
    }

    trabalhar(){
        console.log(`${this.nome} irá trabalhar 8 horas hoje.`)

    }
}


class Gerente extends Funcionario{
    
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.)`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`O funcionário ${this.nome}, usa ${this.linguagem} para programar.`)
    }
}


const gerente1 = new Gerente('João', 35, 'Gerente de Projetos', 'TI');
const desenvolvedor1 = new Desenvolvedor('Maria', 28, 'Desenvolvedora', 'JavaScript');

gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

desenvolvedor1.seApresentar();
desenvolvedor1.trabalhar();
desenvolvedor1.programar();
