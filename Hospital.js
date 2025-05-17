// hospital.js

// Classe Fila (FIFO - First In First Out)
class Fila {
    constructor() {
        this.itens = [];
    }

    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    desenfileirar() {
        return this.itens.shift();
    }

    frente() {
        return this.itens[0];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    imprimir() {
        return this.itens.join(", ");
    }
}

// Classe Pilha (LIFO - Last In First Out)
class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(elemento) {
        this.itens.push(elemento);
    }

    desempilhar() {
        return this.itens.pop();
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    imprimir() {
        return this.itens.join(", ");
    }

    // Extra: buscar um paciente na pilha
    buscarPaciente(nome) {
        return this.itens.includes(nome);
    }
}

// Instanciando Fila e Pilha
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adicionando 5 pacientes
filaAtendimento.enfileirar("João");
filaAtendimento.enfileirar("Maria");
filaAtendimento.enfileirar("Carlos");
filaAtendimento.enfileirar("Ana");
filaAtendimento.enfileirar("Lucas");

console.log("Fila inicial:", filaAtendimento.imprimir());
console.log("Próximo a ser atendido:", filaAtendimento.frente());

// Simulando atendimento de 2 pacientes
for (let i = 0; i < 2; i++) {
    if (!filaAtendimento.estaVazia()) {
        const pacienteAtendido = filaAtendimento.desenfileirar();
        console.log(`Atendendo: ${pacienteAtendido}`);
        pilhaProntuarios.empilhar(pacienteAtendido);
    }
}

// Mostrando a fila restante e a pilha de prontuários
console.log("Fila restante:", filaAtendimento.imprimir());
console.log("Prontuários empilhados:", pilhaProntuarios.imprimir());

// Extra: buscar um paciente na pilha
const pacienteBusca = "Maria";
console.log(`Paciente ${pacienteBusca} está na pilha?`, pilhaProntuarios.buscarPaciente(pacienteBusca) ? "Sim" : "Não");

// Extra: reiniciar a simulação
function reiniciarSimulacao(novosPacientes) {
    const novaFila = new Fila();
    const novaPilha = new Pilha();

    novosPacientes.forEach(p => novaFila.enfileirar(p));

    console.log("\n--- Nova Simulação ---");
    console.log("Fila inicial:", novaFila.imprimir());

    while (!novaFila.estaVazia()) {
        const paciente = novaFila.desenfileirar();
        console.log(`Atendendo: ${paciente}`);
        novaPilha.empilhar(paciente);
    }

    console.log("Prontuários empilhados:", novaPilha.imprimir());
}

// Descomente a linha abaixo para testar a reinicialização com novos pacientes
// reiniciarSimulacao(["Paula", "Fernando", "Lívia"]);
