class Funcionario {

    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e sou ${this.cargo}.`)
        return;
    }

    trabalhar() {
        console.log(`${this.nome} irá trabalhar 8 horas hoje.`)
    }
}

class Gerente extends Funcionario {

    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.)`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
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


// Função para exibir mensagens de erro na página
function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}


// Função para criar instância de Gerente
function criarGerente(nome, idade, cargo, departamento) {
    try {
        const gerente = new Gerente(nome, idade, cargo, departamento);
        return gerente;
    } catch (error) {
        throw new Error(`Erro ao criar gerente: ${error.message}`);
    }
}


// Função para criar instância de Desenvolvedor
function criarDesenvolvedor(nome, idade, cargo, linguagem) {
    try {
        const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
        return desenvolvedor;
    } catch (error) {
        throw new Error(`Erro ao criar desenvolvedor: ${error.message}`);
    }
}


// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    try {
        if (typeof nome !== 'string' || idade <= 0 || typeof cargo !== 'string' || typeof departamento !== 'string' || typeof linguagem !== 'string') {
            throw new Error('Todos os campos devem ser preenchidos corretamente.');
        }

        const gerente = criarGerente(nome, idade, cargo, departamento);
        const desenvolvedor = criarDesenvolvedor(nome, idade, cargo, linguagem);

        // Registrar as mensagens do formulário
        const gerenteResposta = `${gerente.seApresentar()}<br>${gerente.trabalhar()}<br>${gerente.gerenciar()}`;
        const desenvolvedorResposta = `${desenvolvedor.seApresentar()}<br>${desenvolvedor.trabalhar()}<br>${desenvolvedor.programar()}`;

        // Exibir as respostas e ocultar o formulário
        const respostasDiv = document.getElementById('respostas');
        const gerenteRespostaDiv = document.getElementById('gerenteResposta');
        const desenvolvedorRespostaDiv = document.getElementById('desenvolvedorResposta');
        respostasDiv.style.display = 'block';
        gerenteRespostaDiv.innerHTML = gerenteResposta;
        desenvolvedorRespostaDiv.innerHTML = desenvolvedorResposta;

        // Ocultar o formulário
        const formularioDiv = document.getElementById('formulario');
        formularioDiv.style.display = 'none';
    } catch (error) {
        exibirErro(error.message);
    }
}


// Adicionar um ouvinte de evento para o formulário
const formulario = document.getElementById('funcionarioForm');
formulario.addEventListener('submit', handleSubmit);



class Funcionario {

    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e sou ${this.cargo}.`)
        return;
    }

    trabalhar() {
        console.log(`${this.nome} irá trabalhar 8 horas hoje.`)
    }
}

class Gerente extends Funcionario {

    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.)`)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
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


// Função para exibir mensagens de erro na página
function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}


// Função para criar instância de Gerente
function criarGerente(nome, idade, cargo, departamento) {
    try {
        const gerente = new Gerente(nome, idade, cargo, departamento);
        return gerente;
    } catch (error) {
        throw new Error(`Erro ao criar gerente: ${error.message}`);
    }
}


// Função para criar instância de Desenvolvedor
function criarDesenvolvedor(nome, idade, cargo, linguagem) {
    try {
        const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
        return desenvolvedor;
    } catch (error) {
        throw new Error(`Erro ao criar desenvolvedor: ${error.message}`);
    }
}


// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    try {
        if (typeof nome !== 'string' || idade <= 0 || typeof cargo !== 'string' || typeof departamento !== 'string' || typeof linguagem !== 'string') {
            throw new Error('Todos os campos devem ser preenchidos corretamente.');
        }

        const gerente = criarGerente(nome, idade, cargo, departamento);
        const desenvolvedor = criarDesenvolvedor(nome, idade, cargo, linguagem);

        // Registrar as mensagens do formulário
        const gerenteResposta = `${gerente.seApresentar()}<br>${gerente.trabalhar()}<br>${gerente.gerenciar()}`;
        const desenvolvedorResposta = `${desenvolvedor.seApresentar()}<br>${desenvolvedor.trabalhar()}<br>${desenvolvedor.programar()}`;

        // Exibir as respostas e ocultar o formulário
        const respostasDiv = document.getElementById('respostas');
        const gerenteRespostaDiv = document.getElementById('gerenteResposta');
        const desenvolvedorRespostaDiv = document.getElementById('desenvolvedorResposta');
        respostasDiv.style.display = 'block';
        gerenteRespostaDiv.innerHTML = gerenteResposta;
        desenvolvedorRespostaDiv.innerHTML = desenvolvedorResposta;

        // Ocultar o formulário
        const formularioDiv = document.getElementById('formulario');
        formularioDiv.style.display = 'none';
    } catch (error) {
        exibirErro(error.message);
    }
}


// Adicionar um ouvinte de evento para o formulário
const formulario = document.getElementById('funcionarioForm');
formulario.addEventListener('submit', handleSubmit);
