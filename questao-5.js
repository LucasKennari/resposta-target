let palavraDeEntrada = "palavra para inverter";

function inverterPalavra(palavra) {
  let arrPalavra = palavra.split("");
  let palavraInvertida = [];

  let index = arrPalavra.length - 1;

  while (index >= 0) {
    palavraInvertida.push(arrPalavra[index]);
    index--;
  }

  const palavraFormatada = palavraInvertida.join("");

  console.log(palavraInvertida.join(""));
  return palavraFormatada;
}

inverterPalavra(palavraDeEntrada);
