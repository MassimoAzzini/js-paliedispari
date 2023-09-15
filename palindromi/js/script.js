// PALINDROMI

const parolaUtente = prompt('Scrivi una parola').toLowerCase();

const outputMassaggio = document.getElementById('output');

let parolaGirata = parolaContrario(parolaUtente);


function parolaContrario (parola){

  const splitParola = parola.split('');

  const reversArray = splitParola.reverse();

  const joinArray = reversArray.join('');
  
  return joinArray;

};



if (parolaUtente === parolaGirata){

  outputMassaggio.innerHTML = `${parolaUtente.toUpperCase()} è una parola palindroma`;

}else{

  outputMassaggio.innerHTML = `${parolaUtente.toUpperCase()} NON è una parola palindroma`;

}

