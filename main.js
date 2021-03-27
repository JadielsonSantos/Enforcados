// Pegando a tag (p) com id resultado para colocar a palavra ao acertar.
const resultado = document.getElementById("resultado");

let letra = ["c", "u", "r", "s", "o"];
let mostra = ["*", "*", "*", "*", "*"];
let elemento = document.getElementById("letra");
let dica = document.getElementById("dica");
let descricao = document.getElementById("descricao");

dica.innerText = "Sua palavra contém: " + letra.length + " letras.";

function pesquisar() {
  if(elemento.value.length == 1) {
      if(letra.includes(elemento.value)){
        var id = letra.indexOf(elemento.value);
        mostra[id] = elemento.value;
        resultado.innerText  = mostra.join("", ",");
        elemento.value = '';
        
        if(mostra.length == letra.length && mostra.includes("*") == false) {
          alert("Parabéns você acertou!!!");
          elemento.value = '';
          setTimeout(iniciar, 3000);
        }

      }else {
        alert("Palavra errada: " + elemento.value + "!");
        elemento.value = '';
      }
  }
  if(elemento.value.length == letra.length) {
      const teste = letra.join("", ",");

      if(teste.includes(elemento.value)) {
        resultado.innerText = teste;
        alert("Parabéns você acertou!!!");
        elemento.value = '';
        setTimeout(iniciar, 3000);        
      }else {
        alert("Palavra errada: " + elemento.value + "!");
        elemento.value = '';
      }
  }
}


function iniciar() {
  letra = ["h", "o", "r", "a"];
  mostra = ["*", "*", "*", "*"];
  
  console.log(letra);
  console.log(mostra);
  
  alert("Iniciar um novo jogo?");
  
  descricao.innerText = "Tem relação com convenções.";
  dica.innerText = "Sua palavra contém: " + letra.length + " letras.";
  resultado.innerText  = "";
}