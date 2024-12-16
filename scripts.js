let imagem = document.querySelector(".imagem-copo")
circulo = document.querySelector(".circulo")

function trocaImagem(endereco) {
    imagem.src =endereco
}

function trocarCor(cor) {
    circulo.style.background = cor
}
