// PARI E DISPARI

const numeroUtente = parseInt(prompt('Scrivi un numero da 1 a 5'));
const pariDispari = prompt('Scegli "pari" o "dispari"').toLowerCase();
const outputMessaggio = document.getElementById('output')
console.log(pariDispari, numeroUtente);

let messaggio;

// genera numero pc
const randomPc = randomizer(1,5);
console.log('num random pc', randomPc);

function randomizer (min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}


// funziona somma numeri
const sommaUtentePc = sommaNumeri(numeroUtente,randomPc);
console.log('somma numeri', sommaUtentePc);

function sommaNumeri(n1, n2){
  const somma  = n1 + n2;
  return somma;
}

// verifica se la somma è pari o dispari
const sommaPariDispari = pari(sommaUtentePc)
console.log('somma pari o dispari:', sommaPariDispari);

function pari(numero){
  if(numero % 2) return 'dispari';

  return 'pari';
}

// paragono scelta pari o dispari con risultato funzione
if(pariDispari === sommaPariDispari){
  messaggio = `Hai vinto!`;
}else{
  messaggio = `Hai perso`;
}

console.log(messaggio);
outputMessaggio.innerHTML = `Tu hai scelto il numero ${numeroUtente} e ${pariDispari.toUpperCase()}, il pc ha estratto il numero ${randomPc}, la somma dei numeri è ${sommaUtentePc} quindi: ${messaggio}`



