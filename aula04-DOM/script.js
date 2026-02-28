//O **DOM (Document Object Model)** é a representação do HTML em forma de **árvore de objetos**.

//Isso permite que o JavaScript:

// - Leia elementos da página
// - Modifique textos
// - Troque imagens
// - Reaja a cliques
// - Crie elementos novos

//O navegador transforma o HTML em objetos manipuláveis.

//=====================================================
// SELECIONANDO ELEMENTOS DO DOM
//=====================================================

//Selecionar por ID
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

//Selecionar por classe
let caixas = document.getElementsByClassName("box");

//Mostrando no console para o aluno visualizar
console.log(titulo)
console.log(caixas)
console.log(imagem)

//=====================================
//Função para alterar o conteúdo
//=====================================

function alterar(){
    //alterando textos
    titulo.innerText = "Novo Título";
    subtitulo.innerText = "Subtitulo alterado com sucesso";
    paragrafo.innerText = "O texto do parágrafo foi modificado!";

    //alterando imagem
    caixas[0].innerText = "Primeiro parágrado alterado";
    caixas[1].innerText = "Segundo parágrado alterado";

    //alterando a imagem
    imagem.src = "https://media.tenor.com/ZrLYNP6HJ7YAAAAj/deltarune-knight.gif";
}

