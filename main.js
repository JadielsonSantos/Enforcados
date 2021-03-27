window.alert("Todas as palavras comecara com letras minuscula");
window.addEventListener("load", inicia)
const p = document.getElementById("resul");// pegando a tag p para colocar a palavra
const bo = document.getElementById("bo");


var letra;
var mostra;
var elemento = document.getElementById("letra");
var nu = document.getElementById("nu");
let descricao = document.getElementById("descricao");

nu.innerText = "Sua palavra contém: " + letra+ " letras.";

document.addEventListener('keypress', function(e){
       if(e.which == 13){
          pesquisa();
       }
}, false);

function pesquisa() {
  if(elemento.value.length == 1) {
      if(letra.includes(elemento.value)){
        var id = letra.indexOf(elemento.value);
        mostra[id] = elemento.value;
        p.innerText  = mostra.join("", ",");
        elemento.value = '';
        if(mostra.length == letra.length && mostra.includes("*") == false) {
        alert("Parabéns você acertou!!!");
        elemento.value = '';
        setTimeout(inicia, 3000);
        }

      }else {
        alert("Palavra errada: " + elemento.value + "!");
        elemento.value = '';
      }
  }
  if (elemento.value.length > letra.length || elemento.value.length > 1 && elemento.value.length < letra.length) {
    alert("Error, Tente acerta letra por letra ou uma palavra que contem "+letra.length+" letra")
  }
  if(elemento.value.length == letra.length) {
      const teste = letra.join("", ",");
      if(teste.includes(elemento.value)) {
        p.innerText = teste;
        alert("Parabéns você acertou!!!");
        elemento.value = '';
        setTimeout(inicia, 3000);
      }else {
        alert("Palavra errada: " + elemento.value + "!");
        elemento.value = '';
      }
  }
}
function inicia() {
  var ids = Math.floor(Math.random()* 5); // sortea um numero entre 0 ate o length do array
  // Palavras usadas no jogo 
  var lista1 = ["uva", "hora", "curso", "agricultor","chuveiro", "costureira", "celular"];
  var lista2 = ["***", "****", "*****", "**********","********", "**********", "*******"];
  var descri = ["Tem relação com Fruta!", "Tem relação com Tempo!", "Tem relação com aprendizado!", "Tem relação com Roça!","Tem no banheiro e todo mundo usa!","Todas as vós tem em casa!", "O que tem em toda casa, e ninguem larga"];
  // vou pega a palavra sorteada
  string1 = lista1[ids];
  string2 = lista2[ids];
  string3 = descri[ids];
  // vou serapa letra por letra e colocando uma ,
  letra = string1.split("");
  mostra = string2.split("");
  descricao.innerText = string3;
  elemento.value = '';
  p.innerText = "";
  nu.innerText = "Sua palavra contém: " + letra.length + " letras.";
}
