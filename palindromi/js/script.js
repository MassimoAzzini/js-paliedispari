// PALINDROMI

const parolaUtente = prompt('Scrivi una parola').toLowerCase();
console.log(parolaUtente)

parolaContrario(parolaUtente);

function parolaContrario (parola){

  const splitParola = parola.split('');
  console.log(splitParola)

  const reversArray = splitParola.reverse();
  console.log(reversArray)

  const joinArray = reversArray.join("");
  console.log(joinArray)

  return joinArray;
};

