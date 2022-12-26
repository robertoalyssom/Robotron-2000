const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = { // chave pecas, tem 4 valores/chaves, com masi 4 chaves e seus valores
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => { //-- parametro elemento para adicionar evento em todos os  elementos da Array
    elemento.addEventListener("click", (evento) => { //-- em todo envento de click tem o parâmetro (evento), que tem tudo o que aconteceu no click
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); // função com parâmetros chamada. target(alvo, onde aconteceu o click), do evento, retorna o elemento. textContent retorna o conteúdo (+/-) como parâmetro da function
        atualizaEstatisticas(evento.target.dataset.peca); // parâmetro é a peca clicada
    })
})

//--a function tem apenas a responsabilidade de fazer o calculo
function manipulaDados(operacao, controle) { //operacao = sinal do elem. clicado, controle = pai do elem. clicado ^
    const peca = controle.querySelector("[data-contador]"); // peca = contador/controle do elem. filho clicado (button)
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }
    else {  
        peca .value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca]); //acessando o obj e buscando o item clicado com [] (peca)

estatisticas.forEach( (elemento) => { // elemento é a lista de estatisticas percorrida/atualizada
    console.log(elemento.dataset.estatistica)
    //console.log(elemento.textContent) //--parâmetro traz a lista com cada elemento, textContent pega os textos desses elementos
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]; // texto das estatisticas + objt da peça clicada / objt do objt, que sao os valores
})                                       // atributo do objt, ex braco | valor de data-atribute de estatisticas  // **texto das estatisticas, em núm. + valores dos atributo (clicado), do objt pecas**
}

// -- -troca de cores do Robotron---
const botaoCores = document.querySelector("[data-trocaCor]");

botaoCores.onclick = () => {
    trocaCor(botaoCores.value);
};

function trocaCor(cor) {
    var imagemAtual = document.querySelector('#robotron');
    imagemAtual.src = "img/Robotron 2000 - " + cor + "/robotron.png";
};