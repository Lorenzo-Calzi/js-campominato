/* Calcolo Numero Random */
function random_bombe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var diff = Number(prompt('Scegli il livello di difficoltà: 0 - 1 - 2'));
var lista_bombe = [];
var bomba;
var limit;
var punteggio = 0;
var list = [];

if(diff == 0) {
    limit = 100;
} else if (diff == 1) {
    limit = 80;
} else if(diff == 2) {
    limit = 50;
}

var possibilità = limit - 16;

while (lista_bombe.length < 16) {
    bomba = random_bombe(1, limit);

    if(!lista_bombe.includes(bomba)) {
        lista_bombe.push(bomba);
    }
}
console.log(lista_bombe);
/* /Calcolo Numero Random */

/* Condizioni */
do {
    var userNumber = Number(prompt('Inserire un numero compreso tra 1 e ' + limit))
    
    if(lista_bombe.includes(userNumber)) {
        alert('Sei saltato su una mina! Punti totalizzati: ' + punteggio)
    } else if(list.includes(userNumber)) {
        alert('Numero già inserito');
    } else if (userNumber < 1 || userNumber > limit){
        alert('Inserire un numero compreso tra 1 e ' + limit + '!')
    } else if (isNaN(userNumber)){
        alert('Inserire un numero compreso tra 1 e ' + limit + '!');
    } else {
        list.push(userNumber);
        punteggio = punteggio + 1;
    }
    
} while (list.length < possibilità && !lista_bombe.includes(userNumber));

if(list.length == possibilità){
    alert('Hai vinto')
}

console.log(list);
console.log(punteggio);
/* /Condizioni */