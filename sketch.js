// Divertida Mente - livre -Animação, Comédia, Família
// Homem-Aranha: Através do Aranhaverso -10 Ação, Aventura, Animação, Fantasia
// Meu malvado favorito- livre - Animação, Comédia, Família
// Um dia a casa cai- 12 anos - Comédia Música

let campoIdade;
let campoAnimacao;
let campoAventura;

function setup() {
    createCanvas(600, 400);
  createElement("h2", "Recomendador de Filmes")
  createSpan("Sua Idade:")
    campoIdade = createInput("??");
    campoFantasia = createCheckbox("Gosta de Animação?");
    campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
    background ("white");
    let idade = campoIdade.value();
    let gostaDeAnimacao = true;
    let recomendacao = geraRecomendacao(idade, gostaDeAnimacao);
    let gostaDeAventura = campoAventura.checked();
  fill(255,100,30)
  textAlign(CENTER, CENTER)
  textSize(20)
    text(recomendacao, width/2, height/2);
}
function geraRecomendacao(idade, gostaDeAnimacao, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Um dia a casa cai";
    } else {
      if (idade >= 12) {
        if(gostaDeAnimacao || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Divertida Mente";
        }
      } else {
        if (gostaDeAnimacao) {
          return "Meu malvado favorito";
        } else {
          return "Extraordinário";
        }
      }
    }
  } else {
    if (gostaDeAnimacao) {
      return "Os Croods";
    } else {
      return "Meu Primeiro Amor";
    }
  }
}
