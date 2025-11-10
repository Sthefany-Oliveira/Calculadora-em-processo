// Pra fucionar a calculadora 


//cost tela acessa o const input
const tela = document.getElementById("tela")


//serve para adicionar o numero na tela
function adicionarValor(valor) {
    tela.value += valor
}


//limpar/apagar tudo o que esta na tela da calculadora
function limparTela() {
    tela.value = ""
}


// vai apagar a ultima caractere que foi clicada da string
function apagarUltimo() {
    tela.value = tela.value.slice(0, -1)
}


//calcula os numeros que vc colocou
function calcularResultado() {
    try {  // define que um bloco  o programa tentara, e se der erro vai pro (catch) / catch- captura os erros que vem do try
        tela.value = eval(tela.value) // ATENÇÃO- eval execulta código javaScript- funciona para expressões matemáticas simples, mas requer cuidado com entrada do usuário
    } catch (erro) {
        tela.value = "erro"
    }
}

//ele  aciona que os cliques do teclado funcione

// é uma nova função de declaração junto com evento 
document.addEventListener("keydown", function (evento) {
    const tecla = evento.key; //pega o valor da tecla pressionada EX: "1", "+",enter, "Backspace"
    if("1234567890+-*/.".includes(tecla)){
        adicionarValor(tecla)
    }

    if(tecla === "Enter" || tecla === "="){
        calcularResultado();
    }

    if(tecla === "Backspace"){
        apagarUltimo();
    }

    if(tecla === "Escape"){
        limparTela(); 
    }
}



    
)

