/* 
OBJETIVO 1 - quando o user clicar no botão Veja o Trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o user cclicar no X devemos fechar a modal

OBJETIVO 1 - quando o user clicar no botão Veja o Trailer, devemos abrir a modal com o video do trailer
    - passo 1 - pegar o elemento que representa o botão na tela usando o js
    - passo 2 - identificar quando o user clicar no botao
    - passo 3 - pegar elemento na modal no js
    - passo 4 - abrir a modal na tela
   
OBJETIVO 2 - quando o user clicar no X devemos fechar a modal
    - passo 1 - pegar o elemento de fechar na modal usanod o js
    - passo 2 - identificar quando o user clicar no X
    - passo 3 - fechar a modal

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternarModal(){
modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
    
});


botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar modal
    alternarModal();
    video.setAttribute("src", "")
})





