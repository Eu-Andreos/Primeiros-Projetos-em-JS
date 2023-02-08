// Formato da Bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 17;
var raio = diametro / 2;

// Velocidade da Bolinha
var xVelocidadeBolinha = 7;
var yVelocidadeBolinha = 7;

// Raquete 1
var xRaquete1 = 10;
var yRaquete1 = 175;
var larguraRaquete1 = 10;
var alturaRaquete1 = 70;

// Raquete 2
var xRaquete2 = 580;
var yRaquete2 = 175;
var yVelocidade;
var chanceErro = 0;

// Placar
var meusPontos = 0
var oponentePontos = 0

// Sons
var ponto;
var raquetada;
var trilha;



function preload() {
  ponto = loadSound("imagens/ponto.mp3");
  raquetada = loadSound("imagens/raquetada.mp3")
  trilha = loadSound("imagens/trilha.mp3")
}



function setup() {
  createCanvas(600, 400);
  trilha.loop();
}



function draw() {
  background(0);
  desenhaBola();
  movimentaBola();
  colisaoBorda();
  desenhaRaquete1(xRaquete1, yRaquete1);
  desenhaRaquete1(xRaquete2, yRaquete2);
  moveRaquete1();
  moveRaquete2();
  bolaColisao();
  placar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}
  
  
  
function desenhaBola() {
  circle(xBolinha,yBolinha,diametro);
}

  

function movimentaBola() {
  xBolinha += xVelocidadeBolinha;
  yBolinha += yVelocidadeBolinha;
}
  
  
  
function colisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0){
    xVelocidadeBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    yVelocidadeBolinha *= -1;
  }
}



function desenhaRaquete1(x, y) {
  rect(x, y, larguraRaquete1, alturaRaquete1)
}

function moveRaquete1(){
  if (keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  }
}

function moveRaquete2() {
  yVelocidade = yBolinha - alturaRaquete1 / 2 -30;
  yRaquete2 = yVelocidade;
}



function bolaColisao() {
  if (xBolinha - raio < xRaquete1 + larguraRaquete1 &&           yBolinha < yRaquete1 + alturaRaquete1 && yBolinha >       yRaquete1
    ) {
    xVelocidadeBolinha *= -1
    raquetada.play();
      }
  
  if (xBolinha + raio > xRaquete2 && yBolinha > yRaquete2       && yBolinha < yRaquete2 + alturaRaquete1
     ) {
    xVelocidadeBolinha *= -1
    raquetada.play();
      }
}




function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}




function placar() {
  stroke(255)
  textAlign(CENTER);
  textSize(25);
  fill(255,140,0);
  rect(130,3,40,30);
  rect(430,3,40,30);
  fill(255);
  text(meusPontos, 150,26);
  text(oponentePontos, 450, 26);
}



function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1
    ponto.play()
  }
  
  if (xBolinha < 10) {
    oponentePontos += 1
    ponto.play()
  }
}



