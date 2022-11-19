// **************** PUXANDO INPUT'S ***************
const calcular = document.querySelector(".button");
const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");

/* ********************FUNÇÃO CLICAR************* */
calcular.addEventListener("click", (e) => {
  e.preventDefault();
  const value_peso = peso.value;
  const value_altura = altura.value;

  calculoIMC(value_peso, value_altura); // Chamando function calculoIMC
});

// ************** FUNCTION CALCULO *****************
function calculoIMC(value_peso, value_altura) {
  if (!value_peso || !value_altura) { // Se não tiver valor em peso e em altura, emitir alerta
    return alert("Digite um valor válido");
  }
  const answer = value_peso / (value_altura * value_altura); //cálculo do IMC
  result(answer); // Chamando function responsável pela ativação da cor responsável
}
// ************** FUNCTION RESULT *****************
function result(answer) { // function responsável pela ativação da cor responsável
  const elementos = document.querySelectorAll(".tabela tr");
  const fim = document.getElementById("fim");
  const value = Number(answer.toFixed(2));

  elementos.forEach((elemento) => {
    const valorInicio = Number(elemento.dataset.valorInicio); //Valor min por classificação
    const valorFim = Number(elemento.dataset.valorFim); //Valor Max por classificação

    if (elemento.classList.contains("active")) {
      elemento.classList.remove("active");
    }
    if (value >= valorInicio && value <= valorFim) {
      elemento.classList.add("active");
     
    } else if (value >= valorInicio && isNaN(valorFim)) {
      elemento.classList.add("active");
    }
  });
}
