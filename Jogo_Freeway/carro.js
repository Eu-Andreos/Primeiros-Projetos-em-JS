  // image(carro2, xCarro, 105, 50, 30)
  // image(carro3, xCarro, 155, 50, 30)
  // image(carro2, xCarro, 215, 50, 30)
  // image(carro1, xCarro, 265, 50, 30)
  // image(carro3, xCarro, 325, 50, 30)


// Carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 105, 155, 215, 265, 325];
let larguraCarros = 50;
let alturaCarros = 30;
let velocidadeCarros = [6, 5.5, 4, 5, 6, 5.5];

function mostraCarro1() {
  for (let i = 0; i < carros.length; i++) {
    image(carros[i], xCarros[i], yCarros[i],                 larguraCarros, alturaCarros)
  }
}



function moveCarro() {
  for (let i = 0; i < carros.length; i++)
  xCarros[i] -= velocidadeCarros[i];
}



function loopCarro() {
  for (let i = 0; i < carros.length; i++) {
    if (loopReturn(xCarros[i])) {
    xCarros[i] = 600
    }
  }
}



function loopReturn(xCarros) {
  return xCarros < -50
}







