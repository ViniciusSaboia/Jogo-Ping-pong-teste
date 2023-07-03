let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let aceleracaoX = 8
let aceleracaoY = 8

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete= 10;
let alturaRaquete= 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let meusPontos = 0;
let pontosDoOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentacaoBolinha();
  verificaColisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  incluPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa()
}
function mostraBolinha() {
    circle (xBolinha, yBolinha, diametro);
}
function movimentacaoBolinha() {
  xBolinha += aceleracaoX;
  yBolinha += aceleracaoY;
}
function verificaColisaoBolinha() {
    if(xBolinha + raio > width || xBolinha - raio <0) {
    aceleracaoX *= -1;
  }
   if(yBolinha +raio > height || yBolinha - raio <0) {
    aceleracaoY *= -1;
  }
}
function mostraRaquete(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete)
}
function movimentaRaquete() {
  if(keyIsDown(87)){
    yRaquete -=10;
  }
  if(keyIsDown(83)){
    yRaquete +=10;
  }
   yRaquete = constrain(yRaquete, 0, 310);
}
function verificaColisaoRaquete(x){
    if (xBolinha - raio < xRaquete + comprimentoRaquete &&yBolinha - raio < yRaquete + alturaRaquete&& yBolinha + raio > yRaquete) {
        aceleracaoX *= -1;
    }
    if (xBolinha + raio > xRaqueteOponente + comprimentoRaquete &&yBolinha - raio < yRaqueteOponente + alturaRaquete&& yBolinha + raio > yRaqueteOponente) {
        aceleracaoX *= -1;
    }
  
}

function movimentaRaqueteOponente() {
  /*velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete /2 -90;
  yRaqueteOponente += velocidadeYOponente;
  */
    if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente +=10;
  }
  yRaqueteOponente = constrain(yRaqueteOponente, 0, 310);
}

function incluPlacar(){
  textAlign(CENTER)
  textSize(16)
  stroke(255)
  caixaMeusPontos()
  caixaPontosOponente()
}

function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos += 1
  }
  if(xBolinha < 10) {
    pontosDoOponente += 1
  }
}
function caixaMeusPontos(){
  fill(color(255,140,0))
  rect(230,10,40,20)
  fill(255);
  text(meusPontos, 250, 26);
}
function caixaPontosOponente(){
  fill(color(255,140,0))
  rect(330,10,40,20)
  fill(255);
  text(pontosDoOponente, 350, 26);
}
function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    aceleracaoX *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    aceleracaoY *= -1;
  }
}
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}