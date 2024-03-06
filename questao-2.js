const numeroDeEntrada = 6;
const qtdDeElementos = 14;

function fibonacci(num) {
  let seqfib = [0, 1];

  for (let i = seqfib.length; i < qtdDeElementos; i++) {
    seqfib[i] = seqfib[i - 2] + seqfib[i - 1];
  }

  const pertenceASequencia = seqfib.includes(num);

  if (pertenceASequencia) {
    console.log(
      `O numero ${numeroDeEntrada} pertence a sequência de fibonacci`
    );
  } else {
    console.log(
      `O numero ${numeroDeEntrada} não pertence a sequência de fibonacci`
    );
  }

  return pertenceASequencia;
}

fibonacci(numeroDeEntrada);
