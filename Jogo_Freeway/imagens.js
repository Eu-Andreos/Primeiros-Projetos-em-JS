let imagemDaEstrada;
let vaca;
let carro1;
let carro2;
let carro3;

let somTrilha;
let somColisao;
let somPonto;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png")
  vaca = loadImage("imagens/ator-1.png")
  carro1 = loadImage("imagens/carro-1.png")
  carro2 = loadImage("imagens/carro-2.png")
  carro3 = loadImage("imagens/carro-3.png")
  carros = [carro1, carro2, carro3, carro1, carro3, carro2]
  
  somTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")
}