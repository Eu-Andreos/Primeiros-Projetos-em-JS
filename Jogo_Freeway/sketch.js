function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraVaca();
  mostraCarro1();
  moveVaca();
  moveCarro();
  loopCarro();
  colisaoVaca();
  mostraPontos();
  ponto();
}



