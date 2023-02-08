let xVaca = 150;
let yVaca = 367;
let colisao = false;
let pontos = 0;

function mostraVaca() {
  image(vaca, xVaca, yVaca, 30, 30)
}

function moveVaca() {
  if
(keyIsDown(UP_ARROW)) {
    yVaca -= 5
  }
  
  if
(keyIsDown(DOWN_ARROW)) {
  if (yVaca < 367)
    yVaca += 5
  }
}

function colisaoVaca() {
  for (let i = 0; i < carros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xVaca, yVaca, 15)
    if (colisao) {
      hit()
    }
  }
}

function hit() {
  yVaca = 367;
  if (pontos > 0)
    pontos -= 1;
  somColisao.play();
}

function mostraPontos() {
  text(pontos, 450, 27);
  textSize(25);
  fill(color(255));
}

function ponto() {
  if (yVaca < 10) {
    pontos += 1;
    yVaca = 367;
    somPonto.play();
  }
}











