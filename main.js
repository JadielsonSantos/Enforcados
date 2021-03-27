// pegando a tag p para colocar a palavra
const p = document.getElementById("resul");
var letra = ["c", "u", "r", "s", "o"];
var mostra = ["*", "*", "*", "*", "*"];
var elemento = document.getElementById("letra");
var nu = document.getElementById("nu");
let descricao = document.getElementById("descricao");

nu.innerText = "Sua palavra contém: " + letra.length + " letras.";

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
  letra = ["h", "o", "r", "a"];
  mostra = ["*", "*", "*", "*"];
  console.log(letra);
  console.log(mostra);
  alert("Iniciar um novo jogo?");
  descricao.innerText = "Tem relação com convenções.";
  nu.innerText = "Sua palavra contém: " + letra.length + " letras.";
  p.innerText  = "";
}