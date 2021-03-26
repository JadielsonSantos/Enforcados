// pegando o p para coloca a palavra
const p = document.getElementById("resul")
var letra = ["c", "u", "r", "s", "o"]
var mostra = ["*", "*", "*", "*", "*"]
var elemento = document.getElementById("letra")
var nu = document.getElementById("nu")
nu.innerText = "Sua palavra contem: "+letra.length

function pesquisa() {
  if(elemento.value.length == 1) {
      if(letra.includes(elemento.value)){
        var id = letra.indexOf(elemento.value)
        mostra[id] = elemento.value
        p.innerText  = mostra.join("", ",")
        elemento.value = ''
        if(mostra.length == letra.length && mostra.includes("*") == false) {
        alert("Parabens Voce Acertou")
        elemento.value = ''
        setTimeout(inicia, 3000);
        }

      }else {
        alert("nao tem esse elemento "+elemento.value);
        elemento.value = ''
      }
  }
  if(elemento.value.length == letra.length) {
      const teste = letra.join("", ",")
      if(teste.includes(elemento.value)) {
        p.innerText = teste
        alert("Parabens Voce Acertou")
        elemento.value = ''
        setTimeout(inicia, 3000);
      }else {
        alert("erro nao exites essa palavra: "+elemento.value)
        elemento.value = ''
      }
  }
}
function inicia() {
  letra = ["h", "o", "r", "a"]
  mostra = ["*", "*", "*", "*"]
  console.log(letra)
  console.log(mostra)
  alert("novo jogo")
  nu.innerText = "Sua palavra contem: "+letra.length
  p.innerText  = ""
}